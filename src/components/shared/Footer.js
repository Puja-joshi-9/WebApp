import React from 'react'
import './footerStyle.css'

function Footer() {
    return (
        <React.Fragment>
        <footer className="footer-distributed">
 
		<div className="footer-left">
		<h3>Shopping<span>Cart</span></h3>
			<p className="footer-links">
			<a href="#">Home</a>-
			<a href="#">About</a>-
			<a href="#">Contact</a>
		</p>
 		<p className="footer-company-name">shoppingcart &copy; 2020</p>
		</div>
 
		<div className="footer-center">
 		<div>
			<i className="fa fa-map-marker"></i>
			<p><span>12-Airy Bhimdatt</span> kanchanpur, Nepal</p>
		</div>
 		<div>
			<i className="fa fa-phone"></i>
			<p>+977 9868792914</p>
		</div>
 
		<div>
			<i className="fa fa-envelope"></i>
			<p><a href="mailto:bhattjanak59@gmail.com">shopping_cart@gmail.com</a></p>
		</div>
 		</div>
 
		<div className="footer-right">
 		<p className="footer-company-about">
		<span>About the company</span>
			Shopping cart company is all for online selling of products of a store.
		</p>
 
		<div className="footer-icons">
 		<a href="#"><i className="fa fa-facebook"></i></a>
		<a href="#"><i className="fa fa-twitter"></i></a>
		<a href="#"><i className="fa fa-linkedin"></i></a>
		<a href="#"><i className="fa fa-github"></i></a>
 		</div>
 
		</div>
		</footer>
 
        </React.Fragment>
    )
}

export default Footer
