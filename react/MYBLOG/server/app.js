const express = require('express');
const cors = require('cors');
const session = require('express');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv= require('dotenv');

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');
const passportConfig = require('./passport');

dotenv.config();
const app = express();
db.sequelize
  .sync()
  .then(() => {
    console.log("db연결 성공");
  })
  .catch((err) => console.log(err));
passportConfig();

// cors error
// 3030, 3000 --->3030 에러

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


app.listen(app.get("port"), () => {
  console.log(`${app.get("port")}번 서버 실행 중`);
});




