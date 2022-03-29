import React, { useEffect, useState } from 'react'
import './cart.css'
import { CartState } from '../../context/Context'
import { Link } from 'react-router-dom';

function Cart() {
    
    const {state:{cart},dispatch}=CartState()
    const[total,setTotal]=useState();
    const[cost,setCost]=useState();
    useEffect(()=>{
       setTotal(cart.reduce((total,current)=>total+current.price.mrp,0));
       setCost(cart.reduce((cost,current)=>cost+current.price.cost,0));
    },[cart])
   
  return (
    cart.length>0 ?
    (<div className='cart'>
        <div className="cartDetails">
        {cart.map((item)=>{
            return <div className="cartItems">
                    <img className='cart-product-Image' src={item.url[0]} alt=''/>
                    <div className="details">
                    <h4 className='cart-shortTitle'>{item.title.shortTitle}
                        <span className='DeleteItem' onClick={()=>{
                        dispatch({
                        type:"REMOVE_FROM_CART",
                        payload:item
                        })
                        }}>
                        <i class="fa-solid fa-trash"></i></span>
                    </h4>
                     <p className='cart-longTitle'>{item.title.longTitle}</p>
                    <div className='cart-price'>
                        <p className='cart-price-item cost'>Rs. {item.price.cost}</p>
                        <p className='cart-price-item mrp'>Rs. {item.price.mrp}</p>
                        <p className='cart-price-item discount'>( {item.price.discount} OFF )</p>
                    </div>
                    </div>
            </div>
        })}
        </div>
        <div className="cartPriceDetails">
            <h4 className='priceDetails'>PRICE DETAILS ({cart.length} Items)</h4>
            <p>Total MRP <span className='priceItem cartTotalMRP'>₹{total}</span></p>
            <p>Discount on MRP <span className='priceItem cartTotalDiscount'>-₹{total-cost}</span></p>
            <p>Coupon Discount <span className='priceItem cartCoupon'>Apply Coupon</span></p>
            <p>Convenience Fee 
                <span className='priceItem cartFee'>₹<span className='cartFees'>99</span> <span className='cartFree'>FREE</span></span></p>
            <hr/>
            <p>Total Amount <span className='priceItem cartTotalCost'>₹{cost}</span></p>
        </div>
    </div>):(<div className='emptyCart'>
        <h3>Hey, it feels so light</h3>
            <i className="fa-solid fa-cart-circle-arrow-up"></i>
            <p>There is nothing in your bag . Let's add some items</p>
             <Link to={'/wishlist'}><button>ADD ITEMS FROM WISHLIST</button></Link>
    </div>)
  )
}

export default Cart