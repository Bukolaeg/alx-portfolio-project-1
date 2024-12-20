import React, { useEffect, useState } from 'react';
import { fetchNotifications } from '../services/notificationService';
import './NotificationsPage.css';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const getNotifications = async () => {
      const data = await fetchNotifications();
      setNotifications(data);
    };

    getNotifications();
  }, []);

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <ul className="notification-list">
        {notifications.map((notification, index) => (
          <li key={index}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPage;
