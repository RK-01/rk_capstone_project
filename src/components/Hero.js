import { Link } from "react-router-dom";

const HeroSection = () => {
    return (<section className="hero">
        <div className="hero-section container">
            <div className="hero-text-container">
            <div className="hero-title-container">
                <span className="hero-title">Little Lemon</span>
                <span className="hero-subtitle">Chicago</span>
            </div>
            <p className="hero-body-text">Serving delightful recipes with a smile, everyday. Come and experience today!</p>
           <Link className="hero-action-btn" to="/reservation">Reserve A Table</Link>
            </div>
            <div className="hero-image-container">
                <img className="hero-image" src="/restaurantfood.jpg" alt="Little Lemon" width={300}/>
            </div>
            </div>
        </section> );
}
export default HeroSection;