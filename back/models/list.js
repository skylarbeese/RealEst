const mongoose = require('mongoose')

const ListSchema = new mongoose.Schema({
  state: {
      type: String,
      required: true
  },
  city: {
    type: String,
    required: true
},
address: {
    type: String,
    required: true
},
poBox: {
    type: String,
    required: false
},
sqf: {
    type: Number,
    required: false
},
anchers: {
    type: String,
    required: false
},
bathrooms: {
    type: String,
    required: true
},
bedrooms: {
    type: Number,
    required: true
},
des: {
    type: String,
    required: true
},
price: {
    type: String,
    required: false
},
rent: {
    type: String,
    required: false
},
image: {
    type: String,
    required: false
},
street: {
    type: String,
    required: true
},
property: {
    type: String,
    required: true
},
extra: {
    type: String,
    required: false
},
parking: {
    type: String,
    required: true
},
createDate: {
    type: Date,
    default: Date.now
}
})

const List = mongoose.model('List', ListSchema)
module.exports = List