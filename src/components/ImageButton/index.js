import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./ImageButton.css";

const ImageButton = props => {
  return (
    <div className={props.className}>
      <Link to={props.link}>
        <img className="image imagebutton-image" src={props.image} alt="" />
      </Link>
      <strong>{props.text}</strong>
      <br />
      <Button link={props.infoLink} text={props.infoText} />
    </div>
  );
};

export default ImageButton;
