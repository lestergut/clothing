import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage';

const Topic = props => {
   console.log(props);
   return (
      <div>
         <h1>TOPIC PAGE</h1>
      </div>
   );
};

const TopicDetail = props => {
   console.log(props);
   return (
      <div>
         <h1>Topic Detail!</h1>
      </div>
   );
};

function App() {
   return (
      <div>
         <Route path="/" component={HomePage} />
         <Route path="/topic" component={Topic} />
         <Route path="/topic/:id" component={TopicDetail} />
      </div>
   );
}

export default App;
