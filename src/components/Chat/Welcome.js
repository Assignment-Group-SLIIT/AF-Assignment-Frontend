import React, { useState, useEffect } from "react";

export default function Welcome() {
    const [userName, setUserName] = useState("");
    useEffect(async () => {
      setUserName(
        await JSON.parse(
          sessionStorage.getItem("user")
        ).fullname
      );
    }, []);
    return (
      <div className="chat-welcome">
        <h1>
          Welcome, <span>{userName}!</span>
        </h1>
        <h3>Please select a chat to Start messaging.</h3>
      </div>
    );
  }
