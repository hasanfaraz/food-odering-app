
import icon from '../src/img/user_icon.png'

export default function Header(){
    return (
    <header className="header">
        <nav className="nav nav-container" >
            <div className="logo_box">
                <img className="h-8 w-auto logo_img" src="https://www.logodesign.net/logo-new/hotdog-on-top-of-a-food-truck-8847ld.png?size=large"></img>
            </div>
            <div className="loc_div">
                <span className="other_div">
                    <span className="other_txt">Other</span>
                </span>
                <span className="_3HusE">Lucknow, Uttar Pradesh, India</span>
                <span className="icon-downArrow kVKTT"></span>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sign-In</li>
                    <li>Cart</li>
                </ul>
            </div>
        </nav>
    </header>
    )
}