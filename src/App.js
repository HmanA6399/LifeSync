import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import SignUp from "./pages/SignUp"

function App() {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/signup" exact>
                    <SignUp />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
