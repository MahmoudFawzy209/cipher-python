// pyodide-worker.js - مشغل بايثون WebAssembly لموقع شيفرة
const PYODIDE_CDN_BASE = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";
importScripts(PYODIDE_CDN_BASE + "pyodide.js");

let pyodide = null;
let isReady = false;
let pyodidePromise = null;

function initPyodide() {
  if (pyodidePromise) return pyodidePromise;

  pyodidePromise = (async () => {
    try {
      self.postMessage({ type: "status", status: "loading", message: "جاري تحميل محرك بايثون..." });
      
      // تعيين indexURL صراحة إلى CDN يضمن تحميل كافة ملفات zip و wasm الصحيحة
      pyodide = await loadPyodide({
        indexURL: PYODIDE_CDN_BASE,
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
      const errDetail = error ? (error.message || error.stack || error.toString()) : "خطأ غير معروف";
      self.postMessage({ type: "status", status: "error", message: "فشل تحميل محرك بايثون: " + errDetail });
      self.postMessage({ type: "stderr", text: "❌ خطأ في تحميل بيئة بايثون: " + errDetail + "\n" });
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
      const errMsg = err ? (err.message || err.toString()) : "خطأ أثناء تنفيذ الكود";
      self.postMessage({ 
        type: "stderr", 
        text: `❌ ${errMsg}\n` 
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
