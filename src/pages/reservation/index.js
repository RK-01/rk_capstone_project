import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const ReserveTablePage = () => {
  return (<> <Header /> <main className="w-full">
    <section className="hero-container">
    <img src="/restaurant.jpg" alt="map" className="hero-reservation-image"/>

    </section>
  <section className="container">
				<h3 className="reservation-page-title">Reserve A Table</h3>
							<div className="reservation-container w-full">
									
											
											<form action="#" className="w-full">
												<div className="row form-group">
													<div className="form-control">
														<label className="form-label"  for="first_name">First Name</label>
														<input type="text" id="first_name" className="form-input" />
													</div>
				  </div>
				  <div className="row form-group">
													<div className="form-control">
														<label className="form-label"  for="last_name">Last Name</label>
														<input type="text" id="last_name" className="form-input" />
													</div>
												</div>
												<div className="row form-group">
													<div className="form-control">
														<label className="form-label" for="email">Email</label>
														<input type="email" id="email" className="form-input" />
													</div>
          </div>
          <div className="form-grid">
             <div className="row form-group">
													<div className="form-control">
														<label className="form-label" for="phone">Mobile</label>
														<input type="text" id="phone" className="form-input" />
													</div>
          </div>
          <div className="row form-group">
													<div className="form-control">
														<label className="form-label" for="activities">Number of Guests</label>
														<select name="#" id="activities" className="form-input">
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
														<label className="form-label" for="date-start">Date</label>
														<input type="date" id="date" className="form-input" />
													</div>
            </div>
            <div className="row form-group">
													<div className="form-control">
														<label className="form-label" for="date-start">Time</label>
														<input type="time" id="time" className="form-input" />
													</div>
												</div>
          </div>
													<div className="row form-group">
													<div className="form-control">
														<label className="form-label" for="email">Message</label>
														<textarea rows={5} type="email" id="email" className="form-input" />
													</div>
          </div>
												
												
												

												<div className="row form-group">
													<div className="form-control mt-10">
														<Link to="/confirmation" className="reservation-confirm-btn">Confirm Reservation</Link>
													</div>
												</div>
											</form>	
										

										
									
					
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
	  <div><img className="w-full map" src="/chicago.png" alt="map"/></div>
  </main><Footer /></>);
}
 
export default ReserveTablePage;