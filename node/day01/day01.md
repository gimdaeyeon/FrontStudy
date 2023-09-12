# nodeJS?
NodeJs는 Chrome V8 JavaScript 엔진으로 빌드 된 JS  런타임(실행 환경)

nodeJs = 백엔드 ? -> 대중적으로는 그렇게 쓰이고 있다.   
그러나 nodeJS가 백엔드라는 말은 아니다.

ex) express, nestJS, http, fs....

=> nestJS ( 함수형 => oop -> 객체지향형태 (spring) )   
=> nodeJS ( express )

백과 프론트를 같은 언어를 사용할 수 있음   
웹서버(Apache, zeus, nginx)와 WAS (tomcat..)같은 소프트웨어가 필요 없이 웹 서버 역할을 대신 하는 내장 라이브러리가 존재

실제로 서비스를 할 때는 결국에는 웹서버를 띄워야한다

npm init
=> package.json을 만들어주는 역할

#### 실행
`node 파일명`

---

## fs, http
express나 백엔드 서버를 만들기위해 지원하는 가장 기본적인 모듈

### fs모듈
  파일 처리와 관련된 모듈   
  nodejs http와 함께 가장 기초적인 모듈

readFile() : 파일을 비동기적으로 읽음   
readFileSync() : 파일을 동기적으로 읽음   

writeFile() : 파일을 비동기적으로 씀   
writeFileSync() : 파일을 동기적으로 씀   

### 예외처리

```js

// 비동기 :
  .then("성공")
  .catch('실패');

// -----------
  (err)=>{
    if(err){
      //실패
    }else{
      //성공
    }
  }

// 동기 :
try{
  // 예외가 발생할 수 있는 문장
}catch(e: 결과값){
  //예외가 발생했을 경우 수행할 문장
}

```



