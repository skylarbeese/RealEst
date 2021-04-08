//import React, {useState, useEffect} from 'react'
//import axios from 'axios'
import './newLiat.css';
import {Link} from 'react-router-dom'

function NewList({title, search}) {
 

    return (

    
       <div className="new-list">
          <div>listings</div>
      
         <div>{search.map(ti => {
          return ( <>
           <div className="listing-box">
              <Link to={{pathname: `/comp/more/${ti._id}`}}><div className="prop-link">View</div></Link>

              <div className="prop-image"></div>

              <div className='prop-price'>
                <div className="propert"><h1>{ti.property}</h1></div>
                <div className="price"><h1>{ti.price}</h1></div>
              </div>
              <div className="home-det">
                 <div className="bath"><h1 className="num">{ti.bathrooms}</h1><h1 className="bath-title">bath </h1></div>
                 <div className="bed"><h1 className="num">{ti.bedrooms}</h1><h1 className="bed-title">bed </h1></div>
                 <div className="sqf"><h1 className="num">{ti.sqf}</h1><h1 className="sqf-title">square feet </h1></div>
              </div>
            
            </div> 
            </>)
          })}</div>
       </div>
       
    );
  }
  
  export default NewList;