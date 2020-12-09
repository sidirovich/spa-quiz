const passport = require('koa-passport');
const LocalStrategy = require('passport-local'); //local Auth Strategy
const JwtStrategy = require('passport-jwt').Strategy; // Auth via JWT
const ExtractJwt = require('passport-jwt').ExtractJwt; // Auth via JWT
const jwt = require('jsonwebtoken'); // auth via JWT for hhtp
const c = require('config');

const userModel = require('../database/schema').userModel;
const JWTsalt = require('../database/config').jwtsecret;

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWTsalt
};

passport.serializeUser(function(user, done) {
  done(null, user._id)
})

passport.deserializeUser(function(id, done) {
  userModel.findById(id, done);
})

passport.use(new JwtStrategy(jwtOptions, function (payload, done) {
    console.log(payload.id);
    userModel.findById(payload.id, (err, user) => {
      if (err) {
        return done(err)
      }
      if (user) {
        done(null, user)
      } else {
        done(null, false)
      }
    });
}));

passport.use(new LocalStrategy({
    username: 'username',
    password: 'password',
    session: false
},
function (username, password, done) {
    userModel.findOne({username, password}, (err, user) => {
        if (err) {
          return done(err);
        }
        if (user) {
          done(null, user)
        } else {
          done(null, false)
        }
    });
}));

async function userLogin(ctx, next) {
  await passport.authenticate('local', function (err, user) {
    if (user == false) {
      ctx.body = '{"answer": "Login failed"}';
    } else {
      const payload = {
        id: user._id,
        username: user.username,
        userlevel: user.userlevel
      };
      const token = jwt.sign(payload, JWTsalt); //JWT is created here
      ctx.body = {token: 'JWT ' + token};
    }
  })(ctx, next);
}

async function userSignin(ctx) {
  userModel.create({
      username: ctx.request.body.username,
      password: ctx.request.body.password,
      email: ctx.request.body.email,
      phone: '',
      balance: 0,
      userlevel: 0,
  }).then(user => {
      if (user) {
          ctx.body = { status: 'sucsses' };
      } else {
          ctx.body = { status: 'error' };
      }
  }).catch(e => {
      ctx.body = { status: e };
  });
}

async function userProfile() {
    console.log('userProfile');
}

async function userBalance() {
    console.log('userBalance');
}

module.exports = {
    userLogin,
    userSignin,
    userProfile,
    userBalance,
};