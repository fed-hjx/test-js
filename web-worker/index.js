var myWorker = new Worker('worker.js')
myWorker.postMessage(10e9)

myWorker.onmessage = function (rs) {
    var data = rs.data;
    console.log(data)
}
console.log('start')