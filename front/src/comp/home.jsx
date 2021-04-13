//import Nav from './nav'
import React, { useState } from 'react'
import Banner from './banner'
import NewList from './newList'
import Footer from './footer'
import axios from 'axios'
function Home({titleArray}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [search, setSearch] = useState([])
  const [searchResult, setSearchResult] = useState([])
  React.useEffect(() => {  
    
 
    axios.get('/read').then((res) => {setSearch(res.data)})

  }, []) 
  //console.log(search)
  const searchHandler = (searchTerm) => {
   setSearchTerm(searchTerm)
   if(searchTerm !== "") {
     const list = search.filter((search) => {
     return  Object.values(search).join(" ").toLowerCase().includes(searchTerm.toLowerCase()) 

   
     
     })
     setSearchResult(list)
   } else {
    setSearchResult(search)
   }
  }
    return (
     <>
       
       <Banner titleArray={titleArray} searchHandler={searchHandler} searchTerm={searchTerm} 
       search={searchTerm.length < 1 ? search : searchResult} />
    {/*   <NewList title={titleArray}/> */}
      
     </>
    );
  }
  
  export default Home;