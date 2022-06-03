import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { allUsersRoute, host } from "../../services/chat";
import ChatContainer from "../../components/Chat/ChatContainer";
import ContactsCon from "../../components/Chat/Contacts";
import Welcome from "../../components/Chat/Welcome";

export default function Chat() {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(async () => {
    if (!sessionStorage.getItem("user")) {
      navigate("/login");
    } else {
      setCurrentUser(
        await JSON.parse(
          sessionStorage.getItem("user")
        )
      );
    }
  }, [])

  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser.id);
      console.log("id", currentUser.id)
    }
  }, [currentUser]);

  useEffect(async () => {
    if (currentUser) {
      console.log("current User", currentUser)
      const data = await axios.get(`${allUsersRoute}/${currentUser.id}/${currentUser.groupId}`);
      setContacts(data.data);
      console.log('datadata', data)
    }
  }, [currentUser]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return (

    <div className="chat-outline">
      <div className="chat-container">
        <ContactsCon contacts={contacts} changeChat={handleChatChange} />
        {currentChat === undefined ? (
          <Welcome />
        ) : (
          <ChatContainer currentChat={currentChat} socket={socket} />
        )}
      </div>
    </div>

  )
}