import Nav from './nav'
import Footer from './footer'
import React, { useState, useEffect } from 'react';
import './Banner.css';
import NewList from './newList'
import Arr from './../Arr'
import axios from 'axios'

function Banner(props) {
  const inputEl = React.useRef()
  const [data, setData] = useState("")
 // const [search, setSearch] = useState([])

 /* useEffect(() => {  
    
 
    axios.get('/read').then((res) => {props.setSearch(res.data)})

  }, []) 
/*
  function searchIn(row) {
    return row.filter(ro => 
      ro.state.toLowerCase().indexOf(data) > -1 ||
      ro.city.toLowerCase().indexOf(data) > -1 ||
      ro.address.toLowerCase().indexOf(data) > -1

      
    
    
    )
  } */
  const searchTerm = () => {
    props.searchHandler(inputEl.current.value)
  }
 
  //const t = search.length
  //console.log(t)
    return (

    <>
    <div className="banner-div">
      <div className="nav"><Nav /></div>
       <div className="banner">
        <div className="banner-img">
          <div className="grad"></div>
         <div className="image-banner" style= {{backgroundImage: `url(${Arr})`}}></div>
         </div>
           <div className="search">
             <div className="text"><h1> Find your Dream home </h1></div>
              <form action="" className="form-sea">
                <i class="fa fa-search" aria-hidden="true"></i>
                <input ref={inputEl} name="find" type="text" placeholder="address, state, city, zip code"  className="" 
               onChange={searchTerm}/>
              
                {/* onChange={(e) => setData(e.target.value)} value={data}    search={searchIn(props.search)}*/} 
              </form>
              
           </div>
       </div>
      {props.searchTerm.length > 1 ? <div className="loc"><div className="locc"><h1 className="sear">({props.search.length}) listings found for properties in location: </h1><h1 className="locat">{props.searchTerm}</h1></div></div>
      : <div className="loc"></div>}
       {props.search.length > 0 ? ( <NewList titleArray={props.titleArray}  searchTerm={props.searchTerm} search={props.search} data={data}/> )
       : <div><div className="no-sear"><h1>there are no results for this search, try another location</h1></div><Footer/></div>} 

       </div>
       </>
     
    );
  }
  
  export default Banner;