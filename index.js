const express = require('express');
const app = express();
const cors = require('cors');
const {MongoClient} = require('mongodb');
const ObjectId = require('mongodb').ObjectId
require('dotenv').config()

// Port
const PORT = process.env.PORT || 5000

//Middlewares
app.use(cors())
app.use(express.json())

// MongoDB Integration
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mern-practice.upqpe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true})

async function run() {
    try {
        await client.connect();
        // console.log("Connected to Database")
        const database = client.db("carMechanic");
        const servicesCollection = database.collection("services");

        // API METHODS
        app.get('/services', async (req, res) => {
            const cursor = servicesCollection.find({})
            const services = await cursor.toArray();
            res.json(services)
        })

        app.get('/services/:serviceId', async (req, res) => {
            const serviceId = req.params.serviceId;
            // console.log("ID", serviceId)
            const query = {_id: ObjectId(serviceId)};
            const result = await servicesCollection.findOne(query)
            res.json(result)
        })

        // POST
        app.post('/services', async (req, res) => {
            // console.log("Hit The Post Api",req.body)
            const service = req.body
            const result = await servicesCollection.insertOne(service)
            res.json(result)
        })

        // DELETE
        app.delete('/services/:id',async (req, res) => {
            const deleteService = req.params.id
            const query = {_id: ObjectId(deleteService)}
            const result = await servicesCollection.deleteOne(query);
            console.log("result",result)
            res.json(result)
        })

    } finally {
        // await client.close();
    }
}

run().catch(console.dir);


// Server Listen
app.listen(PORT, () => {
    console.log("Server listening on port", PORT)
})