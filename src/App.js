import React from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => (
    <div className="App">
        <header className="App-header">
            <BrowserRouter>
                <Route exact path="/" component={Login}/>
                <Route exact path="/dashboard" component={Dashboard}/>
            </BrowserRouter>
        </header>
    </div>
);

export default App;