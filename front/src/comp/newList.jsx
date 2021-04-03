import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function NewList({title}) {
 

    return (

    
       <div className="new-list">
          <div>listings</div>
         <div>{title.map(ti => {
          return ( <>
              <Link to={{pathname: `/comp/more/${ti._id}`}}><div>{ti.state}</div></Link>
              <div>{ti.state}</div>
                
            </>)
          })}</div>
       </div>
       
    );
  }
  
  export default NewList;