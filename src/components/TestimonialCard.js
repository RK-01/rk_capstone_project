const TestimonialCard = ({name, url, message}) => {
    return (<article className="testimonial-card-container">
        <div className="testimonial-card-header">
            <div className="testimonial-card-img-container"><img className="testimonial-card-img" src={url} alt="sam"/></div>
            <div className="testimonial-name-container"><span>{name}</span>
                <img className="testimonial-card-rating" src="/rating.webp" alt="sam"/>
            </div>
        </div>
        <div className="testimonial-card-message">{message}</div>
    </article> );
}
 
export default TestimonialCard;