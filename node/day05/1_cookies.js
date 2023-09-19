import express from 'express';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const app = express();

app.set('port',3000);
app.use(cookieParser('secret'));

/*기본 쿠키설정 */
//강의시간 02:09:23
app.post('/setcookie', (req,res,next)=>{
    try {
        res.cookie(
          'token',
        {token :  'token',expired : 5*60000},
        {
          // signed: true, // 암호화된 쿠키, cookieParser()안에 암호화 키 등록
          // secure: https에서만 사용이 가능
          // httpOnly: 웹 서버를 통해서만 사용이 가능
          maxAge:5*60000,
        });
        res.send({message: 'success'});
      } catch (error) {
        console.log(error);
        next(error);
      }
    });

app.get('/showcookie', (req,res)=>{
  // res.send(req.signedCookies.token); //signed : true의 경우
  res.send(req.cookies.token); //signed : true의 경우
});

app.post('/clearcookie', (req,res)=>{
  res.clearCookie('token');
  res.send({message: 'success'});
});


app.listen(app.get('port'), (req,res)=>{
  console.log(`${app.get('port')}번으로 서버 실행중`);
});






