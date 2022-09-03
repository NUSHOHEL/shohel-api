// Tl8qyKOu3kQ6sK65
const { MongoClient, ServerApiVersion } = require("mongodb");
const dbconnect = () => {
  const uri = "mongodb+srv://pocketBazar:Tl8qyKOu3kQ6sK65@cluster0.qflry.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  client.connect((err) => {
    const collection = client.db("randomusers").collection("users");
    // perform actions on the collection object
    console.log("db connected");
    client.close();
  });
};
module.exports = dbconnect;
