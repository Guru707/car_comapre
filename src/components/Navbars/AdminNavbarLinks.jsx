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
// import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
//import { Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "assets/images/CarCompareLogo.jpg";
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Select from 'react-select';
import UserProfile from "views/UserProfile";
var options = [];

class AdminNavbarLinks extends Component {
  constructor(props) {
		super(props);
		console.log(window.location.href, '========')
		this.state = {
			activeId : 1,
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
				this.setState({successForm: false});
			//props.onHide();
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
      <span className="btn custom"  style={{ "color": "white", "width":"45%" }} onClick={() => setModalShow(true)}>Find your local dealer</span>

				<this.MyVerticallyCenteredModal
					show={modalShow}
					onHide={() => setModalShow(false)}
				/>
			</>
		);
	}
	handleClick = (id) => {
		this.setState({activeId : id});
		console.log(this.state)
	}
	testFunc = () => {
		window.scrollTo(0, 400);
	}
  render() {
    return (
      <div className="header"> 
			<div className="navbar navbar-default header-nav">
				<div className="container">
					<div className="navbar-header">
					  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						<span className="sr-only"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					  </button>
					  <a className="navbar-brand logo" href="index.html"><img src={logo} width="100" alt="Car Compare" title="Car Compare" /></a>
					</div>
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

					  <ul className="nav navbar-nav topnav">
						<li><NavLink
                      exact className={((this.state.activeId === 1 || window.location.href.split('/')[4] === 'home') ? 'activeLink' : '')} onClick={() => this.handleClick(1)}  to={"home"} >Home</NavLink></li>
						<li><NavLink
                      to={"about"} onClick={() => this.handleClick(2)} className={((this.state.activeId === 2 && window.location.href.split('/')[4] === 'about') ? 'activeLink' : '')} >About us</NavLink></li>
						<li><NavLink
                      to={"contact"} onClick={() => this.handleClick(3)} className={((this.state.activeId === 3 && window.location.href.split('/')[4] === 'contact') ? 'activeLink' : '')} >Contact Us</NavLink></li>
					  </ul>
					  <div className="buttons btn-head" >
              
						<NavLink exact onClick={() => this.testFunc()} 
										to={{"pathname": "home", "homeProps" :{"name": "tool"}}}   style={{"color":"white", "textDecoration":"none"}}><span className="btn btn-warning btn-head"    >Car Comparison Tool</span></NavLink>
						<b><this.App /></b>
					  </div>
					</div>
			  </div>
			</div>
        {/* <Nav pullRight>
          <NavItem eventKey={1} href="/#">
            Home
          </NavItem>
          <NavItem eventKey={1} href="/#">
            About us
          </NavItem>
          <NavItem eventKey={1} href="/#">
            Contact us
          </NavItem>
        </Nav> */}
      </div>
    );
  }
}

export default AdminNavbarLinks;
