import express from 'express';
import { signUpUser, signInUser, authenticateToken,getUser,getAllUsers, deleteUser } from '../controllers/UserController.js';

const router = express.Router();


router.post('/signup', signUpUser);


router.post('/signin', signInUser);
router.get('/all-users', getAllUsers);
router.get('/user/:id' , getUser);
router.delete('/all-users/:id' , deleteUser);
router.get('/protected-route', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

export default router;