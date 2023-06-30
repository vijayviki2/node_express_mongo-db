const { Collection } = require("mongodb");
const { client } = require(`./dbconnect`)
const dbName =  "usersdb"

let data = [
    {
        name : "Dev",
        email : "dev@gmail.com"
    },
    {
        name : "Ram",
        email  : "ram@gmail.com"
    },
    {
        name : "Abd",
        email : "abd@gmail.com"
    }
];

async function main() {
    try {
        await client.connect()
        console.log('mongodb connected')
        const db = client.db(dbName)
        const collection = db.collection('users')
        const insResp = await collection.insertMany(data)
        console.log(`users data inserted successfully`)
    } finally {
        await client.close()
    }
}

main().catch(err => console.log(err.message))