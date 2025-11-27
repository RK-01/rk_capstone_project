import { useReducer } from "react";
import HeroSection from "./Hero";
import CategorySection from "./CategorySection";
import TestimonialSection from "./TestimonialSection";
import About from "./About";
//import { useLocation } from "react-router-dom";
import BookingForm from "./BookingForm";
import CheckIcon from "./CheckIcon";

const updateTimes = (state, action) => {
  let currentState = [...state];
  if (action.date === "" || action.time === "") {
    alert("Date or time missing"); return state = currentState;
  };

  
    const itemToUpdate = currentState.find(item => item.date === action.date && item.time === action.time);
  if (itemToUpdate) {
      itemToUpdate.isAvailable = false;
      return state = currentState;
    }

  if (!itemToUpdate) {
    const newState = currentState.map(item2 => {
      if (item2.time === action.time) {
        const newItem = { date: action.date, time: item2.time, isAvailable: false };
       // const newArray = [...currentState, newItem];
      return newItem;
      } else {
        const newItem = { date: action.date, time: item2.time, isAvailable: true };
       // const newArray = [...currentState, newItem];
      return newItem;
        }
      })
    return state = newState;
    }

  
  const filteredState = currentState.filter(item => item.date === action.date);
  console.log(filteredState)
  return state = filteredState;
}
const initializeTimes = [
      { date: '', time: '17:00', isAvailable: true },
      { date: '', time: '18:00', isAvailable: true },
      { date: '', time: '19:00', isAvailable: true },
      { date: '', time: '20:00', isAvailable: true },
      { date: '', time: '21:00', isAvailable: true },
      { date: '', time: '22:00', isAvailable: true },
    ];

const Main = () => {
    const [state, dispatch] = useReducer(updateTimes, initializeTimes);
   const location = useLocation();
  if (location?.pathname === "/") {
    return (<main>
                <HeroSection />
                <CategorySection title="This Week&apos;s Specials!" />
                <TestimonialSection title="Testimonials" />
                <About />
            </main>)
  } else if (location?.pathname === "/reservation") {
    return (<main><section className="hero-container">
    <img src="/restaurant.jpg" alt="map" className="hero-reservation-image"/>
 </section>
  <section className="container">
                <h3 className="reservation-page-title">Reserve A Table</h3>
          <div className="reservation-container w-full">
              {/* Booking Form Component */}
              <BookingForm availableTimes={state} dispatch={dispatch}/>
                        <div className="d-flex flex-column w-full">
                            <div className="">
                                <div className="single-footer-widget">
                                    <h4 className="reservation-page-subtitle">Opening Hours</h4>
                                    <ul className="hr-list">
                                        <li className="d-flex flex-between">
                                            <span>Monday - Friday</span> <span>08.00 am - 10.00 pm</span>
                                        </li>
                                        <li className="d-flex flex-between">
                                            <span>Weedend</span> <span>09.00 am - 11.00 pm</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="" >
                                <div className="single-footer-widget">
                                    <h4 className="reservation-page-subtitle d-flex flex-column">Find us at: </h4>
                                    <p>
                                        56/8, Bridge street, Chicago, Illinois, USA - 1205
                                    </p>
                                    <p className="number">
                                        309-6532-568-9746
                                    </p>
                                </div>
                            </div>
              </div>
              </div>
          </section>
          <div><img className="w-full map" src="/chicago.png" alt="map"/></div></main>)
  } else if (location?.pathname === "/confirmation") {
    return (<main>
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
        </main>);
  }
  return (<main>
        </main>);
}
export default Main;