import React from 'react'
import { CartState } from '../../context/Context'
import './filter.css'
function Filter() {
    const {productDispatch} =CartState();
    
  return (
    <div className='filter'>
       
      <form>
          <div className='categories' onChange={(e)=>productDispatch({type:"FILTER_BY_CATEGORY",payload:e.target.value})}>
          <label className='category'>
          <input type="radio" value="Men" name="gender" /> Men
          </label>
          <label className='category'>
          <input type="radio" value="Women" name="gender" /> Women
          </label>
          <label className='category'>
          <input type="radio" value="Boys" name="gender" /> Boys
          </label>
          <label className='category'>
          <input type="radio" value="Girls" name="gender" /> Girls
          </label>
          </div>
          <div className='brands' onChange={(e)=>productDispatch({type:"FILTER_BY_BRAND",payload:{brandName:e.target.name,checked:e.target.checked}})}>
              <h4>BRAND</h4>
              <label className='brand' htmlFor=""> <input name='Roadster' type="checkbox"/> Roadster</label>
              <label className='brand' htmlFor=""> <input name='HERE&NOW' type="checkbox"/> HERE&NOW</label>
              <label className='brand' htmlFor=""> <input name='HIGHLANDER' type="checkbox"/> HIGHLANDER</label>
              <label className='brand' htmlFor=""> <input name='Tommy Hilfiger' type="checkbox"/> Tommy Hilfiger</label>
              <label className='brand' htmlFor=""> <input name='Dennis Lingo' type="checkbox"/> Dennis Lingo</label>
              <label className='brand' htmlFor=""> <input name='Nautica' type="checkbox"/> Nautica</label>
              <label className='brand' htmlFor=""> <input name='Tokyo Talkies' type="checkbox"/> Tokyo Talkies</label>
          </div>
          <div className='prices' onChange={(e)=>productDispatch({type:"FILTER_BY_PRICE",payload:{...JSON.parse(e.target.name),checked:e.target.checked}})}>
              <h4>PRICE</h4>
              <label className='priceFilter' htmlFor=""> <input name='{"low":200,"high":500}'type="checkbox"/>Rs. 200 to Rs. 500</label>
              <label className='priceFilter' htmlFor=""> <input name='{"low":500,"high":1200}' type="checkbox"/>Rs. 500 to Rs. 1200</label>
              <label className='priceFilter' htmlFor=""> <input name='{"low":1200,"high":1800}' type="checkbox"/>Rs. 1200 to Rs. 1800</label>
          </div>
      </form>
    </div>
  )
}

export default Filter


