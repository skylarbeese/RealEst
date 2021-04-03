
import { useState, useEffect } from 'react';
import './Banner.css';
import NewList from './newList'
import axios from 'axios'

function Banner({title}) {
  const [data, setData] = useState('')
  const [search, setSearch] = useState([])
  useEffect(() => {
    axios.get('/read').then((res) => { setSearch(res.data)})
   
  }, [])

    return (

    <>
       <div className="banner">
         <div className="banner-img">
           
         </div>
           <div className="search">
              <form action="" className="form-sea">
                <input name="find" type="text" placeholder="" value={data} className="" 
                 
                onChange={(e) => setData(e.target.value)} />
                <input type="submit" value="submit"/>
              </form>
           </div>
       </div>
       <NewList title={title}/>
       </>
     
    );
  }
  
  export default Banner;