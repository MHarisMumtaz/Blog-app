import React, { Component } from 'react';
import BlogBox from './BlogBox';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import SideBar from './SideBar';

import { searchResult } from "../Actions/Actions";

const mapStateToProps = state => {
  return { 
    searchBlogs: state.blogs.search,
    allBlogs   : state.blogs.allBlogs
   };
};

const mapDispatchToProps = dispatch => {
  return {
    searchResult: result => dispatch(searchResult(result))
  };
};

class Home extends Component {

    constructor(props){
      super(props);
      this.props.searchResult(this.props.allBlogs);
    }

    render(){
      return (
         <div>
            <h2>Home</h2>
           <div className="col-md-8 left-content">
                {this.props.searchBlogs.map(blog => <BlogBox history={this.props.history} key={blog.topic} blog={blog} /> )}
            </div>
             <div className="col-md-4 right-content">
                 <SideBar />
           </div>
         </div>
      );
    }
}

Home.propTypes = {
    blogs : PropTypes.array
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);