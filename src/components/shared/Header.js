import React from 'react'
// import ShopIcon from '@material-ui/icons/Shop';

// import './icon'
import './headerStyle.css'
import './SearchBar.scss'
function Header() {
    const handleClick = () => {

    };
    return (
        <React.Fragment>
            <div class="header">
                <div class="company-name"><a href="#default" class="logo"><i class="fa fa-shopping-bag green-color" style={{marginRight:'10px'}}aria-hidden="true" ></i>Shopping<span style={{color:'#4CAF50'}}>Cart</span></a></div>
                <div class="header-right">
                    <input type="button" class="loginButton" onClick={handleClick} value="Login"/>
                    <input type="button" class="loginButton" onClick={handleClick} value="Signup"/>
                    <input  className="inputSearch" placeholder="Search..."/>
                    <div class="search"></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header
