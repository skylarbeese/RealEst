//import Nav from './nav'
import Banner from './banner'
import NewList from './newList'
import Footer from './footer'
function Home({titleArray}) {
    return (
     <>
       
       <Banner title={titleArray}/>
    {/*   <NewList title={titleArray}/> */}
       <Footer />
     </>
    );
  }
  
  export default Home;