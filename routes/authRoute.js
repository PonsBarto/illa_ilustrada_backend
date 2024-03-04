const express = require( 'express' );
const { create } = require('../models/userModel');
const { createUser } = require('../controller/userCtrl');
const router = express.Router();

router.post('/register', createUser); 
module.exports =router;