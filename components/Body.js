import React from 'react'
import RestaurantCard from './RestaurantCard'

export default function Body() {
  return (
    <>
        <body className=''>
            {/* <div className='search_container'>
              <div className="input_wrapper">
                  <input type="text" className="search_box" placeholder="Search Restaurant..."/>
                  <button className='search_btn' onClick={()=>{
                      alert('Clicked')
                  }}>Search</button>
              </div>
            </div> */}
            <div className='container'>
              <div className='restaurant-grid'>
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
                <RestaurantCard  />
              </div>
            </div>
        </body>
    </>
  )
}
