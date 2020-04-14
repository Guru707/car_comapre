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
// import logo from "assets/img/reactlogo.png";
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Select from 'react-select';

// import image from "assets/imgages/sidebar-3.jpg";

const options = [
	{ value: 'blues', label: 'Blues' },
	{ value: 'rock', label: 'Rock' },
	{ value: 'jazz', label: 'Jazz' },
	{ value: 'orchestra', label: 'Orchestra' } 
  ];

function MyVerticallyCenteredModal(props) {
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
    <label htmlFor="exampleFormControlInput1">Name</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Mat" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput2">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput3">Contact Number</label>
    <input type="number" className="form-control" id="exampleFormControlInput3" placeholder="0466111111" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput4">Postcode</label>
    <input type="number" className="form-control" id="exampleFormControlInput4" placeholder="123123" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlSelect5">Example select</label>
    <Select options = {options} />
  </div>
</form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

// function App() {
// 	const [modalShow, setModalShow] = React.useState(false);
  
// 	return (
// 	  <>
// 		<Button variant="primary" onClick={() => setModalShow(true)} className="btn btn-warning btnContact">
// 		 FIND YOUR LOCAL DEALER
// 		</Button>
  
// 		<MyVerticallyCenteredModal
// 		  show={modalShow}
// 		  onHide={() => setModalShow(false)}
// 		/>
// 	  </>
// 	);
//   }
class Sidebar extends Component {
  render() {
    const [modalShow, setModalShow] = React.useState(false);
  
	return (
	  <>
		<Button variant="primary" onClick={() => setModalShow(true)} className="btn btn-warning btnContact">
		 FIND YOUR LOCAL DEALER
		</Button>
  
		<MyVerticallyCenteredModal
		  show={modalShow}
		  onHide={() => setModalShow(false)}
		/>
	  </>
	);
  }
}

export default Sidebar;
