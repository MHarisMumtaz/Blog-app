import React, { Component } from 'react';
import {form,FormControl} from 'react-bootstrap';
import { connect } from "react-redux";
import CommentBox from './CommentBox';
import { addComment } from "../Actions/Actions";

const mapStateToProps = state => {
  return { 
  	blogs: state.blogs,
  	comments : state.comments,
  	loginUser: state.users.loginUser
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
			createdOn: new Date(),
			user : this.props.loginUser.id
		}
		this.props.addComment(comment);
		this.commentInput.value = "";
	}

	onEnter(e,blogId){
	  if(e.key === "Enter"){
	  	this.onPostCommentClick(blogId);
	  }
	}
	componentDidMount() {
		let blog = this.props.blogs.find((b)=> b.id == this.props.match.params.id);
	   document.getElementById("cont").innerHTML = blog.article;
	   document.getElementById("author").innerText = "Author: "+ blog.author;
	   document.getElementById("topic").innerText = blog.topic;
	}
	render(){
		const blogId = this.props.match.params.id;
		const comments = this.props.comments.filter((c) => c.blogId == this.props.match.params.id);
		return (
			<div className="col-md-12">
	    		<h1 id="topic"></h1>
	    		<h5 id="author"></h5>
	    		<p id="cont"></p>
	    		<div className="container">
	    		{ comments.map(comment => <CommentBox key={comment.id} comment={comment} /> )}
		    	
		    		<form className="col-md-12 commentBox">
		    			<div className="col-md-2 avatar"> 
		    			</div>
		    			<div className="col-md-10">
		    			{/*<input type="text" className="form-control userNameInput" placeHolder="Enter Name"  />*/}
		    				 <FormControl inputRef={input => this.commentInput = input}  onKeyPress={(event)=>this.onEnter(event,blogId)} className="textArea" componentClass="textarea" cols={100} rows={2} placeholder="comment" />
		    				
		    			</div>
		    			<div className="col-md-12">
		    				<button type="button" className="btn btn-default pull-right" onClick={()=>this.onPostCommentClick(blogId)}>Post</button>
		    			</div>
		    		</form>
	    		</div>
	        </div>
		);
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewBlog);