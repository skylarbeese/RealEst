//import React, {useState, useEffect} from 'react'
//import axios from 'axios'
import './newLiat.css';
import {Link} from 'react-router-dom'
import { useState } from 'react';

function NewList({title, search, data}) {
  const [active, setActive] = useState(0)
  const length = search.length

  //console.log(length)
  const nextSlide = () => {
    setActive(active === 0 ? length - 1 : active - 1)
 }
 const prevSlide = () => {
   setActive(active ===  length - 1 ? 0 :  active + 1)
 }
 if(!Array.isArray(search) || search.length <= 0) {
   return null;
 }


  return (
      <>
      <div className="loc"><h1 className="sear">({search.length}) listings found for properties in location: </h1><h1 className="locat">{data}</h1></div>
       <div className="new-list">
         
         <div className="new-div">
        
            <div className="arrows">
              <div className="prev" onClick={prevSlide}>prev</div>
              <div className="next"onClick={nextSlide}>next</div>
            </div>
            
  <div>{search.map((ti, index) => {
          return (  <>
        <div>
         {index === active && <div className="listing-box">
           
              <Link to={{pathname: `/comp/more/${ti._id}`}}><div className="prop-link">View</div></Link>
              <div className='prop-price'>
                <div className="propert"><h1>{ti.property}</h1></div>
                <div className="price"><h1 className="dol-sign">$</h1><h1>{ti.price}</h1></div>
              </div>
              <div className="prop-image"></div>
              
            <div className="re">
              <div className="home-det">

                 <div className="bath"><h1 className="num">{ti.bathrooms}</h1><h1 className="bath-title">bath </h1></div>
                 <div className="bed"><h1 className="num">{ti.bedrooms}</h1><h1 className="bed-title">bed </h1></div>
                 <div className="sqf"><h1 className="num">{ti.sqf}</h1><h1 className="sqf-title">square feet </h1></div>
               
              </div>
                 <div className="address-zip">
                     <div className="stateS"><h1 className="state-name">{ti.state}</h1></div>
                     <div className="cityC"><h1 className="city-name">{ti.city}</h1></div>
                     <div className=""></div>
                   </div>
                </div>
            </div>} 
            </div> </>)
          })}</div>
          </div>
       </div>
       </>
    );
  }
  
  export default NewList;