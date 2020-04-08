import React, { Component } from 'react'
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default class Cart extends Component {

    products;

    constructor(props){
        super(props);
            this.state = {
                products:[]
            }
    }
    onClick(e){
        this.state.products();
    }
    componentDidMount(){
        this.products = JSON.parse(localStorage.getItem('productArray'));
        if(localStorage.getItem('productArray')){
            this.setState({
                products:this.products
            })
        }else{
            this.setState({
                products:[]
            })
        }
    }
    buyProduct(){
        alert("Product successfully purchased");
    }
   
    removeToCart(productId){
        
        let pid = productId._id;
        let productArray = localStorage.getItem('productArray');
        if(!productArray) {
            return;
        }
        productArray = JSON.parse(productArray);
        let productCount = localStorage.getItem('productCount');
        if(!productCount) {
            return;
        }
        productCount = JSON.parse(productCount);
        let pindex = productCount[pid];
        productArray[pindex].order_qty--;

        if(productArray[pindex].order_qty===0) {
            productArray.splice(pindex, 1);

            productCount = {};
            for(var i=0; i < productArray.length; i++) {
                productCount[productArray[i]._id] = i;
            }
        }

        localStorage.setItem('productArray',  JSON.stringify(productArray));
        localStorage.setItem('productCount',  JSON.stringify(productCount));
        alert("Removed Sucessfully");
        this.products = JSON.parse(localStorage.getItem('productArray'));
        this.setState({
            products:this.products
        })
    }
    render() {
        const { products } = this.state;
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                        <h2>Product List</h2>
                            <Table>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                            {products.map((product,index) =>(
                                !product.title && 
                                <tr key={index}>
                                    <th scope="row"><Link to="/productDetail/" params={{ data: product }}>{product._id}</Link></th>
                                    <th>{product.shopId}</th>
                                    <td>{product.price}</td>
                                    <td>{product.order_qty}</td>
                                    <td><Button color="primary" onClick={()=>this.removeToCart(product)}>-</Button></td>
                                </tr>
                            ))}
                            </tbody>
                            </Table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm -2">
                            <Button color="primary" onClick={()=>this.buyProduct()}>Buy’ button</Button>
                        </div>
                        <div className="col-sm -2">
                            {/* <Button color="primary" onClick={()=>  history.goBack()}>Cancel</Button> */}
                            <Link to="/product" className="btn btn-primary">Cacnel</Link>
                        </div>
                    </div>
                        
                    </div>
                </div>
        )
    }
}
