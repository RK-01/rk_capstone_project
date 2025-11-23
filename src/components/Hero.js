const HeroSection = () => {
    return (<section className="hero">
        <div className="hero-section container">
            <div className="hero-text-container">
            <div className="hero-title-container">
                <span className="hero-title">Little Lemon</span>
                <span className="hero-subtitle">Chicago</span>
            </div>
            <p className="hero-body-text">lorum</p>
            <button className="hero-action-btn">Reserve A Table</button>
            </div>
            <div className="hero-image-container">
                <img className="hero-image" src="/restaurantfood.jpg" alt="Little Lemon" width={300}/>
            </div>
            </div>
        </section> );
}
export default HeroSection;