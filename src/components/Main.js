import { useEffect, useReducer } from "react";
import HeroSection from "./Hero";
import CategorySection from "./CategorySection";
import TestimonialSection from "./TestimonialSection";
import About from "./About";
// import { useLocation } from "react-router-dom";
import BookingForm from "./BookingForm";
import CheckIcon from "./CheckIcon";


const updateTimes = (state, action) => {

  let currentState = [...state];
  if (action.date === "") {
    alert("Date is missing"); return state = currentState;
  };

  
  //   const itemToUpdate = currentState.find(item => item.date === action.date && item.time === action.time);
  // if (itemToUpdate) {
  //     itemToUpdate.isAvailable = false;
  //     return state = currentState;
  //   }

  // if (!itemToUpdate) {
  //   const newState = currentState.map(item2 => {
  //     if (item2.time === action.time) {
  //       const newItem = { date: action.date, time: item2.time, isAvailable: false };
  //      // const newArray = [...currentState, newItem];
  //     return newItem;
  //     } else {
  //       const newItem = { date: action.date, time: item2.time, isAvailable: true };
  //      // const newArray = [...currentState, newItem];
  //     return newItem;
  //       }
  //     })
    // return state = newState;
    // }
  const date = new Date(action.date)
   const data = fetchAPI(date)
  // const filteredState = currentState.filter(item => item.date === action.date);
  // console.log(filteredState)
  return state = data;
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

const submitAPI = function(formData) {
    return true;
};
const submitForm = (formData) => {
  const result = submitAPI(formData);
  return result;
}

const initializeTimes = () => {
  const date = new Date();
  const data = fetchAPI(date)
  return data;
} 

const Main = ({currentBooking}) => {
  const [state, dispatch] = useReducer(updateTimes, initializeTimes());
  const location = null // useLocation();
  useEffect(() => {
    initializeTimes();
  },[])
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
              <BookingForm availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>
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
            <p className="confirmation-detail"><span>Guests:</span> <span>{currentBooking.numOfGuest}</span></p>
            <p className="confirmation-detail"><span>Day:</span> <span>{new Intl.DateTimeFormat('en-US', {
              dateStyle: "long"
            }).format(new Date(currentBooking.date))}</span></p>
            <p className="confirmation-detail"><span>Time:</span> <span>{currentBooking.time}</span></p>
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