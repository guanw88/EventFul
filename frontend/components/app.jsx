import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
// import HomePageContainer from "./homepage/home_page_container";


const App = () => {
  return (
  <div>
    <header>
      <a href="/"><h1 id="logo">eventful!</h1></a>
      <GreetingContainer />
    </header>
    
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />

  </div>
  );
};

export default App;