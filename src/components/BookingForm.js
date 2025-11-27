import { useState } from "react";

const BookingForm = ({availableTimes, dispatch}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [numOfGuest, setNumOfGuest] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [occasion, setOccasion] = useState('');
	const [message, setMessage] = useState('');
	
    return (<>
            <form action="#" className="w-full">
				<div className="row form-group">
			        <div className="form-control">
					    <label className="form-label"  htmlFor="first_name">First Name</label>
						<input type="text" id="first_name" className="form-input" onChange={(e)=>setFirstName(e.target.value)}/>
					</div>
				</div>
				<div className="row form-group">
					<div className="form-control">
						<label className="form-label"  htmlFor="last_name">Last Name</label>
						<input type="text" id="last_name" className="form-input" onChange={(e)=>setLastName(e.target.value)}/>
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
							<input type="date" id="date" className="form-input" onChange={(e)=>setDate(prev=> prev = e.target.value)}/>
						</div>
                    </div>
                    <div className="row form-group">
						<div className="form-control">
					        <label className="form-label" htmlFor="res-time">Choose Time</label>
                            <select name="availableTimings" id="res-time" onChange={(e)=> dispatch({date: date, time: e.target.value})} className="form-input">
							<option name="timing">Select Time</option>
							{availableTimes?.map((item, index) => {
								
								return <option name="jest" className="available-time-container" key={index} disabled={item.date === date && !item?.isAvailable}><span>{item?.time} </span>{ item.date === date && !item?.isAvailable && <span>Not Available</span>}</option>
									
                                })}
                            </select>
						</div>
					</div>
                </div>
                <div className="row form-group">
					<div className="form-control">
							<label className="form-label" htmlFor="occasion">Occasion</label>
							<select name="#" id="occasion" className="form-input" onChange={(e)=>setOccasion(e.target.value)}>
					            <option value="Birthday">Birthday</option>
								<option value="Annivarsary">Annivarsary</option>
							</select>
						</div>
                    </div>
				<div className="row form-group">
				    <div className="form-control">
					    <label className="form-label" htmlFor="message">Message</label>
						<textarea rows={5} id="message" className="form-input" onChange={(e)=>setMessage(e.target.value)}/>
					</div>
                </div>
				<div className="row form-group">
					<div className="form-control mt-10">
				    	<a href="/confirmation" className="reservation-confirm-btn">Confirm Reservation</a>
					</div>
				</div>
            </form>
        </>);
}
 
export default BookingForm;