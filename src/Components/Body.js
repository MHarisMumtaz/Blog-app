import React from 'react';
import { Switch, Route } from 'react-router-dom';


import AddBlogForm from './AddBlogForm';
import Home    from './Home';
import ViewBlog from './ViewBlog';
import UserLogin from './UserLogin';

const Body = (props) => {

  	return (
        <div className="container body">
           
            <Switch>
              <Route exact path='/' render={(props) => <Home {...props} />} /> />
              <Route exact path='/add-blog' render={(props) => <AddBlogForm {...props} /> }  />
              <Route path='/ViewBlog/:id'  render={(props) => <ViewBlog {...props} /> } />
              <Route path='/user-login'  render={(props) => <UserLogin {...props} /> } />
           </Switch>
           
        </div>
  );
}
export default Body;
