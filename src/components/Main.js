import { useEffect, useReducer } from "react";
import HeroSection from "./Hero";
import CategorySection from "./CategorySection";
import TestimonialSection from "./TestimonialSection";
import About from "./About";
import BookingForm from "./BookingForm";
import CheckIcon from "./CheckIcon";


const updateTimes = (state, action) => {
  const date = new Date(action?.date)
  if (date) {
    const data = fetchAPI(date)
    return state = data;

  }
  }
const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

const submitForm = (formData) => {
    return true;
}

const initializeTimes = () => {
  const date = new Date();
  const data = fetchAPI(date)
  return data;
}
export const initializeTimesFunction = initializeTimes;
export const updateTimesFunction = updateTimes;

const Main = ({booking}) => {
  const [state, dispatch] = useReducer(updateTimes, initializeTimes());
  useEffect(() => {
    initializeTimes();
  },[])
  if (window.location.pathname === "/") {
    return (<main>
                <HeroSection />
                <CategorySection title="This Week&apos;s Specials!" />
                <TestimonialSection title="Testimonials" />
                <About />
            </main>)
  } else if (window.location.pathname === "/reservation") {
    return (<main><section className="hero-container">
    <img src="/restaurant.jpg" alt="map" className="hero-reservation-image"/>
 </section>
  <section className="container">
                <h3 className="reservation-page-title">Reserve A Table</h3>
          <div className="reservation-container w-full">
              {/* Booking Form Component */}
          <BookingForm availableTimes={state} dispatch={dispatch} submitForm={submitForm} />
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
  } else if (window.location.pathname === "/confirmation") {
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
            <p className="confirmation-detail"><span>Guests:</span> <span>{booking.guests}</span></p>
            <p className="confirmation-detail"><span>Day:</span> <span>{new Intl.DateTimeFormat('en-US', {
              dateStyle: "long"
            }).format(new Date(booking.date))}</span></p>
            <p className="confirmation-detail"><span>Time:</span> <span>{booking.time}</span></p>
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