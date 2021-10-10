import './App.css';
import React from 'react';
import Homepage from './pages/homepage.component';
import { Route, Switch } from 'react-router';

const HatsPage = (props) => {
  console.log(props, 'props');
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
