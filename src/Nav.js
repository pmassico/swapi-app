import './App.css';
import React from "react";
import {Link} from "react-router-dom";

class Nav extends React.Component {

    componentDidMount() {
    }

    isActive(e){
        // stops page from redirecting --
        // re-renders are handled by the state
        // unneeded with reactrouter
        //e.preventDefault();

        // remove "current" class from nav
        let li = document.getElementsByClassName("nav-item");
        for (let i = 0; i < li.length; i++) {
            let a = li[i].children[0];
            //console.log(a);
            if (a.classList.contains("active")) {
                a.classList.remove("active");
            }
        }
        //console.log(li);
        // add current class to target
        e.target.classList.add("active");
        //console.log(e.target);
    }

    render(){
        return(
            <header className="header-nav">
                <Link to="/"
                      onClick={this.isActive}>
                    <img src="logo.png" id="logo" alt="star wars logo"/>
                </Link>
                <ul className="nav nav-pills" id="nav">
                    <li className="nav-item">
                        <Link className="nav-link"
                           aria-current="page"
                           onClick={this.isActive}
                           to="/people">People</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                           onClick={this.isActive}
                           to="/planets">Planets</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link"
                           onClick={this.isActive}
                           to="/starships">Starships</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled"
                           onClick={this.isActive}
                           to="/search">Search</Link>
                    </li>
                </ul>
            </header>

        );
    }


}

export default Nav;
