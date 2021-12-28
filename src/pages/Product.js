import React, { Component } from 'react'
import qs from 'query-string'

class Product extends Component {
    render() {
        // const parsed = qs.parse(this.props.location.search)
        const params = new URLSearchParams(this.props.location.search)
        // console.log(parsed);
        return (
            <div>
                <h1>halaman product detail</h1>
                <h5>product id = {this.props.match.params.id}</h5>
                <h6>query string = {this.props.location.search}</h6>
                <ul>
                    <li>sort = {params.get('sort')}</li>
                    <li>status = {params.get('status')}</li>
                </ul>
            </div>
        )
    }
}

export default Product
