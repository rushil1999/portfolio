import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Paper,
  Divider,
  responsiveFontSizes
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send'
import CloseIcon from '@mui/icons-material/Close';
import { useChatData } from '../../hooks/useChatData';
import { useTheme } from '@emotion/react';

const ChatBot = ({setInitiateVini}) => {
  const {messages, input, setInput, chatResponse} = useChatData()
  let theme = useTheme();
  theme = responsiveFontSizes(theme);

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
          {/* Close button */}
          <IconButton
            onClick={()=> {setInitiateVini(false)}}
            sx={{
              position: 'absolute',
              top: 8,
              left: 8,
              color: '#aaa',
              '&:hover': { color: '#fff' }
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ color: '#aefcef', textAlign: 'center', mb: 1 }}
          >
            Vini
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
            {messages != null && messages.map((msg, i) => (
              <Box
                key={i}
                alignSelf={msg.user_type === 'user' ? 'flex-end' : 'flex-start'}
                sx={{
                  backgroundColor: msg.user_type === 'user' ? '#00d4a020' : '#333',
                  color: msg.message_type != 'error' ? '#fff' : theme.palette.secondary.main,
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  maxWidth: '80%',
                }}
              >
                {msg.message_text}
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
              onKeyPress={(e)=>{ (e.key === 'Enter' || e.keyCode === 13) && chatResponse()}}
              sx={{
                input: { color: '#fff' },
                fieldset: { borderColor: '#555' },
                mr: 1,
              }}
            />
            <IconButton onClick={()=>chatResponse()} color="primary">
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default ChatBot;
