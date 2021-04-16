import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Nav from './nav'
import './more.css';
import Arr from './../Arr'
import Footer from './footer'

import {Link} from 'react-router-dom'
function More(props) {
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [poBox, setPoBox] = useState('')
    const [sqf, setSqf] = useState('')
    const [anchers, setAnchers] = useState('')
    const [bathrooms, setBathrooms] = useState('')
    const [bedrooms, setBedrooms] = useState('')
    const [des, setDes] = useState('')
    const [price, setPrice] = useState('')
    const [rent, setRent] = useState('')
    const [street, setStreet] = useState('')
    const [property, setProperty] = useState('')
    const [extra, setExtra] = useState('')
    const [parking, setParking] = useState('')
    const [image, setImage] = useState('')
   
  
  
    useEffect(() => {
      
      axios.get(`/read/${props.match.params.id}`)
       .then(res => [setState(res.data.state), setCity(res.data.city),
        setAddress(res.data.address), setPoBox(res.data.poBox), 
        setSqf(res.data.sqf), setAnchers(res.data.anchers),
        setBathrooms(res.data.bathrooms), setBedrooms(res.data.bedrooms),
        setDes(res.data.des), setImage(res.data.image), setPrice(res.data.price),
        setStreet(res.data.street), setProperty(res.data.property), setExtra(res.data.extra),
        setParking(res.data.parking), setRent(res.data.rent)
    ])
       .catch(err => console.log(err)) 
     }, [])
     
     const Del = () => {
      axios.delete(`/del/${props.match.params.id}`)
       .then(res => console.log(res.data))
       
    }
    return (
     <>
     <div className="nav-d">
    <Nav />
    </div>

       <div className="more-div">

          <div className="images">
            <div className="image-bb" style= {{backgroundImage: `url(${Arr})`}}></div>
          </div>

          <div className="info-div">

          <div className="location-div">
            <div className="street">
              <h1 className="st">{street}</h1>
            <div className="state-zip">
              <h1>{city},</h1>
              <h1>{state},</h1>
              <h1>{poBox}</h1>
            </div>
            </div>
            <div className="house-info">
             <div className="bed-div"><h1>bed:{bedrooms}</h1></div>
             <div className="bath-div"><h1>bath:{bathrooms}</h1></div>
             <div className="sqf-div"><h1>sqf:{sqf}</h1></div>
            </div>
          </div>
           
        </div>
        <div className="price-des-div">
        <div className="porp-div">
          <div className="title-div">
             <h1>property info</h1>
             <div className="underline"></div>
          </div>
          
             <div className="desp">
               <p>{des}</p>
             </div>
           </div>

           <div className="price-div">

            <div className="price-rent">
            <div className="pr">
             <h1 className="dol-sign">$</h1><h1 className="pricee">{price}</h1>
             </div>

             <h1 className="rentt">{rent}</h1>
            </div>
            
             <div className="underline"></div>
             <div className="more-info">

              {extra.length > 0 ? 
              <div className="extra-fea">
                <h1 className="features">features:</h1>
                <h1 className="extraa">{extra}</h1>
              </div> 
              :  
              <div className="extra-fea">
               <h1 className="features">features:</h1>
               <h1 className="extraa">none</h1>
             </div>}
              <div className="">
                   {anchers.length > 0 ? 
              <div className="extra-fea">
                <h1 className="features">anchers:</h1>
                <h1 className="extraa">{anchers}</h1>
              </div> 
              :  
              <div className="extra-fea">
               <h1 className="features">anchers:</h1>
               <h1 className="extraa">none</h1>
             </div>}
             </div>
             </div>
           </div>
            
           </div>

            <div className="btn">
              <Link to="/"><button onClick={Del}>delete</button></Link>
            </div> 
        </div>
    
        <Footer />
     </>

    );
  }
  
  export default More;