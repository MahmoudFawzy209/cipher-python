// pyodide-worker.js - مشغل بايثون WebAssembly لموقع شيفرة
importScripts("https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js");

let pyodide = null;
let isReady = false;
let pyodidePromise = null;

function initPyodide() {
  if (pyodidePromise) return pyodidePromise;

  pyodidePromise = (async () => {
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
      return pyodide;
    } catch (error) {
      self.postMessage({ type: "status", status: "error", message: "فشل تحميل محرك بايثون: " + error.message });
      pyodidePromise = null;
      throw error;
    }
  })();

  return pyodidePromise;
}

self.onmessage = async (event) => {
  const { type, code, id } = event.data;

  if (type === "init") {
    await initPyodide();
  } else if (type === "run") {
    try {
      if (!isReady || !pyodide) {
        self.postMessage({ type: "stdout", text: "⚡ جاري تحميل محرك بايثون في المتصفح لأول مرة...\n" });
        await initPyodide();
      }

      self.postMessage({ type: "status", status: "running" });
      const startTime = performance.now();

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
