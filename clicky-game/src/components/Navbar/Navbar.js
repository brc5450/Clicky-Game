import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar">
        <div className="col-sm">
        <i class="fas fa-square"></i>  Shape Memory
        </div>
        <div className={ props.currentScore === 0 ? "red" : "green"}>
            {props.message}
        </div>
        <div className="col-sm">
            Score: <span className="score">{props.currentScore} </span> 
            | High Score: <span className="highScore">{props.highScore}</span>
        </div>
    </nav>
);

export default Navbar;