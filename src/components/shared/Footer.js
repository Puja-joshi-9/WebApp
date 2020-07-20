import React from 'react'
import './footerStyle.css'

function Footer() {
    return (
        <React.Fragment>
        <footer class="footer-distributed">
 
		<div class="footer-left">
		<h3>Shopping<span>Cart</span></h3>
			<p class="footer-links">
			<a href="#">Home</a>
			<a href="#">Blog</a>
			<a href="#">Pricing</a>
			<a href="#">About</a>
			<a href="#">Faq</a>
			<a href="#">Contact</a>
		</p>
 		<p class="footer-company-name">shoppingcart &copy; 2020</p>
		</div>
 
		<div class="footer-center">
 		<div>
			<i class="fa fa-map-marker"></i>
			<p><span>12-Airy Bhimdatt</span> kanchanpur, Nepal</p>
		</div>
 		<div>
			<i class="fa fa-phone"></i>
			<p>+977 9868792914</p>
		</div>
 
		<div>
			<i class="fa fa-envelope"></i>
			<p><a href="mailto:bhattjanak59@gmail.com">shopping_cart@gmail.com</a></p>
		</div>
 		</div>
 
		<div class="footer-right">
 		<p class="footer-company-about">
		<span>About the company</span>
			Shopping cart company is all for online selling of products of a store.
		</p>
 
		<div class="footer-icons">
 		<a href="#"><i class="fa fa-facebook"></i></a>
		<a href="#"><i class="fa fa-twitter"></i></a>
		<a href="#"><i class="fa fa-linkedin"></i></a>
		<a href="#"><i class="fa fa-github"></i></a>
 		</div>
 
		</div>
		</footer>
 
        </React.Fragment>
    )
}

export default Footer
