import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { 
    loginUser : state.users.loginUser
   };
};

class NavBar extends Component {
    render(){
      return (
         <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
          <div className="container">
            <a className="navbar-brand navbar-a"> TECHBLOG.COM</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">

              <ul className="navbar-nav ml-auto">

                <li className="nav-item active navbar-li">
                  <Link className="nav-link navbar-a" to={'/'}>Home</Link>
                </li>

                <li className="nav-item navbar-li">
                  <Link className="navbar-a nav-link" to={'/'}>About</Link>
                </li>

               { this.props.loginUser && <li className="nav-item navbar-li"><Link className="nav-link navbar-a" to={'/add-blog'}>Add Blog</Link></li>}
               { !this.props.loginUser && <li className="nav-item navbar-li"><Link className="nav-link navbar-a" to={'/user-login'}><span className="glyphicon glyphicon-user"></span> Login</Link></li>}
               { this.props.loginUser && <li className="nav-item navbar-li"><Link className="nav-link navbar-a" to={'/'}><span className="glyphicon glyphicon-user"></span> {this.props.loginUser.name}</Link></li> }

              </ul>
            </div>
          </div>
        </nav>
      );
    }
}
export default connect(mapStateToProps,null)(NavBar);