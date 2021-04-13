//import React, {useState, useEffect} from 'react'
//import axios from 'axios'
import Footer from './footer'
import Arr from './../Arr'
import './newLiat.css';
import {Link} from 'react-router-dom'
import { useState } from 'react';

import Slider from 'react-slick'
function NewList({titleArray, search, data, searchTerm}) {
  const [active, setActive] = useState(0)
  const[mouse, setMouse] = useState(false)
  
  const length = search.length
console.log(search)
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
 console.log(mouse)
 /*var settings = {
 
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: true
}; */

  return (
      <>
      {/*<div className="loc"><h1 className="sear">({search.length}) listings found for properties in location: </h1><h1 className="locat">{searchTerm}</h1></div> */}
       <div className="new-list">
         
         <div className="new-div" onMouseOver={() => setMouse(true)} onMouseOut={() => setMouse(false)}>
        
            <div className="arrows">
              <div className={`prev ${mouse ? 'prev-appear' : 'prev-hide'}`} onClick={prevSlide}>
                <i class="fa fa-angle-left" aria-hidden="true"></i>
              </div>
              <div className={`next ${mouse ? 'next-appear' : 'next-hide'}`}  onClick={nextSlide}>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </div>
            </div> 


 {/*  <Slider {...settings}>  */}      
{search.map((ti, index) => {
          return (  <>
        <div>
         {index === active && <div className="listing-box" >
           
              <Link to={{pathname: `/comp/more/${ti._id}`}}><div className="prop-link">View</div></Link>
              <div className='prop-price'>
                <div className="propert"><h1>{ti.property}</h1></div>
                <div className="price"><h1 className="dol-sign">$</h1><h1>{ti.price}</h1></div>
              </div>
              <div className="prop-image">
              
                <div className="image-box" style= {{backgroundImage: `url(${Arr})`}}></div>
              </div>
              
            <div className="re">
             
                 <div className="address-zip">
                 <div className="streett"><h1 className="street-name">{ti.street}</h1><h1 className="camma">,</h1></div>
                     <div className="stateS"><h1 className="state-name">{ti.state}</h1><h1 className="camma">,</h1></div>
                     <div className="cityC"><h1 className="city-name">{ti.city}</h1></div>
                     <div className=""></div>
                   </div>
                   <div className={`home-det ${mouse ? '' : ''}`}>
                       <div className={`bath ${mouse ? 'appear-bath' : 'hide-bath'}`}><h1 className="num">{ti.bathrooms}</h1><h1 className="bath-title">bath </h1></div>
                      <div className={`bed ${mouse ? 'appear-bed' : 'hide-bed'}`}><h1 className="num">{ti.bedrooms}</h1><h1 className="bed-title">bed </h1></div>
                      <div className={`sqf ${mouse ? 'appear-sqf' : 'hide-sqf'}`}><h1 className="num">{ti.sqf}</h1><h1 className="sqf-title">square feet </h1></div>
                   </div>
                </div>
            </div>  }  
            </div> </>)
          })}
         {/*  </Slider> */}
          </div>
         
       </div>
      <Footer />
       </>
    );
  }
  
  export default NewList;