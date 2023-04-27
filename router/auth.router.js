const express = require('express');
const controller = require('../controller/auth.controller.js')
const authRouter = express.Router();
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
require('dotenv').config();


authRouter.post('/login', controller.login)
authRouter.post('/register', controller.register)

// passport.use(new GitHubStrategy({
//     clientID: process.env.GITHUB_CLIENT_ID,
//     clientSecret: process.env.GITHUB_CLIENT_SECRET,
//     callbackURL: "https://fluffy-raindrop-2317a8.netlify.app/login.html"
//   },
//   function(accessToken, refreshToken, profile, done) {
//     User.findOrCreate({ githubId: profile.id }, function (err, user) {
//       return done(err, user);
//     });
//   }
// ));

// app.get('/auth/github',
//   passport.authenticate('github', { scope: [ 'user:email' ] }));

// app.get('/auth/github/callback', 
//   passport.authenticate('github', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });

module.exports = authRouter;