import React, {useEffect, useState} from 'react'
import axios from 'axios'
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
        setParking(res.data.parking),
    ])
       .catch(err => console.log(err)) 
     }, [])
     
     const Del = () => {
      axios.delete(`/del/${props.match.params.id}`)
       .then(res => console.log(res.data))
       
    }
    return (
     <>
       <div className="more-div">
          
           <div className="location">

               <div className="st-ci">
                <h2 className="state">{state}</h2>
                <h2 className="city">{city}</h2>
               </div>
              
                <div className="address">
                  <h2>address: {address}</h2>
                </div>

                <div className="poBox">
                 <h2>{poBox}</h2>
                </div>

                 <div className="des">
                   <p>{des}</p>
                </div>
              
            </div>


            <div className="porperty-info">
               <h2 className="sqf">property squarefootage: {sqf}</h2>
               <h2>porperty anchers: {anchers}</h2>
               <div className="home">
                  <h2 className="bath">bathrooms: {bathrooms}</h2>
                  <h2 className="bed">bedrooms: {bedrooms}</h2>
                  <h1>{property}</h1>
               </div>
            </div>
            <div className="btn">
              <button onClick={Del}>delete</button>
            </div>
        </div>
     </>
    );
  }
  
  export default More;