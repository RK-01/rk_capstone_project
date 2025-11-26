import Logo from "./Logo";

const Footer = () => {
    return (<footer className="footer-wrapper">
        <div className="container footer-container">
        <div><Logo />               </div>
            <div>
                <p className="footer-title">Doormat Navigation</p>
                <ul>
                    <li><a className="footer-list-item" href="/">Home</a></li>
                    <li><a className="footer-list-item" href="/">About</a></li>
                    <li><a className="footer-list-item" href="/">Reservation</a></li>
                    <li><a className="footer-list-item" href="/">Order Online</a></li>
                    <li><a className="footer-list-item" href="/">Login</a></li>
                </ul>
        </div>
        <div><p className="footer-title">Contact Us</p>
                <ul>
                    <li className="footer-list-item">56/8, Bridge street, Chicago,
Illinois, USA - 1205</li>
                    <li className="footer-list-item">+1 309-6532-568-9746</li>
                    <li className="footer-list-item">contact@little-lemon.com</li>
                    </ul></div>
            <div><p className="footer-title">Social Media Links</p>
                <ul>
                    <li><a className="footer-list-item" href="/">Facebook</a></li>
                    <li><a className="footer-list-item" href="/">Instagram</a></li>
                    <li><a className="footer-list-item" href="/">Youtube</a></li>
                    </ul></div>
            </div>
        
            </footer>);
}
 
export default Footer;