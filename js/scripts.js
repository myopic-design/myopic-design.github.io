/*

*/

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js", { scope: "/" });

  window.addEventListener("load", () => {
    navigator.serviceWorker.controller?.postMessage({ command: "trimCaches" });
  });
}
