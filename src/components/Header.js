import { useEffect, useState } from "react";
import Logo from "./Logo";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(prev => prev = !showMenu)
    }
    useEffect(() => {
        const menuFunc = (e) => {
          if (e?.target?.classList.contains("nav-menu-btn") || e?.target?.classList.contains("nav-mobile")) {
                toggleMenu();
            } else if(!e?.target?.classList.contains("nav-items-mobile")){
                setShowMenu(prev => prev = false);
            }
        }
        window.addEventListener('click', menuFunc) 
        return () => {
            window.removeEventListener('click', menuFunc)
        }
    },[])
    return (<header className="container">
        
            <Logo />
            <nav>
                <ul className="nav-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Reservation</a></li>
                    <li><a href="/">Online Order</a></li>
                    <li><a href="/">Login</a></li>
            </ul>
            
        </nav>
        <div className="nav-mobile">
            <button className="nav-menu-btn" id="nav_menu_btn" type="button" onClick={(e)=>toggleMenu(e)}><img className="nav-menu-btn" src="/icon_hamburger_menu.svg" alt="menu" /></button>
            {showMenu && <ul className="nav-items-mobile">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Reservation</a></li>
                    <li><a href="/">Online Order</a></li>
                    <li><a href="/">Login</a></li>
                </ul>}
            </div>
        
       
    </header> );
}
 
export default Header;