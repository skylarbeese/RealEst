import Nav from './nav'
import React, {useState, useEffect} from 'react'
import './Add.css';
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
    const [street, setStreet] = useState('')
    const [property, setProperty] = useState('')
    const [extra, setExtra] = useState('')
    const [parking, setParking] = useState('')
    
    const [message, setMessage] = useState('')
   const add = (e) => {
       e.preventDefault()
       axios.post('/',  {
         state: state, city: city, address: address, poBox: poBox,
         sqf: sqf, anchers: anchers, bathrooms: bathrooms, bedrooms: bedrooms,
         des: des, image: image, price: price, street: street, property: property,
         extra: extra, parking: parking
       })
       .then(res => setMessage(res.data))
   }
    return (
    <>
     <Nav />
       <div className="add-list">
           <div>{message}</div>
        <div className="form">
         <form action="" className="add-form">
             <label>State*</label>
             <input name="state" type="text" placeholder="state" className="form-control" onChange={(e) => setState(e.target.value)} required/>
             <label>city*</label>
             <input name="city" type="text" placeholder="city" className="form-control" onChange={(e) => setCity(e.target.value)} required/>
             <label>address*</label>
             <input name="address" type="text" placeholder="address" className="form-control" onChange={(e) => setAddress(e.target.value)} required/>
             <label>postal code</label>
             <input name="postal-code" type="text" placeholder="postal-code" className="form-control" onChange={(e) => setPoBox(e.target.value)}  />
             <label>Square foot</label>
             <input name="square-foot" type="text" placeholder="square-foot" className="form-control" onChange={(e) => setSqf(e.target.value)}  />
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
              
            </div>
         </div>
         </div>

             <label>parking*</label>
              <input name="parking" type="text" placeholder="parking" className="form-control" onChange={(e) => setParking(e.target.value)} />

             <label>price*</label>
              <input name="price" type="text" placeholder="price" className="form-control" onChange={(e) => setPrice(e.target.value)} required/>

             <label>more information about the property*</label>
             <textarea name="des" id="" cols="30" rows="10" className="form-control" onChange={(e) => setDes(e.target.value)}>description</textarea>
            <div className="file">
             <label>upload images of property</label>
             <input type="file" name="profile_image" onChange={(e) => setImage(e.target.value)}/>
            </div>
            <div className="submit">
             <input type="submit" value="post-listing" className="btn" onClick={add}/>
            </div>
         </form>
         </div>
       </div>
     </>
    );
  }
  
  export default AddList;