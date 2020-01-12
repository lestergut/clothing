import React, { Component } from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';

import { auth, createUserProfileDocument } from './firebase/firebase.util';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
   constructor(props) {
      super(props);

      this.state = {
         currentUser: null
      };
   }

   unsubscribeFromAuth = null;

   componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
         // this.setState({ currentUser: user.displayName });
         createUserProfileDocument(user);

         console.log(user);
      });
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth();
   }

   render() {
      return (
         <div>
            <Header currentUser={this.state.currentUser} />
            <Switch>
               <Route exact path="/" component={HomePage} />
               <Route path="/shop" component={ShopPage} />
               <Route path="/signin" component={SignInAndSignUp} />
            </Switch>
         </div>
      );
   }
}

export default App;
