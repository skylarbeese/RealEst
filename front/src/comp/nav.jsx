import {Link} from 'react-router-dom'
import './Nav.css';
function Nav() {
    return (
     <>
    
       <div className="nav-div">
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
       </div>
     </>
    );
  }
  
  export default Nav;