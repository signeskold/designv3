const mongo = require("mongodb").MongoClient;
let databj;
let config;

try {
    config = require("../config.json");
} catch (err) {
    console.log(err);
}
try {
    databj = require("./database.json");
} catch (err) {
    console.log(err);
}

const username = process.env.SECRET_USERNAME || config.username;
const password = process.env.SECRET_PASSWORD || config.password;
const collectionName = databj.collection;

const database = {
    getDb: async function getDb () {
        let dsn = `mongodb+srv://${username}:${password}@cluster0.lzb1l.mongodb.net/${databj.database}?retryWrites=true&w=majority`;

        if (process.env.NODE_ENV === 'test') {
            dsn = `mongodb+srv://${username}:${password}@cluster0.lzb1l.mongodb.net/texteditor-test?retryWrites=true&w=majority`
        }

//dsn = "mongodb://localhost:27017/${databj.database}";
        const client  = await mongo.connect(dsn, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = await client.db();
        const collection = await db.collection(collectionName);

        return {
            collection: collection,
            client: client
        };
    }
};

module.exports = database;
