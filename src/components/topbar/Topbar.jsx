import React from 'react'
import { CartState } from '../../context/Context'
import './topbar.css'

function Topbar() {
    const {productDispatch}=CartState();

  return (
    <div className='topbar'>
        <h4 className='filterHeading'>FILTERS</h4>
        <div className='sort'>
        <select name="sortFilter" className='select' onChange={(e)=>productDispatch({type:"SORT_THE_PRODUCT",payload:e.target.value})}>
            <option value="none" selected disabled hidden>Recommended</option>
            <option value="discount">Better Discount</option>
            <option value="hightolow">Price : High to Low</option>
            <option value="lowtohigh">Price : Low to High</option>
        </select>
        </div>
    </div>
  )
}

export default Topbar