import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import Store from "./Store/Store";
import './App.css';

import Header  from './Components/Header';
import NavBar  from './Components/NavBar';
import Body    from './Components/Body';
import Footer  from './Components/Footer';

class App extends Component {
  render() {
      return (
         <Provider store={Store}>
            <Router>
               <div>
                  <Header />
                  <NavBar />
                  <Body />
                  <Footer /> 
               </div>
            </Router>
         </Provider>
      );
   }
}

export default App;
