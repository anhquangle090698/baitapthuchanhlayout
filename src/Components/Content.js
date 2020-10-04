import React, { Component } from 'react'
import Carousel from './Carousel'
import ProductList from './ProductList'

export default class Content extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-lg-10">
                        <Carousel></Carousel>
                        <ProductList></ProductList>
                    </div>
                </div>
                
            </>
        )
    }
}
