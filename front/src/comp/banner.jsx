import Nav from './nav'
import { useState, useEffect } from 'react';
import './Banner.css';
import NewList from './newList'
import Arr from './../Arr'
import axios from 'axios'

function Banner({title}) {
  const [data, setData] = useState('')
  const [search, setSearch] = useState([])
  
  useEffect(() => {  
    
 
    axios.get('/read').then((res) => {setSearch(res.data)})

  }, []) 

  function searchIn(row) {
    return row.filter(ro => 
      ro.state.toLowerCase().indexOf(data) > -1 ||
      ro.city.toLowerCase().indexOf(data) > -1 ||
      ro.address.toLowerCase().indexOf(data) > -1
    
    )
  }
    return (

    <>
    <div className="banner-div">
      <div className="nav"><Nav /></div>
       <div className="banner">
        <div className="banner-img">
         <div className="image-banner" style= {{backgroundImage: `url(${Arr})`}}></div>
         </div>
           <div className="search">
             <div className="text"><h1> Find your Dream home </h1></div>
              <form action="" className="form-sea">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input name="find" type="text" placeholder="" value={data} className="" 
                 onChange={(e) => setData(e.target.value)}  />
              
              </form>
              
           </div>
       </div>
       <NewList title={title} search={searchIn(search)}/>
       </div>
       </>
     
    );
  }
  
  export default Banner;