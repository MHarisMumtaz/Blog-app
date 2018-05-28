import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
  	blogs: state.blogs
   };
};

const SideBar = (props) => {
	return (
		<div className="row sidebar">
			<div className="col-md-12 sidebar-heading">
				Tags
			</div>
			<div className="col-md-12 sidebar-tags">
				{ props.blogs.map((blog) => blog.tags.map((tag) => <span key={tag} className="col-md-3 label label-default tag-badge">{tag}</span> ) ) }
			</div>
		</div>
	);
}

export default connect(mapStateToProps,null)(SideBar);