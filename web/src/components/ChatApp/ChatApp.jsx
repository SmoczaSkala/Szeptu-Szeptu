import React from "react";
import AppHeader from "../AppHeader/AppHeader";
import MessageInput from "../MessageInput/MessageInput";

const ChatApp = () => {
    return  (
        <div  className="chat-app">
            <AppHeader/>
                {/* komponent do wyświetlania */}
                <div className="message-list">

                </div>
                <MessageInput/>
        </div>
    )
}

export default ChatApp