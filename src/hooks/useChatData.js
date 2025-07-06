import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {VINI_OPENING_MESSAGE, SESSION_KEY, WAIT_MESSAGE, BOT, USER} from '../constants/chatMessage'

export const useChatData = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState('')

  useEffect(() => {
    triggerChatbot()
  }, [])

  const getSessionId = () => {
    const sessionId = sessionStorage.getItem(SESSION_KEY);
    if (sessionId == null) {
      const newSessionId = uuidv4();
      sessionStorage.setItem(SESSION_KEY, newSessionId);
      return newSessionId
    }
    return sessionId
  }


  const chatResponse = async () => {
    const sessionId = getSessionId() 

    if (!sessionId || sessionId.length === 0) {
      return;
    }

    if (!input || (input && input.length === 0)){
      return;
    } 

    setLoading(true)
    setInput('')
    setMessages(prev => [...prev, { user_type: USER, message_text: input }])

    console.log("Session ID found in ChatResponse", sessionId, input)
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${process.env.REACT_APP_BACKEND_AUTHENTICATION_TOKEN}`);

    const raw = JSON.stringify({
        "message_text": input,
        "session_id": sessionId,
        "user_type": "user"
    });

    const url = `${process.env.REACT_APP_BACKEND_URL}/chat/response`

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      };
    const apiResponse = await fetch(url, requestOptions)
    console.log("API Response", apiResponse)
    if (!apiResponse.ok && apiResponse.status === 500) {
      setMessages(prev => [...prev, { user_type: 'bot', message_type: 'error', message_text: "Oops...Something went wrong. Sorry about that. Can you contact Rushil. I am sure he can fix this" }]);
      setLoading(false)
      setLoadingMessage('')
      // throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const response = await apiResponse.json();
      // console.log("From Chat Response 1", response)
      if (response && response.result && response.result && response.result.length > 0) {
        // console.log("From Chat Response 2", response.result[0].messages); // Process the data
        setMessages(response.result[0].messages)
        setLoading(false)
        setLoadingMessage('')
      }
    }
      
  }

  const storeChat = async (sessionId) => {
    setLoading(true)
    setLoadingMessage(WAIT_MESSAGE)
    const initiationMessage = {
      "message_text": VINI_OPENING_MESSAGE,
      "user_type": BOT,
      "session_id": sessionId
  };
    // console.log("Message to store", initiationMessage)
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${process.env.REACT_APP_BACKEND_AUTHENTICATION_TOKEN}`);

    const raw = JSON.stringify(initiationMessage);

    const url = `${process.env.REACT_APP_BACKEND_URL}/chat/`

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      };
    const apiResponse = await fetch(url, requestOptions)
    if (!apiResponse.ok) {
      setMessages(prev => [...prev, { user_type: 'bot', message_type: 'error', message_text: "Oops...Something went wrong. Sorry about that. Can you contact Rushil. I am sure he can fix this" }]);
      setLoading(false)
      setLoadingMessage('')
      console.log('Got response unloading...', loadingMessage, loading )
      // throw new Error(`HTTP error! status: ${apiResponse.status}`);
    } else {
      const response = await apiResponse.json();
      // console.log("From Chat Response 1", response)
      if (response && response.result && response.result) {
        // console.log("From Chat Response 2", response.result[0].messages); // Process the data
        // setMessages(response.result[0].messages)
        setLoading(false)
        setLoadingMessage('')
      }
    }
  }


  const getDataBySessionId = async (sessionId) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${process.env.REACT_APP_BACKEND_AUTHENTICATION_TOKEN}`);

    const url = `${process.env.REACT_APP_BACKEND_URL}/chat/${sessionId}`

    setLoading(true)
    setLoadingMessage(WAIT_MESSAGE)
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      };
    const apiResponse = await fetch(url, requestOptions)
    return apiResponse
  }

  const fetchDataBySessionId = async (sessionId) => {
    const apiResponse = await getDataBySessionId(sessionId)
    if (!apiResponse.ok && apiResponse.status === 500) {
      setMessages(prev => [...prev, { user_type: 'bot', message_type: 'error', message_text: "Oops...Something went wrong. Sorry about that. Can you contact Rushil. I am sure he can fix this" }]);
      setLoading(false)
      setLoadingMessage('')
      // throw new Error(`HTTP error! status: ${response.status}`);
    } else if (!apiResponse.ok && apiResponse.status === 404) {
      await storeChat(sessionId)
    } else if (apiResponse.ok){
      const response = await apiResponse.json();
      if (response && response.result && response.result && response.result.length > 0) {
        // console.log("From Chat Response 2", response.result[0].messages); // Process the data
        setMessages(response.result[0].messages)
        setLoading(false)
      }
    }
  }

  const triggerChatbot = async () => {
    let sessionId = sessionStorage.getItem(SESSION_KEY);
    if (sessionId == null) {
      const newSessionId = uuidv4();
      sessionStorage.setItem(SESSION_KEY, newSessionId);
      await storeChat(newSessionId)
      sessionId = newSessionId
    } else {
      const apiResponse = await getDataBySessionId(sessionId)
      if (!apiResponse.ok && apiResponse.status === 404) {
        console.log("Session ID exists, but has no data in backend", sessionId)
        await storeChat(sessionId)
      }
    }
    await fetchDataBySessionId(sessionId)
  }

  return {messages, input, setInput, chatResponse, loading, loadingMessage}


}
