/*!

=========================================================
* Car Compare Australia
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
// import {
//   Grid,
//   Row,
//   Col,
//   FormGroup,
//   ControlLabel,
//   FormControl
// } from "react-bootstrap";

// import { Card } from "components/Card/Card.jsx";
// import { FormInputs } from "components/FormInputs/FormInputs.jsx";
// import { UserCard } from "components/UserCard/UserCard.jsx";
import { Button } from 'react-bootstrap';

import logo123 from "assets/images/AddOne.svg";
import logoB from "assets/images/AddOne.svg";
import logoC from "assets/images/AddOne.svg";
import logoD from "assets/images/AddOne.svg";
import logo5 from "assets/images/car-01.jpg";
import { Modal } from 'react-bootstrap';
// import image from "assets/imgages/sidebar-3.jpg";

import Select from 'react-select';
var options = [];


class UserProfile extends Component {
	
	constructor(props) {
		super(props);
		window.scrollTo(0, 0);
		this.state = {
			logoA: logo123,
			deladerForm: false,
			successForm: false,
			dealer: {},
			showResult:false,
			a1: { value: '', status: false, dbName: "make" }, a2: { value: '', status: false, dbName: "model" }, a3: { value: '', status: false, dbName: "badge" }, a4: { value: '', status: false, dbName: "transmission" }, a5: { value: '', status: false, dbName: "fuelType" },
			b1: { value: '', status: false, dbName: "make" }, b2: { value: '', status: false, dbName: "model" }, b3: { value: '', status: false, dbName: "badge" }, b4: { value: '', status: false, dbName: "transmission" }, b5: { value: '', status: false, dbName: "fuelType" },
			c1: { value: '', status: false, dbName: "make" }, c2: { value: '', status: false, dbName: "model" }, c3: { value: '', status: false, dbName: "badge" }, c4: { value: '', status: false, dbName: "transmission" }, c5: { value: '', status: false, dbName: "fuelType" },
			d1: { value: '', status: false, dbName: "make" }, d2: { value: '', status: false, dbName: "model" }, d3: { value: '', status: false, dbName: "badge" }, d4: { value: '', status: false, dbName: "transmission" }, d5: { value: '', status: false, dbName: "fuelType" }
		}
		this.myDivToFocus = React.createRef()
		if(props.location.homeProps && props.location.homeProps.name && props.location.homeProps.name === "tool"){
			//if(this.myDivToFocus.current){
				window.scrollTo(0, 400);
			//}
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
							<button className="btn btn-warning" type="button" style={{"width": "30%"}} onClick={() => this.submitContact(props)} >Submit</button>
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
			//props.onHide();
			this.setState({successForm: false});
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
				<Button variant="primary" onClick={() => setModalShow(true)} className="btn btn-warning btnContact">
					FIND YOUR LOCAL DEALER
			</Button>

				<this.MyVerticallyCenteredModal
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
			</>
		);
	}
	getCarInfo = (id, key, make, model, badge, transmission, fuelType, keyVal) => {
		fetch("http://localhost:7001/getCars?field=" + key + "&make=" + make + "&model=" + model + "&badge=" + badge + "&transmission=" + transmission)
			.then(res => res.json())
			.then(
				(result) => {
					if (fuelType) {
						let lastRes = this.state[keyVal];
						lastRes['lastResult'] = result.data[0]
						console.log(lastRes, '============')
						this.setState(lastRes);
					}
					else {
						const items = []

						for (let i = 0; i < result.data.length; i++) {
							items.push(<option value={result.data[i][key]} key={i}>{result.data[i][key]}</option>)
						}
						let lastRes = this.state[id];
						lastRes['options'] = items;
						this.setState(lastRes);
					}
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			)
	}
	finalRes = () => {
		if(this.state.a5 || this.state.b5 || this.state.c5 || this.state.d5){
			this.setState({logoA : logo5});
		this.setState({showResult : true});
		}
	}
	shoot = (a) => {
		let key = this.state[a + 1]
		key.status = true;
		this.getCarInfo(a + 1, this.state[a + 1].dbName, key.value)
		this.setState(key);
	}
	shootLast = (key, val) => {
		console.log(key, val, '=345=345')
		if(val) {
		let res = this.state[key];
		res.value = val;
		this.setState(res);
		this.getCarInfo(val, '*', this.state[key.split('')[0] + 1].value, this.state[key.split('')[0] + 2].value, this.state[key.split('')[0] + 3].value, this.state[key.split('')[0] + 4].value, this.state[key.split('')[0] + 5].value, key)
	}
	else {
		let res = this.state[key];
		res.value = '';
		this.setState(res);
		this.setState({showResult:false});
	}
}
	handleOnClick = (event) => {
        //.current is verification that your element has rendered
        if(this.myDivToFocus.current){
            this.myDivToFocus.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "nearest"
            })
        }
    }
	shootNext = (val, b) => {
		console.log(val, b, '===========123')
		let key = this.state;
		for (let i = val.split('')[1]; i <= 5; i++) {
			//key[val.split('')[0] + (i-1)].status = false;
			key[val.split('')[0] + (i - 1)].value = '';
			key[val.split('')[0] + i].status = false;
			key[val.split('')[0] + i].value = '';
			//	key[val.split('')[0] + i].value = 'select';
		}
		this.setState(key);
		if (b === '') {
			for (let i = val.split('')[1]; i <= 5; i++) {
				//key[val.split('')[0] + (i-1)].status = false;
				key[val.split('')[0] + (i - 1)].value = '';
				key[val.split('')[0] + i].status = false;
				key[val.split('')[0] + i].value = '';
				//	key[val.split('')[0] + i].value = 'select';
			}
			this.setState(key);
		}
		else {
			let prevVal = this.state;
			prevVal[val.split('')[0] + (val.split('')[1] - 1)].value = b;
			key[val].status = true
			this.setState(key);
			this.setState(prevVal)
			this.getCarInfo(val, prevVal[val].dbName, prevVal[val.split('')[0] + 1].value, prevVal[val.split('')[0] + 2].value, prevVal[val.split('')[0] + 3].value, prevVal[val.split('')[0] + 4].value)

		}
			this.setState({showResult : false});
	}
	render() {
		return (
			<div>
				<section className="banner banner2">
					<div className="container">
						<div className="text col-xs-12 col-sm-8 col-sm-offset-2 bannerTxt">Find your next vehicle
				<div className="col-sm-12 form-group" style={{ "marginTop": "60px" }}>
								<b><input type="button" name="btnSubmit" onClick={this.handleOnClick} className="btn btn-warning" value="COMPARE CAR NOW" style={{ "width": "60%" }} /></b>
							</div>
						</div>
					</div>
				</section>
				<section className="container">
					<div className="row">
						<div className="col-sm-11 col-sm-offset-1">
							<h3 className="title text-center">Car Compare Australia</h3>
							<p className="txt text-center" style={{"marginTop": "25px", "marginBottom": "70px"}}>Looking for new vehicle? Car compare Australia<br /> is an independent platform which allow you to<br /> compare not only the driveaway cost and<br /> specs' of a number of vehicles side by side,<br /> but we also help you understand the<br /> ongoing maintenance costs too!<br /> Start comparing today</p>
						</div>
						<div className="col-sm-11 col-sm-offset-1">
							<div className="col-sm-3">
								<img className=" mg-20 img-responsive" src={this.state.logoA} onClick={() => this.shoot("a")} alt="Lexus" style={{ "height": "105px" }} />
								{/* <span>Select car</span> */}
								<div className="drop-box1">
									<div className="dropdown">
										<select className={" form-control " + (this.state.a1.status ? 'select2' : 'select1')} id="a1" value={this.state.a1.value} onChange={(e) => this.shootNext("a2", e.target.value)} disabled={this.state.a1.status === false}>
											<option value="">Make</option>
											{this.state.a1.options}
										</select>
									</div>
									<div className="dropdown">
										<select className={" form-control " + (this.state.a2.status ? 'select2' : 'select1')} id="a2" value={this.state.a2.value} onChange={(e) => this.shootNext("a3", e.target.value)} disabled={this.state.a2.status === false}>
											<option value="">Model</option>
											{this.state.a2.options}
										</select>
									</div>
									<div className="dropdown">
										<select className={" form-control " + (this.state.a3.status ? 'select2' : 'select1')} id="a3" onChange={(e) => this.shootNext("a4", e.target.value)} value={this.state.a3.value} disabled={this.state.a3.status === false}>
											<option value="">Badge</option>
											{this.state.a3.options}
										</select>
									</div>
									<div className="dropdown">
										<select className={" form-control " + (this.state.a4.status ? 'select2' : 'select1')} id="a4" onChange={(e) => this.shootNext("a5", e.target.value)} value={this.state.a4.value} disabled={this.state.a4.status === false}>
											<option value="">Transmission</option>
											{this.state.a4.options}
										</select>
									</div>
									<div className="dropdown">
										<select className={" form-control " + (this.state.a5.status ? 'select2' : 'select1')} id="a5" onChange={(e) => this.shootLast("a5", e.target.value)} value={this.state.a5.value} disabled={this.state.a5.status === false}>
											<option value="">Fuel Type</option>
											{this.state.a5.options}
										</select>
									</div>
								</div>
							</div>
							<div className="col-sm-3">
								{/* <img className=" mg-20 img-responsive" src="images/car-01.jpg" alt="Lexus" /> */}
								<img className=" mg-20 img-responsive" src={logoB} onClick={() => this.shoot("b")} alt="Lexus" style={{ "height": "105px" }} />
								<div className="drop-box1">
									<div className="dropdown">
										<select className={" form-control " + (this.state.b1.status ? 'select2' : 'select1')} id="b1" onChange={(e) => this.shootNext("b2", e.target.value)} value={this.state.b1.value} disabled={this.state.b1.status === false}>
											<option value="">Make</option>
											{this.state.b1.options}
										</select>
									</div>
									<div className="dropdown">
										<select className={" form-control " + (this.state.b2.status ? 'select2' : 'select1')} id="b2" onChange={(e) => this.shootNext("b3", e.target.value)} value={this.state.b2.value} disabled={this.state.b2.status === false}>
											<option value="">Model</option>
											{this.state.b2.options}
										</select>
									</div>
									<div className="dropdown">
										<select className={" form-control " + (this.state.b3.status ? 'select2' : 'select1')} id="b3" onChange={(e) => this.shootNext("b4", e.target.value)} value={this.state.b3.value} disabled={this.state.b3.status === false}>
											<option value="">Badge</option>
											{this.state.b3.options}
										</select>
									</div>
									<div className="dropdown">
										<select className={" form-control " + (this.state.b4.status ? 'select2' : 'select1')} id="b4" onChange={(e) => this.shootNext("b5", e.target.value)} value={this.state.b4.value} disabled={this.state.b4.status === false}>
											<option value="">Transmission</option>
											{this.state.b4.options}
										</select>
									</div>
									<div className="dropdown">
										<select className={" form-control " + (this.state.b5.status ? 'select2' : 'select1')} id="b5" onChange={(e) => this.shootLast("b5", e.target.value)} value={this.state.b5.value} disabled={this.state.b5.status === false}>
											<option value="">Fuel Type</option>
											{this.state.b5.options}
										</select>
									</div>
								</div>
							</div>
							<div className="col-sm-3">
								<img className=" mg-20 img-responsive" src={logoC} onClick={() => this.shoot("c")} alt="Lexus" style={{ "height": "105px" }} />
								<div className="drop-box1 drop-bgcolor">
									<div className="dropdown">
										<select className={" form-control " + (this.state.c1.status ? 'select2' : 'select1')} id="c1" onChange={(e) => this.shootNext("c2", e.target.value)} value={this.state.c1.value} disabled={this.state.c1.status === false}>
											<option value="">Make</option>
											{this.state.c1.options}
										</select>
									</div>
									<div className="dropdown">
										<select className={" form-control " + (this.state.c2.status ? 'select2' : 'select1')} id="c2" onChange={(e) => this.shootNext("c3", e.target.value)} value={this.state.c2.value} disabled={this.state.c2.status === false}>
											<option value="">Model</option>
											{this.state.c2.options}
										</select>
									</div>
									<div className="dropdown">
										<select className={" form-control " + (this.state.c3.status ? 'select2' : 'select1')} id="c3" onChange={(e) => this.shootNext("c4", e.target.value)} value={this.state.c3.value} disabled={this.state.c3.status === false}>
											<option value="">Badge</option>
											{this.state.c3.options}
										</select>
									</div>
									<div className="dropdown">
										<select className={" form-control " + (this.state.c4.status ? 'select2' : 'select1')} id="c4" onChange={(e) => this.shootNext("c5", e.target.value)} value={this.state.c4.value} disabled={this.state.c4.status === false}>
											<option value="">Transmission</option>
											{this.state.c4.options}
										</select>
									</div>
									<div className="dropdown">
										<select className={" form-control " + (this.state.c5.status ? 'select2' : 'select1')} id="c5" onChange={(e) => this.shootLast("c5", e.target.value)} value={this.state.c5.value} disabled={this.state.c5.status === false}>
											<option value="">Fuel Type</option>
											{this.state.c5.options}
										</select>
									</div>
								</div>
							</div>
							<div className="col-sm-3">
								<img className=" mg-20 img-responsive" src={logoD} onClick={() => this.shoot("d")} alt="Lexus" style={{ "height": "105px" }} />
								<div className="drop-box1 drop-bgcolor">
									<div className="dropdown">
										<select className={" form-control " + (this.state.d1.status ? 'select2' : 'select1')} id="d1" onChange={(e) => this.shootNext("d2", e.target.value)} value={this.state.d1.value} disabled={this.state.d1.status === false}>
											<option value="">Make</option>
											{this.state.d1.options}
										</select>
									</div>
									<div className="dropdown">
										<select className={" form-control " + (this.state.d2.status ? 'select2' : 'select1')} id="d2" onChange={(e) => this.shootNext("d3", e.target.value)} value={this.state.d2.value} disabled={this.state.d2.status === false}>
											<option value="">Model</option>
											{this.state.d2.options}
										</select>
									</div>
									<div className="dropdown">
										<select className={" form-control " + (this.state.d3.status ? 'select2' : 'select1')} id="d3" onChange={(e) => this.shootNext("d4", e.target.value)} value={this.state.d3.value} disabled={this.state.d3.status === false}>
											<option value="">Badge</option>
											{this.state.d3.options}
										</select>
									</div>
									<div className="dropdown">
										<select className={" form-control " + (this.state.d4.status ? 'select2' : 'select1')} id="d4" onChange={(e) => this.shootNext("d5", e.target.value)} value={this.state.d4.value} disabled={this.state.d4.status === false}>
											<option value="">Transmission</option>
											{this.state.d4.options}
										</select>
									</div>
									<div className="dropdown">
										<select className={" form-control " + (this.state.d5.status ? 'select2' : 'select1')} id="d5" onChange={(e) => this.shootLast("d5", e.target.value)} value={this.state.d5.value} disabled={this.state.d5.status === false}>
											<option value="">Fuel type</option>
											{this.state.d5.options}
										</select>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-offset-1 contact-form col-sm-11 home-btn">
							<div className="col-sm-12 form-group">
								<b><input type="submit" name="btnSubmit" className="btnContact" value="COMPARE NOW" onClick={() => this.finalRes()} /></b>
							</div>
						</div>
					</div>
				</section>
				<section className="container list-col-table"  ref={this.myDivToFocus}>
					<div className="row">
						<div className="col-sm-12">
							<table className="table">
								{this.state.showResult ? (<tbody>
									<tr>
										<td className="table-ft">Cost Form</td>
										<td>{this.state.a5.lastResult  && this.state.a5.status  ? this.state.a5.lastResult.driveArayCost : 'n/a'}</td>
										<td>{this.state.b5.lastResult  && this.state.b5.status  ? this.state.b5.lastResult.driveArayCost : 'n/a'}</td>
										<td>{this.state.c5.lastResult  && this.state.c5.status  ? this.state.c5.lastResult.driveArayCost : 'n/a'}</td>
										<td>{this.state.d5.lastResult  && this.state.d5.status ? this.state.d5.lastResult.driveArayCost : 'n/a'}</td>
									</tr>
									<tr>
										<td className="table-ft">Waranty period</td>
										<td>{this.state.a5.lastResult  && this.state.a5.status ? this.state.a5.lastResult.warranty : 'n/a'}</td>
										<td>{this.state.b5.lastResult  && this.state.b5.status ? this.state.b5.lastResult.warranty : 'n/a'}</td>
										<td>{this.state.c5.lastResult  && this.state.c5.status ? this.state.c5.lastResult.warranty : 'n/a'}</td>
										<td>{this.state.d5.lastResult  && this.state.d5.status ? this.state.d5.lastResult.warranty : 'n/a'}</td>
									</tr>
									<tr>
										<td className="table-ft">Servicing invertals</td>
										<td>{this.state.a5.lastResult  && this.state.a5.status ? this.state.a5.lastResult.servicingInterval : 'n/a'}</td>
										<td>{this.state.b5.lastResult  && this.state.b5.status ? this.state.b5.lastResult.servicingInterval : 'n/a'}</td>
										<td>{this.state.c5.lastResult  && this.state.c5.status ? this.state.c5.lastResult.servicingInterval : 'n/a'}</td>
										<td>{this.state.d5.lastResult  && this.state.d5.status ? this.state.d5.lastResult.servicingInterval : 'n/a'}</td>
									</tr>
									<tr>
										<td className="table-ft">Special Offer</td>
										<td>{this.state.a5.lastResult  && this.state.a5.status ? this.state.a5.lastResult.offer : 'n/a'}</td>
										<td>{this.state.b5.lastResult  && this.state.b5.status ? this.state.b5.lastResult.offer : 'n/a'}</td>
										<td>{this.state.c5.lastResult  && this.state.c5.status ? this.state.c5.lastResult.offer : 'n/a'}</td>
										<td>{this.state.d5.lastResult  && this.state.d5.status ? this.state.d5.lastResult.offer : 'n/a'}</td>
									</tr>
									<tr>
										<td className="table-ft">Servicing cost</td>
										<td>{this.state.a5.lastResult  && this.state.a5.status ? this.state.a5.lastResult.serviceCost : 'n/a'}</td>
										<td>{this.state.b5.lastResult  && this.state.b5.status ? this.state.b5.lastResult.serviceCost : 'n/a'}</td>
										<td>{this.state.c5.lastResult  && this.state.c5.status ? this.state.c5.lastResult.serviceCost : 'n/a'}</td>
										<td>{this.state.d5.lastResult  && this.state.d5.status ? this.state.d5.lastResult.serviceCost : 'n/a'}</td>
									</tr>
									<tr>
										<td className="table-ft">Finance options</td>
										<td>{this.state.a5.lastResult  && this.state.a5.status ? this.state.a5.lastResult.finance : 'n/a'}</td>
										<td>{this.state.b5.lastResult  && this.state.b5.status ? this.state.b5.lastResult.finance : 'n/a'}</td>
										<td>{this.state.c5.lastResult  && this.state.c5.status ? this.state.c5.lastResult.finance : 'n/a'}</td>
										<td>{this.state.d5.lastResult  && this.state.d5.status ? this.state.d5.lastResult.finance : 'n/a'}</td>
									</tr>
									<tr>
										<td className="table-ft">Insurance options</td>
										<td>{this.state.a5.lastResult  && this.state.a5.status  && this.state.a5.status ? this.state.a5.lastResult.insurance : 'n/a'}</td>
										<td>{this.state.b5.lastResult  && this.state.b5.status ? this.state.b5.lastResult.insurance : 'n/a'}</td>
										<td>{this.state.c5.lastResult  && this.state.c5.status ? this.state.c5.lastResult.insurance : 'n/a'}</td>
										<td>{this.state.d5.lastResult  && this.state.d5.status ? this.state.d5.lastResult.insurance : 'n/a'}</td>
									</tr>
									<tr>
										<td className="table-ft">Brochure</td>
										<td>{this.state.a5.lastResult  && this.state.a5.status ? this.state.a5.lastResult.brochue : 'n/a'}</td>
										<td>{this.state.b5.lastResult  && this.state.b5.status ? this.state.b5.lastResult.brochue : 'n/a'}</td>
										<td>{this.state.c5.lastResult  && this.state.c5.status ? this.state.c5.lastResult.brochue : 'n/a'}</td>
										<td>{this.state.d5.lastResult  && this.state.d5.status ? this.state.d5.lastResult.brochue : 'n/a'}</td>
									</tr>
								</tbody>) : (<tbody>
									<tr>
										<td className="table-ft">Cost Form</td>
										<td>n/a</td>
										<td>n/a</td>
										<td>n/a</td>
										<td>n/a</td>
									</tr>
									<tr>
										<td className="table-ft">Waranty period</td>
										<td>n/a</td>
										<td>n/a</td>
										<td>n/a</td>
										<td>n/a</td>
									</tr>
									<tr>
										<td className="table-ft">Servicing invertals</td>
										<td>n/a</td>
										<td>n/a</td>
										<td>n/a</td>
										<td>n/a</td>
									</tr>
									<tr>
										<td className="table-ft">Special Offer</td>
										<td>n/a</td>
										<td>n/a</td>
										<td>n/a</td>
										<td>n/a</td>
									</tr>
									<tr>
										<td className="table-ft">Servicing cost</td>
										<td>n/a</td>
										<td>n/a</td>
										<td>n/a</td>
										<td>n/a</td>
									</tr>
									<tr>
										<td className="table-ft">Finance options</td>
										<td>n/a</td>
										<td>n/a</td>
										<td>n/a</td>
										<td>n/a</td>
									</tr>
									<tr>
										<td className="table-ft">Insurance options</td>
										<td>n/a</td>
										<td>n/a</td>
										<td>n/a</td>
										<td>n/a</td>
									</tr>
									<tr>
										<td className="table-ft">Brochure</td>
										<td>n/a</td>
										<td>n/a</td>
										<td>n/a</td>
										<td>n/a</td>
									</tr>
								</tbody>)}
							</table>
						</div>
					</div>
				</section>
				<section className="footer-sec container">
				{/* <div className="banner next-vehicle" style={{"background-color":"#f6f7fb"}}> */}
					<div className="banner next-vehicle" >
						<div className="text col-xs-12 col-sm-9 text-left bannerTxt">Let's find your<br /> next vehicle
				<div className=" form-group">
								<b><this.App /></b>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default UserProfile;
