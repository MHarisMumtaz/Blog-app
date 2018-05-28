import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { 
  	users: state.users
   };
};

const CommentBox = (props) => {
      	const comment = props.comment;
      	const user = props.users.all.find((b)=> b.id == props.comment.user);
      	const divStyle = {
		  color: 'blue',
		  backgroundImage: 'url('+user.imageUrl+')'
		};
      return (
        <div className="row commentBox" key={comment.id}>
			<div className="col-md-1 avatar" style={user.imageUrl && divStyle}></div>
			<a className="col-md-2 userName">{user.name}</a>
			<p className="col-md-8 pull-right commentDate">{comment.createdOn.toLocaleString()}</p>
			<div className="col-md-10 commentText">
				{comment.text}
			</div>
		</div>
      );
}
export default connect(mapStateToProps,null)(CommentBox);