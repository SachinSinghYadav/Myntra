import React from 'react'
import { Link } from 'react-router-dom';
import { CartState } from '../../context/Context'
import './wishList.css'

function WishList() {
    const {state:{wishList},dispatch}=CartState();

  return (
    wishList.length>0 ?
    (<div className='wishList'>
        <p><h4 style={{display:'inline'}}>My Wishlist</h4> {wishList.length} items</p>
        {wishList.map((product)=>{
           return (<div className='wishList-singleProduct'> 
           <div className="img-wrap">
           <img className='wishList-product-Image' src={product.url[0]} alt=''/>
           <i className="deleteIcon fas fa-times" onClick={()=>dispatch({
                        type:"REMOVE_FROM_WISHLIST",
                        payload:product
                        })}></i>
           </div>
            
            <p className='wishList-longTitle'>{product.title.longTitle}</p>
            <div className='wishList-price'>
                <p className='wishList-price-item wishList-cost'>Rs. {product.price.cost}</p>
                <p className='wishList-price-item wishList-mrp'>Rs. {product.price.mrp}</p>
                <p className='wishList-price-item wishList-discount'>( {product.price.discount} OFF )</p>
            </div>
            <button className='movetobag'onClick={()=>{
                        dispatch({
                            type:"ADD_TO_CART",
                            payload:product
                          })
                        dispatch({
                        type:"REMOVE_FROM_WISHLIST",
                        payload:product
                        })
                        }}>MOVE TO BAG</button>
        </div>)
        })}
        
    </div>) :(
        <div className='emptyWishList'>
            <h3>YOUR WISHLIST IS EMPTY</h3>
            <i className="fa-solid fa-cart-circle-arrow-up"></i>
            <p>Add items that you like to your wishlist. Review them anytime and easily move them to the bag.</p>
             <Link to={'/'}><button>CONTINUE SHOPPING</button></Link>
        </div>
        
    )
  )
}

export default WishList