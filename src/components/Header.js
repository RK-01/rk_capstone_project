import Logo from "./Logo";

const Header = () => {
    return (<header>
        <div>
            <Logo />
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Reservation</a></li>
                    <li><a href="/">Online Order</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </nav>
        </div>
    </header> );
}
 
export default Header;