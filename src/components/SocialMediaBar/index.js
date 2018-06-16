import React from "react";
import "./SocialMediaBar.css";

class SocialMediaBar extends React.Component {
  render() {
    return (
      <div className="social-media-bar level title-case">
        <div className="level-left">SHOW US YOUR FOSTERS! SHARE YOUR STORIES AND PICTURES</div>
        <div className="level-right">
          <i className="fa fa-facebook fa-2x" aria-hidden="true" />&nbsp;&nbsp;&nbsp;
          <i className="fa fa-twitter fa-2x" aria-hidden="true" />&nbsp;&nbsp;&nbsp;
          <i className="fa fa-instagram fa-2x" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

export default SocialMediaBar;
