import React from 'react';

const CommentBox = (props) => {
      	const comment = props.comment;
      return (
        <div className="col-md-12 commentBox" key={comment.id}>
			<div className="col-md-2 avatar"> 
			</div>
				<a className="col-md-2 userName">Anonymous</a><p className="col-md-8 pull-right commentDate">{comment.createdOn.toLocaleString()}</p>
			<div className="col-md-10 commentText">
				{comment.text}
			</div>
		</div>
      );
}
export default CommentBox;