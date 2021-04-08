require('dotenv').config()
const express = require('express');
const app = express();

const Route = require('./routes')
const mongoose = require('mongoose')
const {mongoDburl,PORT}=require('./dbConnect')
//config mongosee to connect to MONGODB
mongoose.set('runValidators', true);
mongoose.connect(process.env.DB, {
  useNewUrlParser : true, 
  useUnifiedTopology : true,
  useFindAndModify : false,
  useUnifiedTopology: true
}).then(response => console.log("MongoDB Connected Successfully.") )
.catch(err => console.log("Database connection failed.") );

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/api', Route.review)

app.use(function(err,req,res,next){
    res.json({error:err.message})
})

/* TESTSERVER */
app.get('/', (req, res) => {
    res.send('SERVER EXPRESS')
  })

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('eqbmShopifyApp/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'eqbmShopifyApp', 'build', 'index.html'))
    })
} 




app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})