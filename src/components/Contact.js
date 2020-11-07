import React from 'react';
import './Contact.css';

function Contact(){

  const user = {
    name : "Gabe Black",
    avatar : "https://randomuser.me/api/portraits/men/76.jpg",
    status : true
  }
  return(
    <div className="Contact">
      <img className="avatar" src={user.avatar} alt={"Avatar de " + user.name} />
      <div>
        <p className="name">{user.name}</p>
        <div className="status">
          <span className={(user.status ? "status-online":"status-offline")}></span>
          <p className="status-text ">{user.status ? "Online":"Offline"}</p>
        </div>
      </div>

    </div>
  );
}

export default Contact;