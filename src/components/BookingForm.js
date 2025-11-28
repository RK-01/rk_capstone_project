import { useState } from "react";
//import  {useLocation} from "react-router-dom";

const BookingForm = ({availableTimes, dispatch, submitForm }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [numOfGuest, setNumOfGuest] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [occasion, setOccasion] = useState('');
	
	const location = null;// useLocation();

	const handleSubmit = () => {
		const booking = {
			firstName, lastName, email, mobile, numOfGuest, date, time, occasion
		}
		if (firstName === "") { alert("First name is required"); return; }
		const formData = new FormData();
		formData.append('firstName', firstName);
		formData.append('lastName', lastName);
		formData.append('email', email);
		formData.append('mobile', mobile);
		formData.append('numOfGuest', numOfGuest);
		formData.append('date', date);
		formData.append('time', time);
		formData.append('occasion', occasion);
		
		 const setLocalStorage = (id, data) => {
  			window.localStorage.setItem(id, JSON.stringify(data));
		};
		setLocalStorage('booking', booking)
		const res = submitForm(formData);
		if (res) {
			location('/confirmation');
		}
	}

	const changeDate = (e) => {
		setDate(e.target.value);
		dispatch({ date: e.target.value });

	}
    return (<>
            <form action="#" className="w-full" onSubmit={handleSubmit}>
				<div className="row form-group">
			        <div className="form-control">
					    <label className="form-label"  htmlFor="first_name">First Name</label>
						<input value={firstName} type="text" id="first_name" className="form-input" onChange={(e)=>setFirstName(e.target.value)}/>
					</div>
				</div>
				<div className="row form-group">
					<div className="form-control">
						<label className="form-label"  htmlFor="last_name">Last Name</label>
						<input value={lastName} type="text" id="last_name" className="form-input" onChange={(e)=>setLastName(e.target.value)}/>
					</div>
				</div>
				<div className="row form-group">
					<div className="form-control">
				    	<label className="form-label" htmlFor="email">Email</label>
					    <input type="email" id="email" className="form-input" onChange={(e)=>setEmail(e.target.value)}/>
					</div>
                </div>
                <div className="form-grid">
                    <div className="row form-group">
					    <div className="form-control">
						    <label className="form-label" htmlFor="phone">Mobile</label>
							<input type="text" id="phone" className="form-input" onChange={(e)=>setMobile(e.target.value)}/>
						</div>
                    </div>
                    <div className="row form-group">
						<div className="form-control">
							<label className="form-label" htmlFor="num_guests">Number of Guests</label>
							<select name="#" id="num_guests" className="form-input" onChange={(e)=>setNumOfGuest(e.target.value)}>
					            <option value="">Number of Persons</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5+</option>
							</select>
						</div>
                    </div>
                </div>
                <div className="form-grid">
                    <div className="row form-group">
						<div className="form-control">
							<label className="form-label" htmlFor="date">Date</label>
							<input data-testid="date-change-event" type="date" id="date" className="form-input" onChange={(e)=>changeDate(e)}/>
						</div>
                    </div>
                    <div className="row form-group">
						<div className="form-control">
					        <label className="form-label" htmlFor="res-time">Choose Time</label>
                            <select data-testid="select-times" id="res-time" onChange={(e)=> setTime(e.target.value)} className="form-input">
							<option data-testid="time-option" value="">Select Time</option>
							{availableTimes?.map((item, index) => {
								
								return <option data-testid="time-option" className="available-time-container" key={index} >{item} </option>
									
                                })}
                            </select>
						</div>
					</div>
                </div>
                <div className="row form-group">
					<div className="form-control">
							<label className="form-label" htmlFor="occasion">Occasion</label>
							<select name="#" id="occasion" className="form-input" onChange={(e)=>setOccasion(e.target.value)}>
					    <option value="">Select Occasion</option>        
						<option value="Birthday">Birthday</option>
								<option value="Annivarsary">Annivarsary</option>
							</select>
						</div>
                    </div>
					<div className="row form-group">
					<div className="form-control mt-10">
				    	<button className="reservation-confirm-btn" data-testid="confirm-booking">Confirm Reservation</button>
					</div>
				</div>
            </form>
        </>);
}
 
export default BookingForm;