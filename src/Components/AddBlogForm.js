import React, { Component } from 'react';
import {form,FormGroup,ControlLabel,FormControl,Button,HelpBlock} from 'react-bootstrap';
import ReactQuill from 'react-quill'; // ES6

import { connect } from "react-redux";
import { addBlog } from "../Actions/Actions";

const mapDispatchToProps = dispatch => {
  return {
    addBlog: article => dispatch(addBlog(article))
  };
};
const mapStateToProps = state => {
  return { 
  	loginUser: state.users.loginUser
   };
};

const FieldGroup = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel className="controlLabel">{label}</ControlLabel>
      {help && <HelpBlock>{help}</HelpBlock>}
      <FormControl {...props} />
    </FormGroup>
  );
}

class AddBlogForm extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			topic   : '',
			author  : '',
			article : '',
			formErrors : {},
			modules :{
			toolbar: [
				[{ 'header': [1, 2, false] }],
				['bold', 'italic', 'underline','strike', 'blockquote'],
				[{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
				['link', 'image'],
				['clean']
				]
			}, 
			formats :[
			    'header',
			    'bold', 'italic', 'underline', 'strike', 'blockquote',
			    'list', 'bullet', 'indent',
			    'link', 'image'
			]
		};
	}

	onClickSubmit(){
		let formErrors = {};
		if (this.state.topic=="") {
			formErrors.topicRequired = true;
			this.setState({formErrors : formErrors});
		}
		if (this.state.article=="") {
			formErrors.articleRequired = true;
			this.setState({formErrors : formErrors});
		}
		if (formErrors.topicRequired || formErrors.authorRequired || formErrors.articleRequired) {
			return;
		}
		this.setState({formErrors: {} });
		let blog = {
			topic   : this.state.topic,
			author  : this.props.loginUser.name,
			article : this.state.article
		};
		this.props.addBlog(blog);
		this.props.history.push("/");
	}
    
    handleUserInput (e) {
	  const name = e.target.name;
	  const value = e.target.value;
	  this.setState({[name]: value},() => { this.validateField(name, value) });
	}

	handleRichTextChange(value) {
    	this.setState({ article: value })
  	}

	validateField(fieldName,value){
		let errors = this.state.formErrors;
		switch(fieldName){
			case "topic":
			   var notInRange = value.length < 3 || value.length > 50;
			   errors.topicNotInRange = notInRange;
			break;
		}
		this.setState({formErrors : errors});
	}

    render(){ return (
         <div className="AddBlog">

             <form>

				<div className="col-md-12">
			    	<Button type="button" className="btn btn-success pull-right" onClick={this.onClickSubmit.bind(this)}>Submit</Button>
			    </div>
             	<div className="col-md-12">

	                <FieldGroup
				      id="formControlsTopic"
				      name="topic"
				      type="text"
				      label="Topic"
				      placeholder="Enter Topic"
				      value={this.state.topic}
				      help={this.state.formErrors.topicRequired ? "*required" : (this.state.formErrors.topicNotInRange ? "Length should be > 3 and < 50" : "")}
				      onChange={(event) => this.handleUserInput(event)}
				    />
			    </div>
	         {/*   <div className="col-md-6">
				    <FieldGroup
				      id="formControlsText"
				      name="author"
				      type="text"
				      label="Author"
				      placeholder="Enter Author"
				      value={this.state.author}
				      help={this.state.formErrors.authorRequired ? "*required" :  (this.state.formErrors.authorNotInRange ? "Length should be > 3 and < 13" : "")}
				      onChange={(event) => this.handleUserInput(event)}
				    />
			    </div>*/}
			 	
			 	<div className="col-md-12">
			 		<ReactQuill value={this.state.article} modules={this.state.modules} onChange={this.handleRichTextChange.bind(this)} formats={this.state.formats} />
				    {/*<FormGroup controlId="formControlsBlog">
				      <ControlLabel className="controlLabel">Article</ControlLabel>
				       {this.state.formErrors.authorRequired && <HelpBlock>*required</HelpBlock>}
				       {this.state.formErrors.articleNotInRange && <HelpBlock>Max Characters 400</HelpBlock>}
				      <FormControl name="article" value={this.state.article} onChange={(event) => this.handleUserInput(event)} componentClass="textarea" cols={20} rows={11} placeholder="Enter Blog here" />
				    </FormGroup>*/}

			    </div>
			  </form>

         </div>
      );}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBlogForm);