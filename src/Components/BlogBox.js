import React from 'react';

const BlogBox = (props) => {
	return (
		<div className="col-md-3 box">
    		<h3 className="blogTitle">{props.blog.topic}</h3>
    		<div className="col-md-12 boxText">
    			{props.blog.article}
    		</div>
    		<div className="boxSlide"></div>
    		<div className="col-md-12 hand readMe" onClick={() => props.history.push("/ViewBlog/"+props.blog.id)}>Read more</div>
        </div>
		);
}

export default BlogBox;