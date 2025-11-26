import TestimonialCard from "./TestimonialCard";

const items = [
  {
        name: "Sam",
        url: "/potrait-4.webp",
        message: "Great food",
    },{
        name: "Julie",
        url: "/potrait-3.webp",
        message: "Nice ambience and delicious food",
    },{
        name: "Emily",
        url: "/potrait-2.webp",
        message: "Super taste",
    },
     {
        name: "Chris",
        url: "/potrait-1.webp",
        message: "Nice food and good service",
    }
    
]
const TestimonialSection = ({title}) => {
    return (
        <section className=""> <h1 className="testimonial-title">{title}</h1>
        <div className="testimonial-container">
       
           

        
            {items?.map((item) => {
                return (<TestimonialCard key={item.id} url={item.url} name={item.name} message={item.message} />)
            })}
        
    </div> </section>);
}
export default TestimonialSection;