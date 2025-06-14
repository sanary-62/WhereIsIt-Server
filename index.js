const express = require('express') 
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@sanary.5oi2id1.mongodb.net/?retryWrites=true&w=majority&appName=Sanary`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    


const itemsCollection = client.db ('WhereIsIt').collection('items');



app.get ('/items', async(req,res) => {
    const cursor = itemsCollection.find();
    const result = await cursor.toArray();
    res.send(result);
})


app.get('/items/:id', async(req,res) =>{
         const id = req.params.id;
         const query ={ _id: new ObjectId(id)}
         const result =await itemsCollection.findOne(query);
         res.send(result)
})


app.post('/items', async (req, res) => {
  try {
    const newItem = req.body;
    const result = await itemsCollection.insertOne(newItem);
    res.status(201).send({ success: true, insertedId: result.insertedId });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: 'Failed to add item' });
  }
});



    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // await client.close(); 
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('WhereIsIt is Cooking');
});

app.listen(port, () => {
  console.log(`WhereIsIt server is running on port ${port}`);
});



