// import React, { useState } from 'react';
// import {
//   Modal,
//   Box,
//   Button,
//   Checkbox,
//   Divider,
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   TextField,
//   Typography,
//   Link,
 
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';


// const ModalBox = styled(Box)(({ theme }) => ({
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 450,
//   backgroundColor: 'white',
//   borderRadius: 16,
//   padding: theme.spacing(4),
//   boxShadow: 24,
//   display: 'flex',
//   flexDirection: 'column',
//   gap: theme.spacing(2),
// }));

// const StyledTextField = styled(TextField)({
//   marginBottom: '16px',
//   '& .MuiOutlinedInput-root': {
//     borderRadius: '10px',
//   },
//   '& .MuiInputLabel-root': {
//     fontSize: '1rem',
//   },
// });

// export default function SignUp({ onClose, onSwitch }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validateInputs = () => {
//     let tempErrors = {};
//     if (!email.match(/\S+@\S+\.\S+/)) tempErrors.email = 'Invalid email';
//     if (password.length < 6) tempErrors.password = 'At least 6 characters';
//     if (name.trim() === '') tempErrors.name = 'Name is required';
//     setErrors(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!validateInputs()) return;

//     try {
     
//       navigate('/');
//       onClose();
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   return (
//       <Modal open={open} onClose={onClose}>
//       <ModalBox>
//         <Typography variant="h5" gutterBottom>
//           Sign Up
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit}>
//           <FormControl fullWidth>
//             <FormLabel>Full Name</FormLabel>
//             <StyledTextField
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               error={!!errors.name}
//               helperText={errors.name}
//             />
//           </FormControl>
//           <FormControl fullWidth>
//             <FormLabel>Email</FormLabel>
//             <StyledTextField
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               error={!!errors.email}
//               helperText={errors.email}
//             />
//           </FormControl>
//           <FormControl fullWidth>
//             <FormLabel>Password</FormLabel>
//             <StyledTextField
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               error={!!errors.password}
//               helperText={errors.password}
//             />
//           </FormControl>
//           <FormControlLabel
//             control={<Checkbox />}
//             label="I want to receive updates via email."
//           />
//           <Button type="submit" fullWidth variant="contained" sx={{ mt: 1 }}>
//             Sign Up
//           </Button>
//         </Box>
//         <Divider sx={{ my: 2 }}>or</Divider>
//         <Button fullWidth variant="outlined" sx={{ mb: 1 }}>
//           Sign up with Google
//         </Button>
//         <Button fullWidth variant="outlined" sx={{ mb: 1 }}>
//           Sign up with Facebook
//         </Button>
//         <Typography variant="body2" align="center">
//           Already have an account?{' '}
//           <Link component="button" onClick={onSwitch}>
//             Sign in
//           </Link>
//         </Typography>
//          <Button
//                   onClick={onClose}
//                   sx={{
//                       position: 'absolute',
//                       top: 12,
//                       right: 16,
//                       fontSize: '1.2rem',
//                       color: 'gray'
//                     }}
//                     >
//                   ✖
//                 </Button>
//       </ModalBox>
//     </Modal>
//   );
// }
import React, { useState } from 'react';
import {
  Modal,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  Typography,
  Link,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ModalBox = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 450,
  backgroundColor: 'white',
  borderRadius: 16,
  padding: theme.spacing(4),
  boxShadow: theme.shadows[5],
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
  },
  '& .MuiInputLabel-root': {
    fontSize: '1rem',
  },
});

export default function SignUp({ open, onClose, onSwitch }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateInputs = () => {
    let tempErrors = {};
    if (!email.match(/\S+@\S+\.\S+/)) tempErrors.email = 'Invalid email';
    if (password.length < 6) tempErrors.password = 'At least 6 characters';
    if (name.trim() === '') tempErrors.name = 'Name is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateInputs()) return;

    try {
      navigate('/');
      onClose();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalBox
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Button
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 12,
            right: 16,
            fontSize: '1.5rem',
            color: 'gray',
            minWidth: 'auto',
            padding: 0,
          }}
        >
          ✖
        </Button>

        <Typography variant="h5" align="center" gutterBottom>
          Create an Account
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <FormLabel>Full Name</FormLabel>
            <StyledTextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={!!errors.name}
              helperText={errors.name}
              placeholder="John Doe"
            />
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <FormLabel>Email</FormLabel>
            <StyledTextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              placeholder="email@example.com"
            />
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <FormLabel>Password</FormLabel>
            <StyledTextField
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
              placeholder="••••••••"
            />
          </FormControl>

          <FormControlLabel
            control={<Checkbox />}
            label="I want to receive updates via email."
            sx={{ mb: 2 }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{
              textTransform: 'none',
              borderRadius: '10px',
              fontWeight: 'bold',
              fontSize: '1rem',
              mt: 1,
            }}
          >
            Sign Up
          </Button>
        </Box>

        <Divider sx={{ my: 2 }}>or</Divider>

        <Button
          fullWidth
          variant="outlined"
          sx={{
            mb: 1,
            borderRadius: '10px',
            textTransform: 'none',
            fontWeight: '500',
          }}
        >
          Sign up with Google
        </Button>

        <Button
          fullWidth
          variant="outlined"
          sx={{
            mb: 1,
            borderRadius: '10px',
            textTransform: 'none',
            fontWeight: '500',
          }}
        >
          Sign up with Facebook
        </Button>

        <Typography variant="body2" align="center">
          Already have an account?{' '}
          <Link component="button" onClick={onSwitch}>
            Sign in
          </Link>
        </Typography>
      </ModalBox>
    </Modal>
  );
}
