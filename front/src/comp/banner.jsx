
import { useState, useEffect } from 'react';
import './Banner.css';
import NewList from './newList'
import axios from 'axios'

function Banner({title}) {
  const [data, setData] = useState('')
  const [search, setSearch] = useState([])

  useEffect(() => {  
    
  /* const searchs = (ev) => {
      if(ev.key === 'Enter') { */
    axios.get('/read').then((res) => {setSearch(res.data)})
    /*  }
    } */
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
       <div className="banner">
         <div className="banner-img">
           
         </div>
           <div className="search">
              <form action="" className="form-sea">
                <input name="find" type="text" placeholder="" value={data} className="" 
                 onChange={(e) => setData(e.target.value)}  />
                 {/*<input type="submit" value="submit" onClick={(e) => searchs(data)} /> */}
              </form>
           </div>
       </div>
       <NewList title={title} search={searchIn(search)}/>
       </>
     
    );
  }
  
  export default Banner;