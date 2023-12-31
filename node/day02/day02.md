# http 모듈 
http 웹 서버를 생성하는 것과 관련된 모든 기능을 담당

- createServer() : server 객체를 생성
- writeHead() : http res message(응답 메시지) header를 구성
- end() : https res message(응답 메시지) body를 작성
- listen() : 서버를 실행하고 클라이언트를 기다림

## express 모듈
http 모듈만 사용해서 웹 서버를 구성하면 직접 많은 기능을 구현해야 하므로 코드가 복잡하고 지저분해진다.   
그러나 간단한 코드로 웹 서버의 기능을 대부분 혼자서 구현이 가능한 express 모듈이 등장

`npm i express`

## nestJS 모듈
객체지향 개발이 가능, 의존성 부여

## nodemon
서버 코드를 변경할 때 마다 서버를 종료하지 않아도 알아서 서버를 재시작   
`npm i nodemon`   
`sudo npm i -g nodemon`

## 암호화
복호화 (열쇠 암호화를 푸는 것) = 양방향 암호화   
열쇠 = 키값('김대연')

비밀번호 = 단방향 암호화 = 복호화x = 비교만 가능 ex) bcrypt

- 대칭키 (암호화 했던 키와 복호화 했던 키가 같은 경우)
- 비대칭키 (암호화 했던 키와 복호화 했던 키가 다른 경우)

---

### express와 함께 자주 사용되는 미들웨어
express의 핵심은 **미들웨어**

#### middle ware?
HTTP 통신 간, 요청 (req) 그리고 응답(res) 중간에 위치하여 미들웨어라고 부른다.   
중간에서 요청 응답을 조작하여 기능을 추가하기도, 나쁜 요청을 걸러내는 역할도  하고있으며 express의 대부분의 기능이 믿ㄹ웨어로 컨트롤하기 때문에 express의 전부라고 할 수 있음

### 사용법
app.use(미들웨어) : 모든 요청에서 미들웨어 실행   
app.use('/abc', 미들웨어) : /abc로 시작하는 요청에서만 실행   
app.post('/abc', 미들웨어) : /abc로 시작하는 post 메소드의 요청에서만 실행

#### 미들웨어의 종류
1. morgan
2. body-parser
3. static
4. cookie-parser

## 메소드(method) 방식의 종류

- GET : 서버의 자원을 가지고오고자 할 때(조회) 사용, 요청의 본문에 요청 데이터를 넣지 않고 주소를 활용하여 데이터를 전송   
  1. query-string   
      ex) https://www.백엔드주소:3000/goods?goodsId=32&goodname="맛있는 수박"   
      qs => goodsId, goodname
  2. param   
      ex) https://www.백엔드주소:3000/goods/32/맛있는수박   
      
      \*
      사용 이유는, 내가 얻고자 하는 데이터 값을 받아올 때 백엔드에게 해당 데이터를 구분할 수 있는 키 값을 보내야하는데 클릭 된 순간 페이지가 이동되기 때문에 그 값을 유지할 수가 없음 따라서 다음 페이지로 보내고 해당 페이지에서 고유 키 값을 받아와서 백엔드에게 전송

      \*리액트에서는   
      중첩 라우팅 시 부여한 이름으로 param 값을 읽어오고
      
       queyr string의 경우는 qs 라이브러리를 통해 읽을 수 있다.   
      단, 위의 예시 주소에서 goods?goodId=32와 같이 주소에 데이터를 넣어서 페이지 이동을 하더라도 react-router-dom은 /goods로 인식한다.

      \*백엔드에서는   
      app.get("/goods")   
      qs 모듈을 사용해서 query string 값을 읽어올 수 있다.

      app.get('goods/:goodsIdx/:goodsName')   
      console.log(goodsIdx)   
      console.log(goodsName)

- post : 서버에 자원을 새로 등록하고자 할 때 사용(생성), 요청의 본문에 데이터를 넣어서 전송   

```js

  const data ={
    prodName : '맛잇는 참외',
    prodDesc : '참외롭다',

  }

// 프론트
  axios.post('https://www.백엔드주소:3000/goods', data)

// 백엔드
  app.post('/goods', (req,res)=>{
    console.log(req.body.prodName);
  });


```

- PUT : 서버의 데이터을 요청에 들어온 데이터로 통째로 업데이트

- PATCH : 서버의 자원을 요청에 들어온 데이터로 일부만 업데이트

- DELETE : 서버의 자원을 삭제할 때 사용, 본문에 데이터를 넣지 않음

- OPTIONS: 요청을 하기 전에 통신 옵션(헤더) 설정하기 위해 사용

---

## REST, REST API
### REST
자원을 이름으로 구분하여 해당 자원의 정보를 주고 받는 행위   
장점 : 가독성   
ex) '/goods'

### API
데이터와 기능의 집합을 제공, 프로그램 상호간 상호작용   
서로 정보를 교환하도록 하는 것

### REST API
REST 기반으로 서비스 API를 구현한 것   
요즘 대부분의 기업들이 REST API를 채용하고 있으나 Graph QL과 같은 다른 api 방식도 많이 채용하고 있다.


### api 문서
같은 백엔드 개발자끼리와 자신이 만든 api를 공유, 프론트 엔드 개발자는 내가 어떤 주소로 어던 데이터를 보냈을 때 어던 데이터가 응답으로 전달되는지 확인

관련 라이브러리 : swagger, pow....

