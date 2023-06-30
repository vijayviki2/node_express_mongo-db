const { client } = require(`./dbconnect`)
const dbName =  "usersdb"



async function main() {
    try {
        await client.connect()
        console.log('mongodb connected')
        const db = client.db(dbName)
        const collection = db.collection('users')
        const finResp = await collection.updateOne({ email : "dev@gmail.com"},{
            $set: {
                name  : "Raj",
                email : "raj@gmail.com"
            }
        }) /*update() -update single users data*/
        console.log(`users =`, finResp)
    } finally {
        await client.close()
    }
}

main().catch(err => console.log(err.messsage))