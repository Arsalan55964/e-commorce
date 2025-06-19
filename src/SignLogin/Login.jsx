// LoginModal.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { auth, db } from '../FirebaseConfig';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { doc, getDoc } from 'firebase/firestore';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '500px',
  maxWidth: '800px',
  padding: theme.spacing(4),
  gap: theme.spacing(3),
  borderRadius: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(12px)',
  boxShadow: '0 10px 50px rgba(0,0,0,0.3)',
}));

const Overlay = styled('div')({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0,0,0,0.6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
});

export default function Login({ onClose, onSwitch }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Example logic (commented until Firebase is used)
    /*
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        localStorage.setItem("uid", userCredential.user.uid);
        const getData = await getDoc(doc(db, "users", userCredential.user.uid));
        localStorage.setItem("userData", JSON.stringify(getData.data()));
        toast.success('🎉 Great to see you again! You’re now logged in.');
        navigate('/dashboard/');
        onClose(); // close modal after success
      })
      .catch((error) => alert(error.message));
    */
    
    toast.success('Login successful (mock)');
    onClose();
  };

  return (
    <Overlay>
      <CssBaseline enableColorScheme />
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card variant="outlined">
          <Typography variant="h4" gutterBottom>
            Log In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FormControl fullWidth>
              <FormLabel>Email</FormLabel>
              <TextField 
                id="email" 
                type="email" 
                name="email" 
                placeholder="your@email.com" 
                required 
                variant="outlined" 
                onChange={(e) => setEmail(e.target.value)}
                sx={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
            </FormControl>
            <FormControl fullWidth>
              <FormLabel>Password</FormLabel>
              <TextField 
                id="password" 
                type="password" 
                name="password" 
                placeholder="••••••" 
                required 
                variant="outlined" 
                onChange={(e) => setPassword(e.target.value)}
                sx={{ backgroundColor: 'white', borderRadius: '8px' }}
              />
            </FormControl>
            <FormControlLabel 
              control={<Checkbox color="primary" />} 
              label="Remember me" 
              sx={{ alignSelf: 'flex-start' }} 
            />
            <Button 
              type="submit" 
              fullWidth 
              variant="contained" 
              sx={{ fontSize: '1rem', fontWeight: 'bold', padding: '10px', borderRadius: '8px' }}
            >
              Sign in
            </Button>
            <Link component="button" variant="body2" sx={{ alignSelf: 'center' }}>
              Forgot your password?
            </Link>
          </Box>
          <Divider sx={{ width: '100%', my: 2 }}>or</Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
            <Button fullWidth variant="outlined" sx={{ borderRadius: '8px' }}>
              Sign in with Google
            </Button>
            <Button fullWidth variant="outlined" sx={{ borderRadius: '8px' }}>
              Sign in with Facebook
            </Button>
            <Typography align="center">
              Don't have an account?{' '}
              <Link  component="button" onClick={onSwitch} variant="body2">
                Sign up
              </Link>
            </Typography>
          </Box>
          <Button
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: 12,
              right: 16,
              fontSize: '1.2rem',
              color: 'gray'
            }}
          >
            ✖
          </Button>
        </Card>
      </motion.div>
    </Overlay>
  );
}
