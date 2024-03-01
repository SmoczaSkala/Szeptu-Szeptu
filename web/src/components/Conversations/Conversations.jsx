import React, { useState, useEffect } from "react";
import "./../../scss/Conversations.scss";

const Conversations = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        if (Array.isArray(data.users)) {
          setUsers(data.users);
        } else {
          console.error("Received data is not in the expected format:", data);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="conversations">
      <div className="conversations-title-input">
        <h1>Konwersacje</h1>
        <input type="text" placeholder="Wyszukaj konwersacje" />
      </div>
      <div className="conversation-list">
        {users.map((user) => (
          <div key={user._id} className="conversation">
            <div className="conversation-info">
              <h3>{user.username}</h3>
              <h2>{user.email}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conversations;
