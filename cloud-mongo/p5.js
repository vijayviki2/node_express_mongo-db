const { client } = require(`./dbconnect`)
const dbName =  "usersdb"



async function main() {
    try {
        await client.connect()
        console.log('mongodb connected')
        const db = client.db(dbName)
        const collection = db.collection('users')
        const finResp = await collection.deleteOne({ email : "raj@gmail.com"}) /*delete() -delete single users data*/
        console.log(`delete success..`, finResp)
    } finally {
        await client.close()
    }
}

main().catch(err => console.log(err.messsage))