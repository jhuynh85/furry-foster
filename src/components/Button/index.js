import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = props => {
  return (
    <div className={props.className}>
      <Link to={props.link} className="button is-warning">
        <strong>{props.text}</strong>
      </Link>
    </div>
  );
};

export default Button;
