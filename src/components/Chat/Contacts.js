import React, { useState, useEffect } from "react";

export default function ContactsCon({ contacts, changeChat }) {

    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);

    useEffect(async () => {
        const data = await JSON.parse(
          sessionStorage.getItem("user")
        );
        setCurrentUserName(data.fullname);
       console.log("data coming " , data.fullname)
       console.log("map function" , contacts)
      }, []);

      const changeCurrentChat = (index, contact) => {
        setCurrentSelected(index);
        changeChat(contact);
      };


    return(
        <div className="chat-contacts">
            <div className="brand">
            <h3>Research Tool</h3>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  key={contact._id}
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                 
                  <div className="username">
                    <h3>{contact.fullname}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="current-user">
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </div>
    )
}