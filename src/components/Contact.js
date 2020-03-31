import React from 'react';
import PropTypes from 'prop-types';
import './chat.css';

function Contact(props) {
  return (
  <div className="Contact">   
    <img src={props.avatar} className="avatar" alt="pict" />
    <div>
      <div className="name">{props.name}</div>    
      <div className="status"> 
        {props.online ? <div className="status-online"></div> : <div className="status-offline"></div>}
        <div className="status-text">{props.online ? "Online" : "Offline"}</div> 
      </div>
    </div>
  </div> 
  );
}

Contact.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
};

export default Contact;
