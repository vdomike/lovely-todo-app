import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

import Navbar from './components/layout/Navbar/Navbar';
import HomePage from './components/home-page/HomePage';
import Dashboard from './components/dashboard/Dashboard';
import QuoteDetails from './components/quotes/QuoteDetails';
import QuotesPage from './components/quotes/QuotesPage';
import CreateQuote from './components/quotes/CreateQuote';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App({ auth }) {
  return (
    <BrowserRouter>
      <div className="app mx-auto flex flex-col min-h-screen">
        {isLoaded(auth) && <Navbar />}
        <Switch>
          <Route path="/" component={HomePage} exact />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <Route path="/quotes" component={QuotesPage} exact />
          <Route path="/quotes/:id" component={QuoteDetails} />
          <ProtectedRoute path="/create-quote" component={CreateQuote} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(App);
