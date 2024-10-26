import express from 'express';
import { signUpUser, signInUser, resetPassword, updateName, updateEmail, updatePassword, deleteUser, getUser } from '../controllers/UserController.js';

const router = express.Router();

router.post('/signup', signUpUser);
router.post('/signin', signInUser);
router.post('/reset-password', resetPassword);
router.put('/update-name/:id', updateName);
router.put('/update-email/:id', updateEmail);
router.put('/update-password/:id', updatePassword);
router.delete('/delete-user/:id', deleteUser);
router.get('/user/:id', getUser);
export default router;