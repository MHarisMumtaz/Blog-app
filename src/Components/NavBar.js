import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
      return (
          	<nav className="navbar navbar-inverse">
             <div className="container-fluid">
              
               <ul className="nav navbar-nav">
                 <li className="active"><Link to={'/'}>Home</Link></li>
                 <li><Link to={'/AddBlog'}>Add Blog</Link></li>
               </ul>
             </div>
           </nav>
      );
}
export default NavBar;