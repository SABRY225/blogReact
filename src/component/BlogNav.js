// BlogNav.js

import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';
import { Navbar, Nav} from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
const BlogNav = () => {
	return (
		<div>
			<Navbar className="navbarblog" style={{
				backgroundColor:"#FDFEFE ",
                padding:"10px",
			}}>
				<Navbar.Brand href="#home" style={{color:"#000C0C", marginLeft:"10px",fontSize:"22px",fontStyle:"italic"}}>BlogSite</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
					<Nav>
						<Link to="/" className="link_Navbar">Articles</Link>
						<Link to="/courses" className="link_Navbar" >courses</Link>
						<Link to="/project" className="link_Navbar">Project</Link>
						<Link to="/contact" className="link_Navbar">Contact Us</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Outlet />
			<Footer />
		</div>
	)
}

export default BlogNav;
