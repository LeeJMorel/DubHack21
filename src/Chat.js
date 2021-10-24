import React from "react"
import { MainContainer, ChatContainer, MessageList, Message, MessageInput } from '@chatscope/chat-ui-kit-react';
import "./Chat.scss"

export const Chat = (props) => {
    const {} = props;
    return (
        <MainContainer>
            <ChatContainer>       
            <MessageList>
                <Message model={{
                        message: "Hello my friend",
                        sentTime: "just now",
                        sender: "Joe"
                        }} />
                </MessageList>
            <MessageInput placeholder="Type message here" />        
            </ChatContainer>
        </MainContainer>
    )
}

export default Chat;