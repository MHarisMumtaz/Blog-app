import React from 'react';
import BlogBox from './BlogBox';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

const mapStateToProps = state => {
  return { blogs: state.blogs };
};

const Home = ({blogs,history}) => {
      return (
         <div>
            <h2>Home</h2>
            <div className="col-md-12">
                {blogs.map(blog => <BlogBox history={history} key={blog.topic} blog={blog} /> )}
            </div>
         </div>
      );
}

Home.propTypes = {
    blogs : PropTypes.array
}
export default connect(mapStateToProps)(Home);