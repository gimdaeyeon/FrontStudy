import  http  from 'http';

const server = http.createServer((request, response) => {
  response.writeHead(200, { "content-type": "text/html" });
  response.end(
    //html 코드  ....
    `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>http</title>
</head>
<body>
  <h1>모듈 테스트</h1>
</body>
</html>
  `
  );
});

server.listen(3000, () => {
  console.log("3000번 포트로 서버 실행중");
});
