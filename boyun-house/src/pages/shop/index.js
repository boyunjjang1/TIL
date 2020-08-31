import React from 'react'
import Product from "../../components/product";

const Shop =() => {
    return (
        <>
            <div>
                <h1 style={{fontSize: 20}}>오늘의딜</h1>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
            <div>
                <h1 style={{fontSize: 20}}>카테고리</h1>
                <Product/>
            </div>
            <div>
                <h1 style={{fontSize: 20}}>인기상품</h1>
                <Product/>
            </div>
        </>
    )
}

export default Shop;