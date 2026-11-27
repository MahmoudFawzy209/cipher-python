// pyodide-worker.js - مشغل بايثون WebAssembly لموقع شيفرة
importScripts("https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js");

let pyodide = null;
let isReady = false;

async function initPyodide() {
  try {
    self.postMessage({ type: "status", status: "loading", message: "جاري تحميل محرك بايثون..." });
    pyodide = await loadPyodide({
      stdout: (text) => {
        self.postMessage({ type: "stdout", text: text + "\n" });
      },
      stderr: (text) => {
        self.postMessage({ type: "stderr", text: text + "\n" });
      }
    });

    isReady = true;
    self.postMessage({ type: "status", status: "ready", message: "محرك بايثون جاهز للتشغيل الفوري." });
  } catch (error) {
    self.postMessage({ type: "status", status: "error", message: "فشل تحميل محرك بايثون: " + error.message });
  }
}

self.onmessage = async (event) => {
  const { type, code, id } = event.data;

  if (type === "init") {
    if (!pyodide) {
      await initPyodide();
    }
  } else if (type === "run") {
    if (!isReady || !pyodide) {
      self.postMessage({ type: "stderr", text: "جاري تهيئة بايثون، انتظر لحظة وأعد الضغط...\n" });
      self.postMessage({ type: "finished", id, success: false });
      return;
    }

    self.postMessage({ type: "status", status: "running" });
    const startTime = performance.now();

    try {
      await pyodide.runPythonAsync(code);
      const executionTime = ((performance.now() - startTime) / 1000).toFixed(2);
      self.postMessage({ 
        type: "finished", 
        id, 
        success: true, 
        executionTime: `${executionTime}s` 
      });
    } catch (err) {
      self.postMessage({ 
        type: "stderr", 
        text: `❌ ${err.toString()}\n` 
      });
      self.postMessage({ 
        type: "finished", 
        id, 
        success: false 
      });
    } finally {
      self.postMessage({ type: "status", status: "ready" });
    }
  }
};

initPyodide();
