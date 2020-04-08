import React, { Component } from 'react'
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
//import  Tost  from './Tost';


export default class ProductList extends Component {

    constructor(props){
        super(props);
        let itemCounts = JSON.parse(localStorage.getItem('productArray')).length;
            this.state = {
                error : null,
                products:[],
                itemCounts:itemCounts 
            }
    }

    componentDidMount(){
        const apiUrl =  "https://raw.githubusercontent.com/reactioncommerce/reaction-sample-data/master/simplestore/Products.json";

        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        products:result
                    })
                },
                (error) => {
                    this.setState({ error })
                }
            )
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log(prevProps,prevState,snapshot);
    }
    addToCart(productId){
        
        let pid = productId._id;
        let productArray = localStorage.getItem('productArray');
        if(productArray) {
            productArray = JSON.parse(productArray);
        } else {
            productArray = [];
        }
        let productCount = localStorage.getItem('productCount');
        if(productCount) {
            productCount = JSON.parse(productCount);
        } else {
            productCount = {};
        }
        let pindex = -1;
       
        if(typeof(productCount[pid])==='number') {
            pindex = productCount[pid];
        }

        if(pindex!==-1) {
            productArray[pindex].order_qty++;
        } else {
            productArray.push(productId);
            pindex = productArray.length - 1;
            productArray[pindex].order_qty = 1;
            productCount[pid] = pindex;
        }
        localStorage.setItem('productArray',  JSON.stringify(productArray));
        localStorage.setItem('productCount',  JSON.stringify(productCount));

        let itemCounts = JSON.parse(localStorage.getItem('productArray')).length;
        this.setState ({
            itemCounts: itemCounts
        });
        
        alert("Added Sucessfully");
    }

    render() {
        const { error,products } = this.state;
        //console.log(this.state.products)
        if(error){
            return (
                    <div>Error: { error.message  }</div>
            )
        }
        return (
                
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                        <h3>Product List</h3>
                            <Table>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Add</th>
                                </tr>
                            </thead>
                            <tbody>
                            {products.map((product,index) =>(
                                !product.title && 
                                <tr key={index}>
                                    <th scope="row"><Link to="/productDetail/1" params={{ data: 534 }}>{product._id}</Link></th>
                                    <th>{product.shopId}</th>
                                    <td>{product.price}</td>
                                    <td><Button color="primary" onClick={()=>this.addToCart(product)}>+</Button></td>
                                </tr>
                            ))}
                            </tbody>
                            </Table>
                           
                        </div>
                        <div className="col-sm-4">
                                <span><h3>Count Of Products :</h3> {this.state.itemCounts }
                                </span>
                        </div>
                        <div className="col-sm-2">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
