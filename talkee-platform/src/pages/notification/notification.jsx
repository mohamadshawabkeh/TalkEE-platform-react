import React, { useState } from "react";
import './notification.css';
import notification from "../../assets/icons/notification.svg"
import triangleTop from "../../assets/icons/triangleTop.svg"

const notifications = [
    { id: 1, message: "User123 liked your post", time: "2m ago" },
    { id: 2, message: "User456 followed you", time: "10m ago" },
    { id: 3, message: "User789 commented on your photo", time: "1h ago" },
];

const Notification = () => {
    const [clickedNotification,setclickedNotification] = useState(false)

    let toggleNotification = () => setclickedNotification(!clickedNotification);

    return (
        <>
          <div className="notification" onClick={toggleNotification}>
                    <div className="notificationWrapper">
                     <div className="notificationCircle">1</div>
                        <img src={notification} alt="notification Icon" className="navIcon" />
                        { clickedNotification &&  <div className="notificationContainer" >
        <img src={triangleTop} alt="triangleTop icon" className="triangleTop"/>
            <h2 className="notificationTitle">Notifications</h2>
            <div className="notificationList">
                {notifications.map(notification => (
                    <div key={notification.id} className="notificationItem">
                        <div className="notificationMessage">
                            {notification.message}
                        </div>
                        <span className="notificationTime">{notification.time}</span>
                    </div>
                ))}
            </div>
        </div>}
                    </div>
                    <span className="navTitle"></span>
      
                </div>
        </>
    );
};

export default Notification;
