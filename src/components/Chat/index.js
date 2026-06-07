import React from 'react';
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Paper,
  Divider,
  CircularProgress,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import { useChatData } from '../../hooks/useChatData';
import { USER } from '../../constants/chatMessage';

const ChatBot = ({ setInitiateVini }) => {
  const { messages, input, setInput, chatResponse, loading, loadingMessage } = useChatData();

  return (
    <Box sx={{ position: 'relative', height: '100vh' }}>
      <Box
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 9999,
        }}
      >
        <Paper
          elevation={8}
          sx={{
            height: '80vh',
            width: { xs: 'calc(100vw - 48px)', sm: '480px' },
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 3,
            p: 2,
            overflow: 'hidden',
          }}
        >
          <IconButton
            onClick={() => setInitiateVini(false)}
            sx={{
              position: 'absolute',
              top: 8,
              left: 8,
              color: 'text.secondary',
              '&:hover': { color: 'text.primary' },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>

          <Typography
            variant="h6"
            sx={{ color: 'primary.light', textAlign: 'center', mb: 0.5, fontWeight: 600 }}
          >
            Vini
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: 'text.secondary', textAlign: 'center', display: 'block', mb: 1 }}
          >
            AI Personal Assistant
          </Typography>

          <Divider sx={{ mb: 2 }} />

          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              pb: 1,
              '&::-webkit-scrollbar': { width: 4 },
              '&::-webkit-scrollbar-thumb': { bgcolor: 'divider', borderRadius: 2 },
            }}
          >
            {messages?.map((msg, i) => (
              <Box
                key={i}
                alignSelf={msg.user_type === USER ? 'flex-end' : 'flex-start'}
                sx={{
                  bgcolor:
                    msg.user_type === USER
                      ? 'rgba(45, 212, 191, 0.1)'
                      : 'rgba(255, 255, 255, 0.04)',
                  color: msg.message_type !== 'error' ? 'text.primary' : 'error.main',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  maxWidth: '80%',
                  fontSize: '0.9rem',
                  lineHeight: 1.65,
                  border: '1px solid',
                  borderColor:
                    msg.user_type === USER
                      ? 'rgba(45, 212, 191, 0.18)'
                      : 'rgba(255, 255, 255, 0.05)',
                }}
              >
                {msg.message_text}
              </Box>
            ))}
            {loading && (
              <React.Fragment>
                {loadingMessage?.length > 0 && (
                  <Typography
                    variant="caption"
                    sx={{ color: 'text.secondary', textAlign: 'center' }}
                  >
                    {loadingMessage}
                  </Typography>
                )}
                <Box display="flex" justifyContent="center" mt={1}>
                  <CircularProgress size={18} sx={{ color: 'primary.main' }} />
                </Box>
              </React.Fragment>
            )}
          </Box>

          <Divider sx={{ mt: 1 }} />

          <Box sx={{ display: 'flex', mt: 1, gap: 1 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && chatResponse()}
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'divider' },
                  '&:hover fieldset': { borderColor: 'rgba(45, 212, 191, 0.35)' },
                  '&.Mui-focused fieldset': { borderColor: 'primary.main' },
                },
              }}
            />
            <IconButton onClick={chatResponse} sx={{ color: 'primary.main' }}>
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default ChatBot;
