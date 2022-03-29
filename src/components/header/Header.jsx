import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CartState } from '../../context/Context'
import './header.css'
export default function Header() {

    const {state:{cart},productDispatch,dispatch}=CartState()
    const[showcart,setShowcart]=useState(false);
  return (
    <div>
        <div className='header-navbar'>
            <div className='navbar' >
                <Link to={'/'}>
                <img className='nav-img'src="https://images.indianexpress.com/2021/01/myntra.png" alt=""  />
                </Link>
            </div>
            <div className='navbar'>MEN</div>
            <div className='navbar'>WOMEN</div>
            <div className='navbar'>KIDS</div>
            <div className='navbar'>HOME & LIVING</div>
            <div className='navbar'>BEAUTY</div>
            <div className='navbar'>STUDIO</div>
            <div className='navbar'>
                <input type="search" placeholder='Search' onChange={(e)=>productDispatch({type:"SEARCH_THE_PRODUCT",payload:e.target.value.toLowerCase()})} />
                {showcart &&
                <div className='dropdown'>
                    {cart.length>0 ? cart.map((item)=>{
                       return <div className="dropdownItems">
                       <img className='dropdown-product-Image' src={item.url[0]} alt=''/>
                       <div className="details">
                       
                           <span className='DeleteItem' onClick={()=>{
                           dispatch({
                           type:"REMOVE_FROM_CART",
                           payload:item
                           })
                           }}>
                           <i class="fa-solid fa-trash"></i></span>
                       
                        <p className='dropdown-longTitle'>{item.title.longTitle}</p>
                       <div className='dropdown-price'>
                           <p className='dropdown-price-item cost'>Rs. {item.price.cost}</p>
                           <p className='dropdown-price-item mrp'>Rs. {item.price.mrp}</p>
                           <p className='dropdown-price-item discount'>( {item.price.discount} OFF )</p>
                       </div>
                       </div>
                
               </div>
                    }) :<h3 className='empty-dropdown'>There is nothing in your bag </h3>}

                </div>
               }
            </div>
            
            <div className='navbar'>
                <i class="fa-solid fa-user"></i>
            </div>
            <div className='navbar'>
            <Link to={'/wishlist'}>
            <i class="fa-solid fa-heart"></i>
                </Link>
            </div>
            <div className='navbar'  onMouseEnter={()=>setShowcart(!showcart)}>
                <Link to={'/cart'}>
                <i class="fa-solid fa-bag-shopping"></i>
                </Link>
                {cart.length?(<span className="numberofItems">{cart.length}</span>):(<span></span>)}
               
            </div>
        </div>
    </div>
  )
}
