const express = require('express')
const mongoose = require('mongoose')
const List = require('./models/list')
const multer  = require('multer')
const path = require('path')
const cors = require('cors')
const fs = require('fs')
var bodyParser = require('body-parser');
const fileupload = require("express-fileupload");

/*
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads');
},
filename: function(req, file, cb) {   
    cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
}
})

const upload = multer({
  storage: storage
}) 
*/

const app = express()
//app.use(express.static(path.join(__dirname, 'uploads')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.json())
app.use(fileupload());
app.use(cors())
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://skylar:12@cluster0.0kkpf.mongodb.net/list?retryWrites=true&w=majority", 
{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
)



const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
},
filename: function(req, file, cb) {   
  cb(null, 
  file.originalname);
}
})

const upload = multer({
  storage: storage
}) 







app.post('/inst', upload.single('imageLoad'),  async (req, res) => {
  try { 
    
    const state = req.body.state;
    const city = req.body.city;
    const address = req.body.address;
    const poBox = req.body.poBox;
    const sqf = req.body.sqf;
    const anchers = req.body.anchers;
    const bathrooms = req.body.bathrooms;
    const bedrooms = req.body.bedrooms;
    const des = req.body.des;
 
    const price = req.body.price;
    const rent = req.body.rent;
  
    const street = req.body.street;
    const property = req.body.property;
    const extra = req.body.extra;
    const parking = req.body.parking;

    const image = req.file

    const list = new List({
         state, city, address, poBox, sqf, anchers, bathrooms,
         bedrooms, des, price, street, property, extra, parking, rent, image
    })
    console.log(image)
    console.log(rent)
    const newList = list.save()
    if(newList) {
      res.json('your listing has been posted!')
    } else {
     res.json('error, your post have not been listed') 
    }
}
catch(err) {
 console.log(err)
}
})
app.get('/inst/read', async (req, res) => {
     List.find({}, (err, result) => {
       if(err) {
         res.send(err)
       }
       res.send(result)
     })
   })
   app.get('/inst/read/:id', async (req, res) => {
     const id = req.params.id
     List.findById(id, (err, result) => {
       if(err) {
         res.send(err)
       }
       res.send(result)
     })
   })
   app.delete('/inst/del/:id', async (req, res) => {
    const id = req.params.id
    List.findByIdAndDelete(id, (err, result) => {
      if(err) {
        res.send(err)
      }
      res.send(result)
    })
  })
app.listen(3001)