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
            <div className="header">
                <div className="company-name"><a href="#default" className="logo"><i className="fa fa-shopping-bag green-color" style={{marginRight:'10px'}}aria-hidden="true" ></i>Shopping<span style={{color:'#4CAF50'}}>Cart</span></a></div>
                <div className="header-right">
                <input type="button" className="loginButton" onClick={handleClick} value="Login"/>
                <div className="cart">
                        <a className="cart-anchor" href="">
                            <i className='fa fa-shopping-cart'></i>
                            <div className="cart-no">2</div>
                            <span>&nbsp; Cart</span>
                        </a>
                        </div>
                    
                    {/* <input type="button" className="loginButton" onClick={handleClick} value="Signup"/> */}
                    <input  className="inputSearch" placeholder="Search..."/>
                    <div className="search"></div>

                    {/* <div className="_1jA3uo">
                        <div className="_1jcwFN">
                            <div className="_3K4_9Q">
                                <a className="_3ko_Ud" href="">
                                    <i className='fa fa-shopping-cart'></i>
                                    <div className="_2dcihZ">2</div>
                                    <span>Cart</span>
                                </a>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </React.Fragment>
    )
}

export default Header
