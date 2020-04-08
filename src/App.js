import React,{ Component } from "react";
import  Navbar  from './components/Navbar';
import  ProductList  from './components/ProductList';
import  Cart  from './components/Cart';
import  ProductDetail  from './components/ProductDetail';
import {BrowserRouter,Route} from 'react-router-dom';


class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <Route exact path="/product" component={ProductList} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/productDetail" component={ProductDetail} />
                </div>
            </BrowserRouter>
        );
    }
}
export default App;