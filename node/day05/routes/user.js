import express from 'express';
import UserService from '../service/user.js';
import {isNotLoggedin} from '../middleware/auth.js';

const router = express.Router();

router.post('/signup',isNotLoggedin,UserService.signUp);
router.post('/login',isNotLoggedin, UserService.login);


export default router;
