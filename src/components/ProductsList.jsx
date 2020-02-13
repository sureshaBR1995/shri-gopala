import React from 'react'
import './productsgrid.css';
import {Product} from './Product'
export const ProductsList=(props)=>(
    <div className='prod-grid'>
    {props.products.map(product=>(<Product key={product.key} name={product.name} price={product.price}/>))}
     
    </div>
    )
export default ProductsList;

/*(<div key={product.id}>
    <h1>{product.name}</h1>
    <h2>{product.price}</h2>
   
 </div>))}*/