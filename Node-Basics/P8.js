// multi thread

const cluster = require('cluster')

if(cluster.isWorker) {
    console.log('node is running inmulti thread')
} else {
    cluster.fork()
    cluster.fork()
    cluster.fork()
    cluster.fork()
}