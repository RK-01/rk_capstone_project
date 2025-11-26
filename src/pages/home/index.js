import About from "../../components/About";
import CategorySection from "../../components/CategorySection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "../../components/Hero";
import TestimonialSection from "../../components/TestimonialSection";

const HomePage = () => {
    return (<>
        <Header />
        <HeroSection />
        <CategorySection title="This Week&apos;s Specials!" />
        <TestimonialSection title="Testimonials" />
        <About />
        <Footer />
    </>);
}
 
export default HomePage;