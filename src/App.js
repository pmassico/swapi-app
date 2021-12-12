import './App.css';
import React from "react";
import Nav from "./Nav";
import {Outlet} from "react-router-dom";


class App extends React.Component {
    render () {
        return(
            <div className="App">
                <Nav/>
                <Outlet />
            </div>
        );
    }
}
export default App;
