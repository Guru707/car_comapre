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
import { NavLink } from "react-router-dom";
//import { Grid } from "react-bootstrap";
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Select from 'react-select';
var options = [];

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deladerForm: false,
      successForm: false
    }
  }
  MyVerticallyCenteredModal = (props) => {
		options = []
		this.getCarList().then(response => {
			if (response) {
				for (let i = 0; i < response.length; i++) {
					options.push({ value: response[i].make, label: response[i].make })
				}
			}
		});
		return (
			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Enter your contact info
			</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<div className="form-group">
							<label htmlFor="exampleFormControlInput1">Name*</label>
							<input type="text" className="form-control" name="name" onChange={this.setContactName} id="exampleFormControlInput1" placeholder="Mat" />
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlInput2">Email address*</label>
							<input type="email" className="form-control" name="email" onChange={this.setContactEmail} id="exampleFormControlInput2" placeholder="name@example.com" />
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlInput3">Contact Number*</label>
							<input type="number" className="form-control" name="number" onChange={this.setContactNumber} id="exampleFormControlInput3" placeholder="0466111111" />
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlInput4">Postcode*</label>
							<input type="number" className="form-control" name="postCode" onChange={this.setContactPostcode} id="exampleFormControlInput4" placeholder="123123" />
						</div>
						<div className="form-group">
							<label htmlFor="exampleFormControlSelect5">Select car*</label>
							<Select name="car" onChange={this.setContactselectCar} options={options} />
						</div>
						<div className="form-group">
							<span className={this.state.deladerForm ? 'nonHidden' : 'hidden'}>All fields required</span>
							<span className={this.state.successForm ? 'succHidden' : 'hidden'}>Thankyou for you query.</span>
							<button className="btn btn-success" type="button" style={{"width": "30%"}} onClick={() => this.submitContact(props)} >Submit</button>
						</div>

					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		);
	}
	getCarList = () => {
		return fetch("http://localhost:7001/getCars?field=make",
			{
				method: "GET",
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
			})
			.then((response) => response.json())
			.then((responseData) => {
				return responseData.data
			})
			.catch(error => console.warn(error));
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
	setContactPostcode = (event) => {
		this.setState({ postCode: event.target.value });
	}
	setContactselectCar = (event) => {
		this.setState({ carId: event.value });
	}
	submitContact = (props) => {
		if(this.state.name && this.state.postCode && this.state.email && this.state.number && this.state.carId){
		let postBody = {
			name: this.state.name,
			email: this.state.email,
			number: this.state.number,
			postCode: this.state.postCode,
			carId: this.state.carId
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
	App = () => {
		const [modalShow, setModalShow] = React.useState(false);

		return (
			<>
      <a style={{"fontSize": "14px"}} onClick={() => setModalShow(true)}>Find Local Dealers</a>
				<this.MyVerticallyCenteredModal
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
			</>
		);
	}
	render() {
		return (
			<footer className="footer section-col footer-col-bar p-3 ">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-sm-3 col-xs-12">
							<div className="footer-logo">
								<p className="rights">&copy; 2020 Car Campare Australia</p>
							</div>
						</div>
						<div className="col-md-7 col-sm-6 col-xs-12 ">
							<ul className="footer-list text-center">
								<li>
									<NavLink
										to={"home"} >Compare Car</NavLink></li>
								<li>
									<this.App />
								</li>
								<li><NavLink
									to={"about"} >About</NavLink></li>
								<li><NavLink
									to={"contact"} >Contact Us</NavLink></li>
							</ul>
						</div>
						<div className="col-md-2 col-sm-3 col-xs-12 ">
							<div className="social-icon text-right">
								<ul className="social-icon ">
									<li><a className="i-facbook" href="/#"><i className="fa fa-facebook-f"></i></a></li>
									<li><a className="i-facbook" href="/#"><i className="fa fa-instagram"></i></a></li>
									<li><a className="i-facbook" href="/#"><i className="fa fa-linkedin"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>

			</footer>
		);
	}
}

export default Footer;
