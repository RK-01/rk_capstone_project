import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CycleIcon from "../../components/CycleIcon";
import CheckIcon from "../../components/CheckIcon";

const ConfirmationPage = () => {
  return (<> <Header /> <main className="w-full">
    <section className="hero-container">
    <img src="/restaurant.jpg" alt="map" className="hero-reservation-image"/>

    </section>
    <section>
      <div className="container check-icon-container">
        <CheckIcon className="check-icon"/>
      </div>
      <div className="container confirmation-container">
        <h1 className="confirmation-title">Congratulations!</h1>
        <h3 className="confirmation-subtitle">Your table booking at Little Lemon is confirmed!</h3>
        <div className="confirmation-body-text">
        <p className="confirmation-detail"><span>Guests:</span> <span>4</span></p>
        <p className="confirmation-detail"><span>Day:</span> <span>Sunday, November 30th, 2025</span></p>
          <p className="confirmation-detail"><span>Time:</span> <span>7:00 PM</span></p>
          </div>
        <p className="confirmation-subtitle">We look forward to serve you.</p>
      </div>
    </section>
  
    
  </main><Footer /></>);
}
 
export default ConfirmationPage;