import React from 'react'
import Product from '../Product/Product'
import './products.css'
import { CartState } from '../../context/Context'
function Products() {
  const {state:{products},productState:{sort,category,brand,price,search}}=CartState();
  const filterProducts=()=>{
    let sortedProducts=products;
    if(sort){
      if(sort==='hightolow' || sort==='lowtohigh')
          sortedProducts=sortedProducts.sort((a,b)=>sort==='lowtohigh'?a.price.cost-b.price.cost:b.price.cost-a.price.cost);
      else{
        sortedProducts=sortedProducts.sort((a,b)=>(parseInt(a.price.discount.substring(0,2)))-(parseInt(b.price.discount.substring(0,2))));
      }     
    }
    
    if(category){
      sortedProducts=sortedProducts.filter((product)=>product.category===category)
    }
    if(brand.length){
     sortedProducts=sortedProducts.filter((product)=>{
        let count=0;
        brand.forEach((b)=>{
            if(product.title.shortTitle===b.brandName)
              count++;
        })
        return count
      })
    }
    if(price.length){
      let min=Math.min(...price.map(item => item.low));
      let max=Math.max(...price.map(item => item.high))
      sortedProducts=sortedProducts.filter((product)=>product.price.cost>=min && product.price.cost<=max)
    }
    if(search)
    {
      sortedProducts=sortedProducts.filter((product)=>{
        return product.title.shortTitle.toLowerCase().includes(search) || product.title.longTitle.toLowerCase().includes(search) || product.description.toLowerCase().includes(search);
      })
    }
    
    return sortedProducts;
  }
  return (
    <div className='products'>
        {filterProducts().map((product)=><Product key={product.id} productDetails={product}/>)}
    </div>
  )
}

export default Products