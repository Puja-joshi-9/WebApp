import React from 'react'
import './mainStyle.css'
import Product from './HomeComp/product'
import Slider from './HomeComp/slider'
function Home() {
    return (
        <React.Fragment>
            <div className="main">
                <Slider/>
                <Product/>
            </div>
        </React.Fragment>
    )
}

export default Home
