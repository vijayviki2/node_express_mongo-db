const { client } = require(`./dbconnect`)
const dbName =  "usersdb"



async function main() {
    try {
        await client.connect()
        console.log('mongodb connected')
        const db = client.db(dbName)
        const collection = db.collection('users')
        const finResp = await collection.findOne({ email : "dev@gmail.com"}) /*find() -READ single users data*/
        console.log(`users =`, finResp)
    } finally {
        await client.close()
    }
}

main().catch(err => console.log(err.messsage))