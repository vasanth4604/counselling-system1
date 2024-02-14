const express = require('express')
const cors = require('cors')
const {MongoClient} = require('mongodb')

const app = express()
app.use(cors())
app.use(express.json())

// mongoose
//     connect("mongodb://localhost:27017/Counselling", {
//         useNewUrlParser: true
//     })
// const client = new MongoClient('mongodb://localhost:27017/Counselling',)
const client = new MongoClient('mongodb+srv://admin:admin@cluster0.a1cqxpq.mongodb.net/?retryWrites=true&w=majority')
client.connect()
const db = client.db('counselling2')
const col = db.collection('register')
col.insertOne({'student':"345"})

app.post('/register', (req, res) =>{
    col.insertOne(req.body)
    console.log(req.body)
    res.send("data inserted successfully")
})

app.get('/retrive', async(req,res) => {
    const result = await col.find().toArray()
    console.log(result)
    res.send(result)

})

app.get('/', (req, res)=>{
    res.send('<h1><center>Hello Vasanth </center></h1>')
})

app.get('/about', (req,res)=>{
    res.send('<h2><center>Hi! This is About page</center></h2>')
})

app.get('/contact', (req,res)=>{
    res.send('<h3><center>This is Contact Page</center></h3>')
})

app.post('/home', (req,res)=>{
    res.send('<h3><center>This is Home Page</center></h3>')
})

app.listen(8080, ()=>{console.log('Express server is running ')})