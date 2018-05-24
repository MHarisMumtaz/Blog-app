import React from 'react';

const BlogBox = (props) => {
    function extractContent(s) {
      var span= document.createElement('span');
      span.innerHTML= s;
      return span.textContent || span.innerText;
    };
	return (
		<div className="col-md-8 box">
    		<h3 className="blogTitle">{props.blog.topic}</h3>
    		<div className="col-md-12 boxText">
    			{extractContent(props.blog.article)}
    		</div>
    		<div className="boxSlide"></div>
    		<div className="col-md-12 hand readMe" onClick={() => props.history.push("/ViewBlog/"+props.blog.id)}>Read more</div>
        </div>
		);
}

export default BlogBox;