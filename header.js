
import icon from './src/img/user_icon.png'

export default function Header(){
    return (
    <div className="header">
        <nav className="nav" >
            <div className="logo">
                <img className="h-8 w-auto logo_img" src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"></img>
            </div>
            <div className="search">
                <div className="input_wrapper">
                <input type="text" className="search_box" placeholder="Search..."/>
                <button className='search_btn' onClick={()=>{
                    alert('Clicked')
                }}>Search</button>
                </div>
            </div>
            <div className="icon">
                <img className='icon_img' src={icon}></img>
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg> */}

            </div>
        </nav>
    </div>
    )
}