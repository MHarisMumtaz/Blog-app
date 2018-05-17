import React, { Component } from 'react';
import {form,FormGroup,ControlLabel,FormControl,Button,HelpBlock} from 'react-bootstrap';

import { connect } from "react-redux";
import { addBlog } from "../Actions/Actions";

const mapDispatchToProps = dispatch => {
  return {
    addBlog: article => dispatch(addBlog(article))
  };
};

const FieldGroup = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel className="controlLabel">{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class AddBlogForm extends Component {
	
	onClickSubmit(){
		let blog = {
			topic   : this.topicInput.value,
			author  : this.authorInput.value,
			article : this.articleInput.value
		};
		this.props.addBlog(blog);
		this.props.history.push("/");
	}
     render(){ return (
         <div className="AddBlog">
             <form>
             	<div className="col-md-12">
	                <FieldGroup
				      id="formControlsTopic"
				      type="text"
				      label="Topic"
				      placeholder="Enter Topic"
				      inputRef={input => this.topicInput = input}
				    />
			    </div>
	            <div className="col-md-6">
				    <FieldGroup
				      id="formControlsText"
				      type="text"
				      label="Author"
				      placeholder="Enter Author"
				      inputRef={input => this.authorInput = input}
				    />
			    </div>
			 	
			 	<div className="col-md-12">
				    <FormGroup controlId="formControlsBlog">
				      <ControlLabel className="controlLabel">Article</ControlLabel>
				      <FormControl inputRef={input => this.articleInput = input} componentClass="textarea" cols={20} rows={11} placeholder="Enter Blog here" />
				    </FormGroup>

			    </div>
			    <div className="col-md-12">
			    <Button type="button" onClick={this.onClickSubmit.bind(this)}>Submit</Button>
			    </div>
			  </form>

         </div>
      );}
}

export default connect(null, mapDispatchToProps)(AddBlogForm);