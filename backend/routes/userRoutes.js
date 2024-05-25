import express, { Router } from "express";
import { authUser, registerUser, logoutUser, getUserProfile, updateProfile } from "../controllers/userControllers.js";
const router = express.Router();


router.post('/',registerUser);
router.post('/auth',authUser);
router.post('/logoutUser', logoutUser);

router.route('/profile')
    .get(getUserProfile)
    .put(updateProfile);

export default router;

