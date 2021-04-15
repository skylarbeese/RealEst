import './email.css';
import axios from 'axios'
import React, {useState} from 'react'
function Email() {
    const [email, setEmail] = useState('')
    const add = (e) => {
        e.preventDefault()
      
        axios.post('/email',  {
          email: email
        }) 
      }
    return (
     <div className="email-div">
        <div className="form-div">
        
             <input name="email" type="text" placeholder="email" className="for" onChange={(e) => setEmail(e.target.value)} required/>
             <input type="submit" value="submit" className="sub-btn" onClick={add}/>
       
        </div> 
     </div>
    );
  }

  export default Email;