import Nav from './nav'
import React, {useState, useEffect} from 'react'
import './Add.css';
import Footer from './footer'
import axios from 'axios'
function AddList() {
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [poBox, setPoBox] = useState('')
    const [sqf, setSqf] = useState('')
    const [anchers, setAnchers] = useState('')
    const [bathrooms, setBathrooms] = useState('')
    const [bedrooms, setBedrooms] = useState(0)
    const [des, setDes] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [rent, setRent] = useState('')
    const [street, setStreet] = useState('')
    const [property, setProperty] = useState('')
    const [extra, setExtra] = useState('')
    const [parking, setParking] = useState('')
    
    const [message, setMessage] = useState('')
   const add = (e) => {
       e.preventDefault()
      let form = new FormData()


    /*   form.append('state', state)
       form.append('city', city)
       form.append('address', address)
       form.append('poBox', poBox)
       form.append('sqf', sqf)
       form.append('anchers', anchers)
       form.append('bathrooms', bathrooms)
       form.append('bedrooms', bedrooms)
       form.append('des', des)
       form.append('price', price)
       form.append('street', street)
       form.append('property', property)
       form.append('extra', extra)
       form.append('parking', parking) 
       form.append('rent', rent) */
       form.append('imageLoad', image) 
       console.log(form)
       
       axios.post('/',  {
         state: state, city: city, address: address, poBox: poBox,
         sqf: sqf, anchers: anchers, bathrooms: bathrooms, bedrooms: bedrooms,
         des: des,  price: price, street: street, property: property,
         extra: extra, parking: parking,  rent: rent,  form
       })
       .then(res => setMessage(res.data))
   
/*   const config = {
    headers: {
      "content-type": "multipart/form-data"
      
    },
  } */
   /*axios({
    method: 'post',
    url: '/',
    data:  {  state,  city,  address,  poBox,
     sqf,  anchers,  bathrooms,  bedrooms,
     des,   price,  street,  property,
     extra,  parking,   rent, form},
    headers: config
    })
    .then(function (response) {
        //handle success
        
        console.log(response);
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    }); */
  }
    return (
    <>
    <div className="nav-d">
    <Nav />
    </div>
     
       <div className="add-list">
         <div className="header-text">
            <h1>Create a new property listing</h1>
            <div className="underline"></div>
         </div>
           <div className="mess">{message}</div>
        <div className="form">
         <form action="" className="add-form" >
             <label>State*</label>
             <input name="state" type="text" placeholder="state" className="form-control" onChange={(e) => setState(e.target.value)} required/>
             <label>city*</label>
             <input name="city" type="text" placeholder="city" className="form-control" onChange={(e) => setCity(e.target.value)} required/>
             <label>address*</label>
             <input name="address" type="text" placeholder="address" className="form-control" onChange={(e) => setAddress(e.target.value)} required/>
             <label>postal code</label>
             <input name="postal-code" type="text" placeholder="postal-code" className="form-control" onChange={(e) => setPoBox(e.target.value)}  />
             <label>Square foot</label>
             <input name="square-foot" type="number" placeholder="square-foot" className="form-control" onChange={(e) => setSqf(e.target.value)}  />
             <label>anchers/yard</label>
             <input name="anchers" type="text" placeholder="property anchers" className="form-control" onChange={(e) => setAnchers(e.target.value)} />
             <label>bathrooms*</label>
             <input name="bathrooms" type="text" placeholder="bedrooms" className="form-control" onChange={(e) => setBathrooms(e.target.value)} required/>
             <label>bedrooms*</label>
             <input name="bedrooms" type="number" placeholder="bedrooms" className="form-control" onChange={(e) => setBedrooms(e.target.value)} required/>


             <label>street name*</label>
             <input name="street" type="text" placeholder="street" className="form-control" onChange={(e) => setStreet(e.target.value)} required/>
        <div className="con-form">
          <div className="btn-form"
          >     
            <div className="radio-prop">
             <label>type of property*</label>
              <input type="radio" name="property" value="house" onChange={(e) => setProperty(e.target.value)} />house
              <input type="radio" name="property" value="apert" onChange={(e) => setProperty(e.target.value)} />apert
            </div> 

            <div className="radio-extra">
             <label>Extra features</label>
              <input type="radio" name="extra" value="fireplace" onChange={(e) => setExtra(e.target.value)} />fireplace
              <input type="radio" name="extra" value="pool" onChange={(e) => setExtra(e.target.value)} />pool
              <input type="radio" name="extra" value="basement" onChange={(e) => setExtra(e.target.value)} />basement
              <input type="radio" name="extra" value="attic" onChange={(e) => setExtra(e.target.value)} />attic
            </div>
         </div>
         </div>

             <label>parking*</label>
              <input name="parking" type="text" placeholder="parking" className="form-control" onChange={(e) => setParking(e.target.value)} />

            <div className="radio-price">
              <label>price*</label>
              <input name="price-rent" type="radio" value="rent" className="" onChange={(e) => setRent(e.target.value)} /> Rent
              <input name="price-sale" type="number" placeholder="price" className="form-control price-radio" onChange={(e) => setPrice(e.target.value)} />

              <input name="price-rent" type="radio" value="sale" className="" onChange={(e) => setRent(e.target.value)} /> Sale
              <input name="price-sale" type="number" placeholder="price" className="form-control price-radio" onChange={(e) => setPrice(e.target.value)} />
            </div>
            
             <label>more information about the property*</label>
             <textarea name="des" id="" cols="30" rows="10" className="form-control" onChange={(e) => setDes(e.target.value)}></textarea>
            <div className="file">
             <label>upload images of property</label>
             <input type="file" name='imageLoad' onChange={(e) => setImage(e.target.files[0])}/>
            </div>
            <div className="submit">
             <input type="submit" value="post-listing" className="btn" onClick={add}/>
            </div>
         </form>
         </div>
       </div>
       <Footer />
     </>
    );
  }
  
  export default AddList;