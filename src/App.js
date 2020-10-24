import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./panels/main";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
      <div className="App">
        <main>
            {/*<BrowserRouter>*/}
            {/*    <Switch>*/}
            {/*        <Route exact path='/' component={Home}/>*/}
            {/*        <Route path='/home' component={Home}/>*/}
            {/*    </Switch>*/}
            {/*</BrowserRouter>*/}
            <Home />
        </main>
      </div>
  );
}

export default App;
