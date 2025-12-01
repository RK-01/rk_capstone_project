import Logo from "./Logo";

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="container footer-container">
                <section>
                    <Logo />
                </section>
                <section>
                    <p className="footer-title">Doormat Navigation</p>
                    <ul>
                        <li><a className="footer-list-item" href="/">Home</a></li>
                        <li><a className="footer-list-item" href="/">About</a></li>
                        <li><a className="footer-list-item" href="/reservation">Reservation</a></li>
                        <li><a className="footer-list-item" href="/">Order Online</a></li>
                        <li><a className="footer-list-item" href="/">Login</a></li>
                    </ul>
                </section>
                <section>
                    <h3 className="footer-title">Contact Us</h3>
                    <article>
                        <p className="">56/8, Bridge street, Chicago,Illinois, USA - 1205</p>
                        <p className="">+1 309-6532-568-9746</p>
                        <p className="">contact@little-lemon.com</p>
                    </article>
                </section>
                <section>
                    <p className="footer-title">Social Media Links</p>
                    <ul>
                        <li><a className="footer-list-item" href="/">Facebook</a></li>
                        <li><a className="footer-list-item" href="/">Instagram</a></li>
                        <li><a className="footer-list-item" href="/">Youtube</a></li>
                    </ul>
                </section>
            </div>
        </footer>);
}
export default Footer;