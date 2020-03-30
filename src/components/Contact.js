import React from 'react';
import './chat.css';

const name = 'Tracey Kim';
const avatar = 'https://randomuser.me/api/portraits/women/90.jpg';
const online = true;

function Contact() {
  return (
  <div className="Contact">   
    <img src={avatar} className="avatar"/>
    <div>
      <div className="name">{name}</div>    
      <div className="status"> 
        {online ? <div className="status-online"></div> : <div className="status-offline"></div>}
        <div className="status-text">{online ? "Online" : "Offline"}</div> 
      </div>
    </div>
  </div> 
  );
}

export default Contact;
