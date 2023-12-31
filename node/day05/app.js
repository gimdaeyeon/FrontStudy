import express from "express";
import db from "./models/index.js";
import user from './routes/user.js';
import post from './routes/post.js';
import passport from "passport";
import session from "express-session";
import passportConfig from './passport/index.js';

const app = express();
app.set("port", 3000);

db.sequelize
  .sync()
  .then(() => {
    console.log("db연결 성공");
  })
  .catch((err) => console.log(err));


passportConfig();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(
  session({
      secret: 'node-secret',
      resave: false,
      saveUninitialized: false,  
      cookie : {
        httpOnly: true,
        maxAge: 5*60000,
      }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/user',user);
app.use('/post',post);

app.listen(app.get("port"), () => {
  console.log(`${app.get("port")}번 서버 실행 중`);
});
