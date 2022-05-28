import React, { useState, useRef, useEffect } from "react";
import { nanoid } from 'nanoid'
import { recieveMessageRoute, sendMessageRoute } from '../../services/chat';
import ChatInputChat from './ChatInput';
import axios from "axios";

export default function ChatContainer({ currentChat, socket }) {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);

  useEffect(async () => {
    const data = await JSON.parse(
      sessionStorage.getItem("user")
    );
    // const response = await axios.post(recieveMessageRoute, {
    //   from: data.id,
    //   to: currentChat.id,
    // });
    // setMessages(response.data);

    const interval = setInterval(async () => {
      const response = await axios.post(recieveMessageRoute, {
        from: data.id,
        to: currentChat.id,
      });
      setMessages(response.data);
    }, 1000);
    return () => clearInterval(interval);

  }, [currentChat]);

  useEffect(() => {
    const getCurrentChat = async () => {
      if (currentChat) {
        await JSON.parse(
          sessionStorage.getItem("user")
        ).id;
      }
    };
    getCurrentChat();
  }, [currentChat]);

  const handleSendMsg = async (msg) => {
    const data = await JSON.parse(
      sessionStorage.getItem("user")
    );
    socket.current.emit("send-msg", {
      to: currentChat.id,
      from: data.id,
      msg,
    });
    await axios.post(sendMessageRoute, {
      from: data.id,
      to: currentChat.id,
      message: msg,
    });

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  // useEffect(() => {
  //   scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  return (
    <div className='chat-chatContainer'>
      <div className="chat-header">
        <div className="chat-user-details">
          <div className="chat-username">
            <h5>{currentChat.fullname}</h5>
          </div>
        </div>
      </div>
      <div className="chat-messages">
        {messages.map((message, index) => {
          return (
            <div ref={scrollRef} key={index}>
              <div
                className={`message ${message.fromSelf ? "sended" : "recieved"
                  }`}
              >
                <div className="content">
                  <p>{message.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ChatInputChat handleSendMsg={handleSendMsg} />
    </div>
  )
}

