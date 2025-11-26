const About = () => {
    return ( <section id="about">
        <div className="about-section container">
            <div className="about-text-container">
            <div className="about-title-container">
                <span className="about-title">Little Lemon</span>
                <span className="about-subtitle">Chicago</span>
            </div>
            <p className="about-body-text">Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
           </div>
            <div className="about-image-container">
                <img className="about-image-1" src="/restaurantfood.jpg" alt="Little Lemon" width={300} />
                <img className="about-image-2" src="/Mario_and_Adrian_b.jpg" alt="Little Lemon" width={300}/>
            </div>
            </div>
        </section> );
}
 
export default About;