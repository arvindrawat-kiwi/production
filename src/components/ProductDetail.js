import React, { Component } from 'react'


export default class ProductDetail extends Component {

    componentDidMount(){
        console.log(this.props.match.params);
    }
    render() {
        //console.log(this.state.data);
        return (
            <div>
                Product Detail
            </div>
        )
    }
}
