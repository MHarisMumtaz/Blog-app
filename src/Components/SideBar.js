import React, { Component }  from 'react';
import { connect } from "react-redux";
import { searchResult } from "../Actions/Actions";

const mapStateToProps = state => {
  return {
  	blogs: state.blogs.allBlogs,
  	search : state.blogs.search
   };
};

const mapDispatchToProps = dispatch => {
  return {
    searchResult: result => dispatch(searchResult(result))
  };
};

class SideBar extends Component {

	search(tag){
		let result = this.props.blogs.filter((blog) => {
			if(blog.tags.find((t) => t==tag)){
				return blog;
			}
			return null;
		});
		this.props.searchResult(result);
	}
	render(){
		return (
			<div className="row sidebar">
				<div className="col-md-12 sidebar-heading">
					Tags
				</div>
				<div className="col-md-12 sidebar-tags">
					{ this.props.blogs.map((blog) => blog.tags.map((tag) => <span key={tag} className="col-md-3 label label-default tag-badge" onClick={() => this.search(tag)} >{tag}</span> ) ) }
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SideBar);