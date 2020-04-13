/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import logo from "assets/images/AdobeStock_290228067_Preview (1).jpg";
class UserProfile extends Component {
	constructor(props) {
		super(props);
		window.scrollTo(0, 0);
	}
	setContactName = (event) => {
		this.setState({ name: event.target.value });
	}
	setContactEmail = (event) => {
		this.setState({ email: event.target.value });
	}
	setContactNumber = (event) => {
		this.setState({ number: event.target.value });
	}
	setContactMessage = (event) => {
		this.setState({ message: event.target.message });
	}
	submitContact = (props) => {
		if(this.state.name && this.state.message && this.state.email && this.state.number){
		let postBody = {
			name: this.state.name,
			email: this.state.email,
			number: this.state.number,
			message: this.state.message
		}
		return fetch("http://localhost:7001/contactDealer",
			{
				method: "POST",
				body: JSON.stringify(postBody),
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
			})
			.then((response) => response.json())
			.then((responseData) => {
				//console.log(props, this.props, '=============')
			this.setState({deladerForm: false})
			this.setState({successForm: true})
			setInterval(() => {
			props.onHide();
			  }, 2000);
			})
			.catch(error => console.warn(error));
		}
		else {
			this.setState({deladerForm: true})
		}
		//	event.handleCloseModal(); 
		//this.handleCloseModal();
	}
	render() {
		return (

			<div>
				<section className="banner banner4">
					<div className="container">
						<div className="text col-xs-12 col-sm-8 col-sm-offset-2 bannerTxt">Need more help?</div>
					</div>
				</section>
				<section className="contact-us float-left w-100">
					<div className="container">
						<div className="">
							<div className="col-xs-12 col-sm-12">
								<div className="heading-col-2 float-left w-100">
									<h2>Contact Us</h2>
								</div>
							</div>
							<div className="col-sm-8 col-md-6 col-xs-12">
								<p className="mb-10">Email<br /> Jessica@carcompareaustralia.com.au</p>
								<div className="mg-10">
									<img className="img-responsive" src={logo} alt="carsony-stark" style={{"height":"400px", "width":"420px", "marginBottom":"60px"}}/>
								</div>
							</div>
							<div className="col-sm-4 col-md-5 col-xs-12">
								<p>Complete our simples contact form and well<br /> be with you shortly</p>
								<div className="contact-form">
									<form method="post">
										<div className="row">
											<div className="col-md-12">
												<div className="form-group">
													<input type="text" name="tim Cook" onChange={this.setContactName} className="form-control" placeholder="Tim Cook *"  />
												</div>
												<div className="form-group">
													<input type="text" name="contact number" onChange={this.setContactNumber} className="form-control" placeholder="Contact number *"  />
												</div>
												<div className="form-group">
													<input type="text" name="email address" onChange={this.setContactEmail} className="form-control" placeholder="Email address *"  />
												</div>
												<div className="form-group">
													<textarea name="message" className="form-control" onChange={this.setContactMessage} placeholder="Your Message *" ></textarea>
												</div>
												<div className="form-group">
													<b><input type="button" onClick={() => this.submitContact()} name="btnSubmit" className="btnContact" value="SUBMIT FORM" /></b>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default UserProfile;
