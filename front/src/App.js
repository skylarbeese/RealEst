
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import Home from './comp/home'
import AddList from './comp/addList'
import More from './comp/more'
function App() {
  const [titleArray, setTitleArray] = React.useState([])
  React.useEffect(() => {
   axios.get('/read').then((res) => { setTitleArray(res.data)})
  
 }, [])
  return (
   <>
     <Router>
       <Switch>
     
        <Route path="/comp/more/:id"  render={(props) => <More {...props}  titleArray={titleArray}/>} />
        <Route path="/comp/addList" component={AddList} />
        <Route path="/" ><Home titleArray={titleArray}/></Route>
       </Switch>
     </Router>
   </>
  );
}

export default App;
