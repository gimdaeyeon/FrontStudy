import express from 'express';
import post from './routers/post/post.js';
import comment from './routers/post/comment.js';
import user from './routers/user.js';

const app = express();
app.set('port', 3000);

// 기본 경로명, router
app.use('/post',post);
app.use('/comment',comment);
app.use('/user',user);


app.listen(app.get('port'), ()=>{
  console.log(`${app.get('port')}번 포트에서 실행 중`);
});