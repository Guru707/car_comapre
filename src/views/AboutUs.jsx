/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/productli /ght-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficialli /ght-bootstrap-dashboard-react/blob/masterli /CENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import logo from "assets/images/Girl-with-new-car.jpeg";
import img1 from "assets/images/Photo 1.jpg";
import img2 from "assets/images/Photo 2.jpg";
import img3 from "assets/images/Photo 3.jpg";

import arrowLeft from "assets/images/arrowLeft.svg";
import arrowRight from "assets/images/arrowRight.svg";
import arrowLeftHovered from "assets/images/arrowLeftHovered.svg";
import arrowRightHovered from "assets/images/arrowRightHovered.svg";
class UserProfile extends Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);
		this.state = {
            active1: true,
            active2: false,
            active3: false
        }
	}
    goLeft = () => {
        if(this.state.active1 === true){
        this.setState({active3:true, active1:false, active2:false});
        }
    if(this.state.active2 === true){
        this.setState({active1:true, active3:false, active2:false});
        }
    if(this.state.active3 === true){
        this.setState({active2:true, active1:false, active3:false});
        }
    }
    goRight = () => {
        if(this.state.active1 === true){
        this.setState({active2:true, active1:false, active3:false});
        }
    if(this.state.active2 === true){
        this.setState({active3:true, active1:false, active2:false});
        }
    if(this.state.active3 === true){
        this.setState({active1:true, active2:false, active3:false});
        }
    }
	render() {
		return (
		<div>
				<section className="banner banner3">
					<div className="container">
						<div className="text col-xs-12 col-sm-8 col-sm-offset-2 bannerTxt">Car Compare Australia We're here to help</div>
					</div>
				</section>
				<section className="container">
					<div className="col-xs-12 col-sm-10 col-sm-offset-1">
						<div className="row">
							<div className="col-sm-7">
								<h5 className="title">Who are we?</h5>
								<p className="txt">Our aim is to make purchasing a vehicle easy. To have all your research in one place.</p>
								<p className="txt">We are an independent company that simply allows you to compare vehicle features.</p>
								<p className="txt">Our team are experienced within the automative industry, so we understand the overhelming experience it can be when trying to decide on your next vehicle. Everybody has different wants and needs - so we have made it easy by breaking down all the important information and being able to compare numerous vehicles.</p>
							</div>
							<div className="col-sm-5 userImg">
								<img src={logo} className="img-responsive" alt="User" title="User" />
							</div>
						</div>
					</div>
				</section>
                {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossOrigin="anonymous"></script>
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700" rel="stylesheet" /> */}
				<section className= "container slider-bar" >
        <div className= "row">
            <div className= "col-md-12 col-sm-offset-1">
			<h5 className="title col-sm-12 ">Reviews</h5>
                <div className= "carousel slide leftClass" data-ride = "carousel" id = "quote-carousel">
                
					<div className="col-sm-6 col-md-6 pull-right" >
                    <div className="carousel-inner text-left">
                        <div className={this.state.active1 ? 'active item': 'item'}>
                            <blockquote>
                                <div className= "row">
                                    <div className= "col-sm-11 ">
                                       <h4><span style={{"color":"#f0ad4e"}}>"</span>Active 1 My partner was set on getting a wagon for our next car (I not so much). Car Compare allowed us to compare different body type -wagons and SUV's all on one page<span style={{"color":"#f0ad4e"}}>"</span></h4>
										<h5 style={{"marginBottom": "0px"}}>Drew Houston</h5>
                                        <span  style={{"fontSize": "12px", "color": "#918e8e"}}>Dropbox CEO </span>
                                    </div>
                                </div>
                            </blockquote>
                        </div>
                        <div className={this.state.active2 ? 'active item': 'item'}>
                            <blockquote>
                                <div className= "row">
                                    <div className= "col-sm-11 ">
                                        <h4><span style={{"color":"#f0ad4e"}}>"</span>Active 222 My partner was set on getting a wagon for our next car (I not so much). Car Compare allowed us to compare different body type -wagons and SUV's all on one page<span style={{"color":"#f0ad4e"}}>"</span></h4>
										<h5  style={{"marginBottom": "0px"}}>Drew Houston</h5>
                                        <span  style={{"fontSize": "12px", "color": "#918e8e"}}>Dropbox CEO </span>
                                    </div>
                                </div>
                            </blockquote>
                        </div>
                        <div className={this.state.active3 ? 'active item': 'item'}>
                            <blockquote>
                                <div className= "row">
                                    <div className= "col-sm-11">
                                        <h4><span style={{"color":"#f0ad4e"}}>"</span>Active 333 My partner was set on getting a wagon for our next car (I not so much). Car Compare allowed us to compare different body type -wagons and SUV's all on one page<span style={{"color":"#f0ad4e"}}>"</span></h4>
										<h5 style={{"marginBottom": "0px"}}>Drew Houston</h5>
                                        <span  style={{"fontSize": "12px", "color": "#918e8e"}}>Dropbox CEO </span>
                                    </div>
                                </div>
                            </blockquote>
                        </div>                        
                    </div>
                    <div class="carousel-arrow">
                    <a data-slide = "prev" onClick={this.goLeft} className= "left carousel-control"><img style={{"width":"35px"}} src={arrowLeft} onMouseOut={e => (e.currentTarget.src = arrowLeft)} onMouseOver={e => (e.currentTarget.src = arrowLeftHovered)}></img> </a>
                    <a data-slide = "next" onClick={this.goRight} className= "right carousel-control"><img style={{"width":"35px"}} src={arrowRight} onMouseOut={e => (e.currentTarget.src = arrowRight)} onMouseOver={e => (e.currentTarget.src = arrowRightHovered)}></img></a>
                    </div>
                    </div>
                    <div class="col-sm-6 col-md-6">
                    <ol className= "carousel-indicators">

					<li className={this.state.active1 ? 'active': null}> <img className= "img-responsive" src = {img2} alt = "" />
                        </li>
					<li  className={this.state.active2 ? 'active': null}><img className= "img-responsive" src = {img3} alt="" />
                        </li>
                        <li className={this.state.active3 ? 'active': null}> <img className= "img-responsive " src = {img1} alt="" />
                        </li>
                    </ol>
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
