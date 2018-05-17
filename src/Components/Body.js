import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AddBlogForm from './AddBlogForm';
import Home    from './Home';
import ViewBlog from './ViewBlog';

const Body = (props) => {

  	return (
        <div className="container">
            <Switch>
              <Route exact path='/' render={(props) => <Home {...props} />} /> />
              <Route exact path='/AddBlog' render={(props) => <AddBlogForm {...props} /> }  />
              <Route path='/ViewBlog/:id'  render={(props) => <ViewBlog {...props} /> } />
           </Switch>
        </div>
  );
}
export default Body;
