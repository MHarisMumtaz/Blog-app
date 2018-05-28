import React from 'react';
import logo from '../logo.svg';
const Header = () => {
      return (
      	 <header className="topbar">
	      <div className="container">
	        <div className="row">
	         
	          <div className="col-sm-12">
	            <ul className="social-network">
	              <li><a className="waves-effect waves-dark" href="/"><i className="fa fa-facebook"></i></a></li>
	              <li><a className="waves-effect waves-dark" href="/"><i className="fa fa-twitter"></i></a></li>
	              <li><a className="waves-effect waves-dark" href="/"><i className="fa fa-linkedin"></i></a></li>
	              <li><a className="waves-effect waves-dark" href="/"><i className="fa fa-pinterest"></i></a></li>
	              <li><a className="waves-effect waves-dark" href="/"><i className="fa fa-google-plus"></i></a></li>
	            </ul>
	          </div>

	        </div>
	      </div>
	  </header>
      );
}
export default Header;