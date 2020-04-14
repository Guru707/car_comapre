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
import UserProfile from "views/UserProfile.jsx";
import ContactUs from "views/ContactUs.jsx";
import AboutUs from "views/AboutUs.jsx";

const dashboardRoutes = [
  {
    path: "/contact",
    name: "Contact Us",
    icon: "pe-7s-user",
    component: ContactUs,
    layout: "/admin"
  },
  {
    path: "/home",
    name: "Home",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/about",
    name: "About Us",
    icon: "pe-7s-user",
    component: AboutUs,
    layout: "/admin"
  }
];

export default dashboardRoutes;
