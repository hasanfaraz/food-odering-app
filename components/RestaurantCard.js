import React from 'react'

export default function RestaurantCard() {
  return (
    <div className='restaurant_container'>
        <div className='card'>
            <div className='card_img'>
              <img className='card_img_tag' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf" />
              <div class="offer_div offer_text">
                <div class="sc-aXZVg bston sc-imWYAI jQllR"></div>
                <div class="sc-aXZVg bBhNat sc-imWYAI jQllR"> 20% OFF UPTO ₹50 with all special discount</div>
                <div class="sc-aXZVg fqXrDf sc-imWYAI jQllR"></div></div>
            </div>
            <div className='card_name'>Burger King</div>
            <div className='card-rating'>5 star</div>
            <div className='card-cousine'>Burger, American, Hazratganj</div>
        </div>
    </div>
  )
}
