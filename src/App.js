import './App.css';
import Nav from './component/nav';
import {Route} from "react-router-dom"
import Form from "./component/form"
import Form1 from "./component/form1"
import Footer from "./component/footer"
import Auth from "./component/auth"

function App() {
  return (
    <>
   <Nav></Nav>
   <Route path="/" exact>
     <Auth></Auth>
   </Route>
   <Route path="/signup" exact>
     <Form></Form>
   </Route>
   <Route path="/login" exact>
     <Form1></Form1>
     </Route>
     <Route path="/auth" exact>
       <Auth></Auth>
     </Route>
     

   
   <Footer></Footer>
   
   </>
   
  );
}

export default App;
