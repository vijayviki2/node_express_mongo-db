const { MongoClient, SeverApiVersion, ServerApiVersion } = require('mongodb')

const uri ="mongodb+srv://vijayviki07:VijayViki-2@cluster0.ldt571y.mongodb.net/?retryWrites=true&w=majority"

//const uri = "mongodb://localhost:27017"

const client = new MongoClient(uri, {
    serverApi: {
        version:ServerApiVersion.v1,
        deprecationErrors: true,
        strict: true
    }
})

module.exports = { client }

// async function main() {
//     try {
//         await client.connect()

//         console.log(`mongodb connected`)
//     } finally {
//         await client.close()
//     }
// }

// main().catch(err => console.log(err.message))