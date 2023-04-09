const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017/kampus";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

let client = null;

async function connect() {
  if (client && client.isConnected()) {
    return client;
  }

  client = new MongoClient(uri, options);
  await client.connect();
  return client;
}

function getDb(dbName) {
  if (!client || !client.isConnected()) {
    throw new Error("Database is not connected");
  }

  return client.db(dbName);
}

function disconnect() {
  if (client && client.isConnected()) {
    client.close();
    client = null;
  }
}

module.exports = { connect, getDb, disconnect };
