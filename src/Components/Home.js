import React from 'react';
import BlogBox from './BlogBox';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import SideBar from './SideBar';


const mapStateToProps = state => {
  return { blogs: state.blogs };
};

const Home = ({blogs,history}) => {
      return (
         <div>
            <h2>Home</h2>
           <div className="col-md-8 left-content">
                {blogs.map(blog => <BlogBox history={history} key={blog.topic} blog={blog} /> )}
            </div>
             <div className="col-md-4 right-content">
                 <SideBar />
           </div>
         </div>
      );
}

Home.propTypes = {
    blogs : PropTypes.array
}
export default connect(mapStateToProps)(Home);