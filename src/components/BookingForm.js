import { useFormik } from "formik";
import { useEffect } from "react";
import * as yup from "yup";

const setLocalStorage = (id, data) => {
  			window.localStorage.setItem(id, JSON.stringify(data));
		};

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {

	const schema = yup.object().shape({
		firstName: yup.string().required("First name is required"),
		lastName: yup.string().required("Last name is required"),
		guests: yup.number().min(2, "One can walk-in any time. Reserve a table for 2 or more").required("Number of guest is required"),
        email: yup.string()
            .email("Invalid email address format")
            .required("Email is required"),
        mobile: yup.string()
            .min(10, "Mobile number must be 10 digits").max(10, "Mobile number should not be more than 10 digits")
			.required("Mobile number is required"),
		date: yup.string().required("Date is required"),
		time: yup.string().required("Time is required"),
		occasion: yup.string().required("Occasion is required"),
    });

	const formik = useFormik({
		validationSchema: schema,
		initialValues: {
			firstName: '',
			lastName: '',
			email: "",
			mobile: "",
			guests: "",
			date: "",
			time: "",
			occasion: ""
		},
		onSubmit: async (values, { setSubmitting, resetForm }) => {
			setLocalStorage('booking', values);
			const res = submitForm(values);
			if (res) {
			resetForm();
			setSubmitting(false);
			window.location.href = '/confirmation';
			}
    },
	});
	useEffect(() => {
		if (formik.values.date) {
			dispatch({ "date": formik.values.date });
		}
	},[formik.values.date ,dispatch])
    return (
            <form className="w-full" onSubmit={formik.handleSubmit}>
				<div className="row form-group">
			        <div className="form-control">
					    <label className="form-label"  htmlFor="firstNameInput">First Name</label>
					<input name="firstName" type="text" id="firstNameInput" className="form-input" {...formik.getFieldProps("firstName")} required/>
					 {formik.touched.firstName && formik.errors.firstName && (
          			<div style={{ color: "red" }}>{formik.errors.firstName}</div>)}
					</div>
				</div>
				<div className="row form-group">
					<div className="form-control">
						<label className="form-label"  htmlFor="lastNameInput">Last Name</label>
						<input name="lastName" type="text" id="lastNameInput" className="form-input" {...formik.getFieldProps("lastName")} required/>
						 {formik.touched.lastName && formik.errors.lastName && (
          			<div style={{ color: "red" }}>{formik.errors.lastName}</div>)}
				</div>
				</div>
				<div className="row form-group">
					<div className="form-control">
				    	<label className="form-label" htmlFor="emailInput">Email</label>
					<input name="email" type="email" id="emailInput" className="form-input" {...formik.getFieldProps("email")} required/>
					{formik.touched.email && formik.errors.email && (
          			<div data-testid="emailerror" style={{ color: "red" }}>{formik.errors.email}</div>)}
					</div>
                </div>
                <div className="form-grid">
                    <div className="row form-group">
					    <div className="form-control">
						    <label className="form-label" htmlFor="mobileInput">Mobile</label>
						<input name="mobile" type="text" id="mobileInput" className="form-input" {...formik.getFieldProps("mobile")} required/>
						{formik.touched.mobile && formik.errors.mobile && (
          			<div style={{ color: "red" }}>{formik.errors.mobile}</div>)}
						</div>
                    </div>
                    <div className="row form-group">
						<div className="form-control">
							<label className="form-label" htmlFor="numberOfGuests">Number of Guests</label>
							<select name="guests" id="numberOfGuests" className="form-input" {...formik.getFieldProps("guests")} required>
					            <option value="">Number of Guests</option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5+</option>
						</select>
						{formik.touched.guests && formik.errors.guests && (
          			<div style={{ color: "red" }}>{formik.errors.guests}</div>)}
						</div>
                    </div>
                </div>
                <div className="form-grid">
                    <div className="row form-group">
						<div className="form-control">
							<label className="form-label" htmlFor="dateInput">Date</label>
						<input name="date" data-testid="date-change-event" type="date" id="dateInput" className="form-input" {...formik.getFieldProps("date")} required/>
							{formik.touched.date && formik.errors.date && (
          			<div style={{ color: "red" }}>{formik.errors.date}</div>)}
					</div>
                    </div>
                    <div className="row form-group">
						<div className="form-control">
					        <label className="form-label" htmlFor="timeInput">Choose Time</label>
                            <select name="time" data-testid="select-times" id="timeInput" {...formik.getFieldProps("time")} className="form-input" required>
							<option data-testid="time-option" value="">Select Time</option>
							{availableTimes?.map((item, index) => {
								return <option data-testid="time-option" className="available-time-container" key={index} >{item} </option>
                                })}
						</select>
						{formik.touched.time && formik.errors.time && (
          			<div style={{ color: "red" }}>{formik.errors.time}</div>)}
						</div>
					</div>
                </div>
                <div className="row form-group">
					<div className="form-control">
							<label className="form-label" htmlFor="occasion">Occasion</label>
							<select name="occasion" id="occasion" className="form-input" {...formik.getFieldProps("occasion")} required>
						<option value="">Select Occasion</option>
						<option value="Birthday">Birthday</option>
						<option value="Annivarsary">Annivarsary</option>
						<option value="Other">Other</option>
					</select>
					{formik.touched.occasion && formik.errors.occasion && (
          			<div style={{ color: "red" }}>{formik.errors.occasion}</div>)}
						</div>
                    </div>
					<div className="row form-group">
					<div className="form-control mt-10">
					<button aria-label="On Click" type="submit" className="reservation-confirm-btn" data-testid="confirm-booking" disabled={formik.isSubmitting}>Confirm Reservation</button>
				</div>
				</div>
            </form>
        );
}
export default BookingForm;