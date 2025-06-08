import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Paper,
  Divider,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send'

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi there! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { type: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    // Simulate a bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: 'bot', text: "I'm just a demo bot. 🤖" },
      ]);
    }, 500);
  };

  return (
    <Box sx={{ position: 'relative', height: '100vh' }}>
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 9999, // make sure it stays on top
        }}
      >
        <Paper
          elevation={4}
          sx={{
            height: '80vh',
            maxWidth: 500,
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#1e1e1e',
            borderRadius: 2,
            p: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: '#00d4a0', textAlign: 'center', mb: 1 }}
          >
            ChatBot
          </Typography>

          <Divider sx={{ background: '#444', mb: 2 }} />

          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              pb: 1,
            }}
          >
            {messages.map((msg, i) => (
              <Box
                key={i}
                alignSelf={msg.type === 'user' ? 'flex-end' : 'flex-start'}
                sx={{
                  backgroundColor: msg.type === 'user' ? '#00d4a020' : '#333',
                  color: '#fff',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  maxWidth: '80%',
                }}
              >
                {msg.text}
              </Box>
            ))}
          </Box>

          <Divider sx={{ background: '#444', mt: 1 }} />

          <Box sx={{ display: 'flex', mt: 1 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              sx={{
                input: { color: '#fff' },
                fieldset: { borderColor: '#555' },
                mr: 1,
              }}
            />
            <IconButton onClick={handleSend} color="primary">
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default ChatBot;
