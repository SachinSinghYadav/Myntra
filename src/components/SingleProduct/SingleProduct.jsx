import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './singleProduct.css'
import { CartState } from '../../context/Context';


function SingleProduct() {
  const {id}=useParams();
  const {state:{cart,products,wishList},dispatch}= CartState()
  const product=products.filter(prod=>prod.id===id)[0];
  
  return (
    <div className='Product'>
        <div className="Product-Image">
          {product.url.map((image)=><img className='singleProduct-Image' src={image} alt='' />)}
        
        </div>
        <div className="Product-details">
        
            <h2 className='singleProduct-shortTitle'>{product.title.shortTitle}</h2>
            <p className='singleProduct-longTitle'>{product.title.longTitle}</p>
            <hr/>
            <div className='singleProduct-price'>
                <p className='singleProduct-price-item singleProduct-cost'>Rs. {product.price.cost}</p>
                <p className='singleProduct-price-item singleProduct-mrp'>Rs. {product.price.mrp}</p>
                <p className='singleProduct-price-item singleProduct-discount'>( {product.price.discount} OFF )</p>
            </div>
            
            {cart.some((prod)=>prod.id===product.id)?(<Link to={'/cart'}><button className='addtocartButton'>GO TO BAG</button></Link>):
            <button className='addtocartButton' onClick={()=>{
              dispatch({
                type:"ADD_TO_CART",
                payload:product
              })
            }}>ADD TO CART</button>}
            {wishList.some((prod)=>prod.id===product.id)?(<button className='addtowishlistButton'>WISHLISTED</button>):
            (<button className='addtowishlistButton' onClick={()=>{
              dispatch({
                type:"ADD_TO_WISHLIST",
                payload:product
              })
            }}>WISHLIST</button>)}
            <hr/>
            <h3 className='descriptipn-heading'>PRODUCT DETAILS</h3>
            <p className='singleProduct-description'>{product.description}</p>
        </div>
    </div>
  )
}

export default SingleProduct