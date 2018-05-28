import React, { Component } from 'react';
import {form,FormGroup,ControlLabel,FormControl,Button,HelpBlock} from 'react-bootstrap';

import ReactQuill from 'react-quill'; // ES6
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css'

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
     {/* <ControlLabel className="controlLabel">{label}</ControlLabel>*/}
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
			tags    : [],
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
			article : this.state.article,
			tags    : this.state.tags
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

  	handleTagsChange(value){
  		this.setState({tags: value});
  	}
	validateField(fieldName,value){
		let errors = this.state.formErrors;
		switch(fieldName){
			case "topic":
			   var notInRange = value.length < 3 || value.length > 50;
			   errors.topicNotInRange = notInRange;
			break;
			default:
			 break;
		}
		this.setState({formErrors : errors});
	}

    render(){ return (
         <div className="AddBlog">

             <form>

				<div className="row">
					<div className="col-md-12">
			    		<Button type="button" className="btn btn-success pull-right add-blog-btn" onClick={this.onClickSubmit.bind(this)}>Submit</Button>
			    	</div>
			    </div>

             	<div className="row">
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
			    </div>

			    <div className="col-md-12 tags-inp">
					<TagsInput value={this.state.tags} onChange={this.handleTagsChange.bind(this)} />
			    </div>
			 	
			 	<div className="col-md-12">
			 		<ReactQuill value={this.state.article} modules={this.state.modules} onChange={this.handleRichTextChange.bind(this)} formats={this.state.formats} />
			    </div>
			  </form>

         </div>
      );}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBlogForm);