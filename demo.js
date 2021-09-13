const { MongoClient } = require('mongodb')

async function main() {
    const uri="mongodb+srv://covidm-1:test@covidm.x4ikw.mongodb.net/Covidm?retryWrites=true&w=majority"

    const client = new MongoClient(uri);
    try{
        await client.connect();
    }catch(e) {
        console.error(e);

    }finally{
        await client.close();
    }
}

main().catch(console.error)