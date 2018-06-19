import React from "react";
import "./SocialMediaBar.css";

class SocialMediaBar extends React.Component {
  render() {
    return (
      <div className="social-media-bar level title-case">
        <div className="level-left">SHOW US YOUR FOSTERS! SHARE YOUR STORIES AND PICTURES</div>
        <div className="level-right">
          <a href="http://www.facebook.com/furryfoster" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook fa-2x" aria-hidden="true" />
          </a>&nbsp;&nbsp;&nbsp;
          <a href="http://www.twitter.com/furryfoster" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter fa-2x" aria-hidden="true" />
          </a>&nbsp;&nbsp;&nbsp;
          <a
            href="http://www.instagram.com/furryfosterpets"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fa fa-instagram fa-2x" aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }
}

export default SocialMediaBar;
