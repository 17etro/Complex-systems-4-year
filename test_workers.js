const { Worker } = require('worker_threads')
const { STREAMS_COUNT } = require('./constants')


function runService(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./my-worker.js', { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    })
  })
}

async function run(i) {
  await runService(i)
}


function createRuns() {
  const promiseArray = []
  for (let i = 0; i < STREAMS_COUNT; i++) {
    promiseArray.push(run(i).catch(err => console.error(err)))
  }
  return promiseArray
}

Promise.all(createRuns())