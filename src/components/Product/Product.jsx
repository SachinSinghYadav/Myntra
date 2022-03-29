import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartState } from '../../context/Context';
import './Product.css'

function Product(productDetails) {
  const {state:{wishList},dispatch,productDispatch}= CartState()
    let singleProduct=productDetails.productDetails;
    const[hover,setHover]=useState(false);
    const[index,setIndex]=useState(0);
    const[similar,setSimilar]=useState(false);
    let delay=3000;
    useEffect(() => {
      setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === singleProduct.url.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
  
      return () => {};
    }, [index,hover,delay,singleProduct.url.length]);
  return (
    <div>
      
        <div className='singleProduct' onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}> 
            {hover ?
            <div>
              <div className="img-wrap">
              <Link to={`/${singleProduct.id}`}>
              <img className='product-Image' src={singleProduct.url[index]} alt="" />
              </Link>
                <div onMouseEnter={()=>setSimilar(true)} onMouseLeave={()=>setSimilar(false)} onClick={()=>productDispatch({type:'FIND_SIMILAR',payload:singleProduct})}>
                  {similar?<p className='similarIcon'>VIEW SIMILAR <i className=" fa-solid fa-arrow-up-from-bracket"></i></p>:
                <i className="similarIcon fa-solid fa-arrow-up-from-bracket"></i>
                  }
                </div>
              </div>
              
              {wishList.some((prod)=>prod.id===singleProduct.id)?(<button className='wishlistedButton' ><i class="fa-solid fa-heart"></i> WISHLISTED</button>):
            (<button className='wishlistButton' onClick={()=>{
              dispatch({
                type:"ADD_TO_WISHLIST",
                payload:singleProduct
              })
            }}><i class="fa-solid fa-heart"></i> WISHLIST</button>)}
            <Link to={`/${singleProduct.id}`} style={{ textDecoration: 'none' }}>
              <div className='sizes'><h4 className='sizeName'>Sizes</h4> <ul className='sizeList'>{singleProduct.sizes.map((size)=><li>{size}</li>)}</ul> </div>
              </Link>
            </div>
            :
            <div>
            <img className='product-Image' src={singleProduct.url[0]} alt=''/>
            <h4 className='shortTitle'>{singleProduct.title.shortTitle}</h4>
            <p className='longTitle'>{singleProduct.title.longTitle}</p></div>}
            <div className='price'>
                <p className='price-item cost'>Rs. {singleProduct.price.cost}</p>
                <p className='price-item mrp'>Rs. {singleProduct.price.mrp}</p>
                <p className='price-item discount'>( {singleProduct.price.discount} OFF )</p>
            </div>
        </div>
        
    </div>
  )
}

export default Product