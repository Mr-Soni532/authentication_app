const express = require('express');

const userController = require('../controller/user.controller.js')
const userRouter = express.Router();

userRouter.get('/fetchDetails', userController.fetchDetail)
userRouter.post('/updateDetails', userController.updateDetails)

module.exports = userRouter;
