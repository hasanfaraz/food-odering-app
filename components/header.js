
import icon from '../src/img/user_icon.png'

export default function Header(){
    return (
    <header className="header">
        <nav className="nav" >
            <div className="logo_box">
                <img className="h-8 w-auto logo_img" src="https://www.logodesign.net/logo-new/hotdog-on-top-of-a-food-truck-8847ld.png?size=large"></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart-3</li>
                </ul>
            </div>
            {/* <div className="search">
                <div className="input_wrapper">
                <input type="text" className="search_box" placeholder="Search..."/>
                <button className='search_btn' onClick={()=>{
                    alert('Clicked')
                }}>Search</button>
                </div>
            </div> */}
            <div className="icon">
                <img className='icon_img' src={icon}></img>
            </div>
        </nav>
    </header>
    )
}