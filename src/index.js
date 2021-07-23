import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { RoomProvider } from './context';


ReactDOM.render(
  <RoomProvider>
    <Router>
      <Switch>
        <App />
      </Switch>
    </Router>
  </RoomProvider >,
  document.getElementById('root')
);

