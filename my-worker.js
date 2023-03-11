const { workerData, parentPort } = require('worker_threads')
const { calculateFormulas } = require('./config')

const index = workerData

console.time(`worker ${index}`)
const results = calculateFormulas({ part: workerData })
console.timeEnd(`worker ${index}`)

parentPort.postMessage({ results })