import express from 'express';
import db from './models/index.js';


const app = express();
app.set('port',3000);


app.listen(app.get('port'),()=>{
    console.log(`${app.get('port')}번 서버 실행 중`);
})









