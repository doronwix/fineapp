const { parentPort, workerData } = require("worker_threads");

const parseXbrl = require("parse-xbrl-10k");

// Main thread will pass the data you need
// through this event listener.

parseXbrl
  .parseStr(workerData.data, workerData.symbolId)
  .then((data) => {
    //let url = response.config.url;
    parentPort.postMessage({ data, url: workerData.url });
  })
  .catch((err) => parentPort.postMessage({ err }))
  .done(() => parentPort.close());
