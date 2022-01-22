import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import {Switch, Route} from 'react-router-dom';

const App = () =>{
return(
  <>
  <Switch>
    <Route exact path ="/" component={Home}/>
    <Route  path ="/login" component={Login}/>
    <Route  path ="/product" component={Product}/>
    <Route  path ="/productList" component={ProductList}/>
    <Route  path ="/cart" component={Cart}/>
    <Route  path ="/register" component={Register}/>
    
  </Switch>
  
  </>
)
// return(
//   <Home/>
// )
  
 
};

export default App;
