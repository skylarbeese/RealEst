import {Link} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import './Nav.css';

function Nav() {
  const [win, setWin] = useState(false)
  const [btn, setBtn] = useState(false)
  console.log(win)
  console.log(btn)
  const hand = () => {
     if(window.innerWidth > 800) {
       setWin(true)
     } else {
       setWin(false)
     }
   }
  window.addEventListener("resize", hand);
  useEffect(() => {
     hand()
 }, []);  
 
 const handler = () => {
  setBtn(!btn)
}
    return (
     <>
    
    {win ? (<div className="nav-div">
           <nav>
               <ul className="home-dir">
               <Link to="/"><li>Home</li></Link>
                 <Link to="/comp/addList"><li>Add listings</li></Link> 
               </ul>
           { /*   <div className="sign-log">
                   <button>signin</button>
                   <button>signup</button>
    </div> */}
           </nav>
       </div>) : (<div className="nav-div-bur">
         <div className={`nav-drop ${btn ? 'nav-show' : 'nav-hide'}`}>
         
              <ul className="col">
               <Link to="/"><li>Home</li></Link>
                 <Link to="/comp/addList"><li>Add listings</li></Link> 
               </ul>
        
         </div>
         <div className="burger" onClick={handler}>
            <span className="line1"></span>
            <span className="line1"></span>
            <span className="line1"></span>
            
         </div>
       </div>)}
     </>
    );
  }
  
  export default Nav;