## req, res

### req

- *req.body : 요청의 본문
- *req.cookies : 미들웨어가 만든 쿠키를 해석
- req.id : 요청의 ip 주소
- *req.params : url에 담긴 매개변수에 대한 정보
- *req.query : url에 담긴 쿼리스트링에 대한 정보
- req.signedCookies : 인증된 쿠키들이 담긴 객체
- *req.get(헤더이름) : 헤더의 값을 가져올 때 사용

### res
- res.app
- res.cookie(키, 값, 옵션) : 쿠키설정, 프론트 엔트 설정에 따라 백엔드에 설정한 쿠키 값을 공유
- res.clearCookie(키, 값, 옵션) : 쿠키 삭제
- res.write : 보낼 데이터를 작성만
- res.end : 데이터 없이 응답을 보냄
- *res.json : json 형식으로 응답
- res.redirect : 이동할 주소와 함께 응답을 보냄
- res.render(뷰, 데이터) : 데이터와 함께 다른 템블릿 엔진을 응답할 때     
  ( ex) jade, djs)
- res.send : 데이터와 함께 응답을 보냄
- res.sendFile(경로) : 경로에 위치한 파일을 보냄
- *res.set(헤더, 값) : 응답의 헤더값을 설정
- res.status : 응답의 http response status code 상태를 지정







