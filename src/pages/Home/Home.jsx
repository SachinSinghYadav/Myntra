import React from 'react'
import { Link } from 'react-router-dom';
import Filter from '../../components/filters/Filter';
import Products from '../../components/Products/Products'
import Topbar from '../../components/topbar/Topbar';
import { CartState } from '../../context/Context';
import './Home.css'

function Home() {
  const{state:{products},productState:{similar},productDispatch}=CartState()
  let similarProduct=products.filter((product)=>product.category===similar.category && product.id!==similar.id)
  console.log(similarProduct);

  return (
    <div className='homepage'>
      <div className='newhome'>
      <Topbar/>
      <div className='home'>
        <Filter/>
        <Products/>
      </div>
      </div>
    
      {similarProduct.length>0 && 
      <div className='similarproducts'>
            {similarProduct.map((product)=>
           
              <div classname='similarproduct'>
                 <Link to={`/${product.id}`}>
                <img className='product-Image' src={product.url[0]} alt=''/></Link>
                <h4 className='shortTitle'>{product.title.shortTitle}</h4>
                <p className='longTitle' style={{width:'200px',whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{product.title.longTitle}</p>
                <div className='price'>
                <p className='price-item cost'>Rs. {product.price.cost}</p>
                <p className='price-item mrp'>Rs. {product.price.mrp}</p>
                <p className='price-item discount'>( {product.price.discount} OFF )</p>
            </div>
              </div>
              
            )}
            <i className="deleteIcon fas fa-times" onClick={()=>productDispatch({type:'REMOVE_SIMILAR',payload:{}})}></i>
      </div>
      }
    </div>
  )
}

export default Home