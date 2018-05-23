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
          	<nav className="navbar navbar-inverse">
             <div className="container-fluid">
               <ul className="nav navbar-nav">
                 <li className="active"><Link to={'/'}>Home</Link></li>
                 { this.props.loginUser && <li><Link to={'/add-blog'}>Add Blog</Link></li>}
                 { !this.props.loginUser && <li><Link to={'/user-login'}>Login</Link></li>}
                 { this.props.loginUser && <li><Link to={'/'}>{this.props.loginUser.name}</Link></li> }
               </ul>
             </div>
           </nav>
      );
    }
}
export default connect(mapStateToProps,null)(NavBar);