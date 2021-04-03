const express = require('express')
const mongoose = require('mongoose')
const List = require('./models/list')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://skylar:12@cluster0.0kkpf.mongodb.net/list?retryWrites=true&w=majority", 
{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
)


app.use(cors())

app.post('/inst', async (req, res) => {
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
    const image = req.body.image;
    const price = req.body.price;
    const rent = req.body.rent;
  
    const street = req.body.street;
    const property = req.body.property;
    const extra = req.body.extra;
    const parking = req.body.parking;

    const list = new List({
         state, city, address, poBox, sqf, anchers, bathrooms,
         bedrooms, des, image, price, street, property, extra, parking, rent
    })
    
    const newList = list.save()
    if(newList) {
      res.json('your listing has been posted!')
    } else {
     res.json('error, your post have not been listed') 
    }
}
catch(err) {

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