import React, { Component } from 'react';
import {form,FormControl} from 'react-bootstrap';
import { connect } from "react-redux";
import CommentBox from './CommentBox';
import { addComment } from "../Actions/Actions";

const mapStateToProps = state => {
  return { 
  	blogs: state.blogs,
  	comments : state.comments
   };
};

const mapDispatchToProps = dispatch => {
  return {
    addComment: comment => dispatch(addComment(comment))
  };
};


class ViewBlog extends Component {

	onPostCommentClick(blogId){
		var text = this.commentInput.value;
		if (text=="" || text==null || text.replace(/(\r\n\t|\n|\r\t)/gm,"")=="") { return; }
		let comment = { 
			blogId:blogId, 
			text: text, 
			createdOn: new Date()
		}
		this.props.addComment(comment);
		this.commentInput.value = "";
	}

	onEnter(e,blogId){
	  if(e.key === "Enter"){
	  	this.onPostCommentClick(blogId);
	  }
	}
	render(){
		const blog = this.props.blogs.find((b)=> b.id == this.props.match.params.id);
		const comments = this.props.comments.filter((c) => c.blogId == this.props.match.params.id);
		return (
			<div className="col-md-12">
	    		<h1>{blog.topic}</h1>
	    		<h5>Author: {blog.author}</h5>
	    		<p>{blog.article}</p>
	    		<div className="container">
	    		{ comments.map(comment => <CommentBox key={comment.id} comment={comment} /> )}
		    	
		    		<form className="col-md-12 commentBox">
		    			<div className="col-md-2 avatar"> 
		    			</div>
		    			<div className="col-md-10">
		    			{/*<input type="text" className="form-control userNameInput" placeHolder="Enter Name"  />*/}
		    				 <FormControl inputRef={input => this.commentInput = input}  onKeyPress={(event)=>this.onEnter(event,blog.id)} className="textArea" componentClass="textarea" cols={100} rows={2} placeholder="comment" />
		    				<button type="button" className="btn btn-default pull-right post" onClick={()=>this.onPostCommentClick(blog.id)}>Post</button>
		    			</div>
		    		</form>
	    		</div>
	        </div>
		);
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewBlog);