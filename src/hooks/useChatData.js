import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useChatData = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    triggerChatbot()
  }, [])

  const getSessionId = () => {
    const sessionId = sessionStorage.getItem('chatbot-session');
    if (sessionId == null) {
      const newSessionId = uuidv4();
      sessionStorage.setItem('chatbot-session', newSessionId);
      return newSessionId
    }
    return sessionId
  }


  const chatResponse = async () => {
    const sessionId = getSessionId() 

    if (!sessionId || sessionId.length == 0) {
      return;
    }

    if (!input || (input && input.length == 0)){
      return;
    } 
    setInput('')
    setMessages(prev => [...prev, { user_type: 'bot', message_text: input }])

    console.log("Session ID found in ChatResponse", sessionId, input)
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${process.env.REACT_APP_BACKEND_AUTHENTICATION_TOKEN}`);

    const raw = JSON.stringify({
        "message_text": input,
        "session_id": sessionId,
        "user_type": "user"
    });

    const url = `${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/chat/response`

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      };
    const apiResponse = await fetch(url, requestOptions)
    if (!apiResponse.ok) {
      setMessages(prev => [...prev, { user_type: 'bot', message_type: 'error', message_text: "Oops...Something went wrong. Sorry about that. Can you contact Rushil. I am sure he can fix this" }]);
      // throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const response = await apiResponse.json();
      console.log("From Chat Response 1", response)
      if (response && response.result && response.result && response.result.length > 0) {
        console.log("From Chat Response 2", response.result[0].messages); // Process the data
        setMessages(response.result[0].messages)
      }
    }
      
  }

  const storeChat = async (sessionId) => {
    const initiationMessage = {
      "message_text": "Hello, I am Vini, Rushil's personal Chatbot. I'd be happy to answer any questions you have about his professional life. What can I help you with today",
      "user_type": "bot",
      "session_id": sessionId
  };
    console.log("Message to store", initiationMessage)
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${process.env.REACT_APP_BACKEND_AUTHENTICATION_TOKEN}`);

    const raw = JSON.stringify(initiationMessage);

    const url = `${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/chat/`

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      };
    const apiResponse = await fetch(url, requestOptions)
    if (!apiResponse.ok) {
      setMessages(prev => [...prev, { user_type: 'bot', message_type: 'error', message_text: "Oops...Something went wrong. Sorry about that. Can you contact Rushil. I am sure he can fix this" }]);

      // throw new Error(`HTTP error! status: ${apiResponse.status}`);
    }
  }

  const fetchDataBySessionId = async (sessionId) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${process.env.REACT_APP_BACKEND_AUTHENTICATION_TOKEN}`);

    const url = `${process.env.REACT_APP_BACKEND_URL}:${process.env.REACT_APP_BACKEND_PORT}/chat/${sessionId}`

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      };
    const apiResponse = await fetch(url, requestOptions)
    if (!apiResponse.ok) {
      setMessages(prev => [...prev, { user_type: 'bot', message_type: 'error', message_text: "Oops...Something went wrong. Sorry about that. Can you contact Rushil. I am sure he can fix this" }]);
      // throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const response = await apiResponse.json();
      if (response && response.result && response.result && response.result.length > 0) {
        console.log("From Chat Response 2", response.result[0].messages); // Process the data
        setMessages(response.result[0].messages)
      }
    }
  }

  const triggerChatbot = async () => {
    let sessionId = sessionStorage.getItem('chatbot-session');
    if (sessionId == null) {
      const newSessionId = uuidv4();
      sessionStorage.setItem('chatbot-session', newSessionId);
      await storeChat(newSessionId)
      sessionId = newSessionId
    }
    fetchDataBySessionId(sessionId)
  }

  return {messages, input, setInput, chatResponse}


}
