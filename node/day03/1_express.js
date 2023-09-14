// npm i morgan
// npm i express -> express 서버설정

import express from "express";  
import morgan from "morgan";
import path from "path";

const app = express();
app.set('port', 3000);  // 변수 설정

/*
morgan (log)
로그를 찍어줌
모드로는 dev, combined, common, short, tiny
보통 개발용은 dev, 배포용은 combined를 사용
*/
// 미들웨어
app.use(morgan('dev'));

/*
body-parser
express 4.16.0부터 기본 내장
데이터 형식 허용 여부와, req message로  전달받은 body로 데이터의 해석
*/
app.use(express.json()); // json 데이터를 읽은 것을 허용
app.use(express.urlencoded({extended:false}));
//url에 잇는 정보를 express 내에 있는 해석툴로 읽을 것이냐
//extended => false (nodeJS에 내장된 queryString 모듈)
//extended => truy (추가로 설치하여 외부 해석툴 qs로 해석)

/*
static
epxress 탑재, 정적인 파일을 제공
*/
const __dirname = path.resolve();
app.use('/public', express.static(path.join(__dirname,'public')));
// localhost:3000/public/style/sytle.css
// public/style/sytle.css
// 웹서버에 있는 정적인 파일에 접근하기 위해 사용



app.listen(app.get('port'), ()=>{
  console.log(`${app.get('port')}번으로 서버 실행 중`);
});










