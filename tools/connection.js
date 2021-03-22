
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbudl:Shapla16@Doel26@casualty.giqod.mongodb.net/casualty?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
