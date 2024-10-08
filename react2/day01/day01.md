# React.js ? 
복잡한 사용자 인터페이스(UI)를 쉽게 구축하기 위해 페이스북팀에서 제작한 자바스크립트 라이브러리
## ReactJS의 구동원리와 핵심 컨셉
### Compnents
- 한 가지 이상의 기능을 수행하는 UI단위로 분리한 페이지의 조각
- 재사용이 용이하고 유지 보수에 효율적
### Virtual DOM
- React가 가지고 있는 가상 돔, 돔의 복사본
- state(상태)의 변화를 react에서 감지하고 있으며 state의 변화가 생긴다면 해당 state를 가지고 있는 Components의 가상돔과 실제 돔을 비교하여 변화가 생긴 Components만 리랜더

### KeyPoint
  - state(상태)
  - Components(UI 분리)
  - Virtual Dom(가상돔 - state 변화 - 감지 - 비교 - 리랜더)

## CSR, SSR
### CSR(Client Side Rendering)
#### 장점
페이지에 필요한 리소스를 전부 사전에 불러와 데이터를 캐싱하고 있다가   
현재 URL에 맞는 페이지를 보여주기 때문에 초기 랜더링 이후 속도가 빠르다.
#### 단점
초기 페이지 로딩이 SSR보다 느리다(모든 리소스)   
SEO(검색 엔진 초기화)에 불리 -> 빈 화면   
백엔드에서 데이터를 받아오는 동안 사용자가 빈 리소스를 보게될 가능성이 큼
### SSR(Server Side Rendering)
#### 장점
SEO에 유리 => 서버에서 완성된 페이지 전달, 검색 엔진이 수집하기 용이   
서버에서 랜더링을 부담하기 때문에 사용자 하드웨어 의존x
#### 단점
서버의 부담(생산 비용 증가)   
SSR을 위한 코드 작성 필요(생산 비용 증가, 추가 러닝 커브)   
무거운 페이지일 경우 초기로딩이 오히려 CSR보다 오래 걸릴 수 있다

### KeyPoint
- 페이지를 완성하는 주체가 누구인지(Client, Server)
- 빈 화면, 완성된 화면
- 캐싱, 재요청

## SPA, MPA
### SPA(Single Page Application)
    html파일이 하나인 애플리케이션   

    ReactJS와 같이 컴포넌트 기반 라이브러리 및 프레임워크는 SPA에 최적화   
    사용자가 웹사이트 접속 당시 번들링 된 리소스들을 한번에 전달

    URL이 변경됨에 따라 html을 해당 URL에 맞는 리소스를 랜더링한다.   

    따라서 통상적으로 react의 파일 구조는 index.html 하나로만 구성되어있다.

### MPA(Multi Page Application)
    html 파일이 여러개인 어플리케이션   
    요청 마다 해당 페이지에 필요한 리소스를 불러와 화면에 랜더링한다.

### KeyPoint
페이지 갯수   
SPA -> URL

---

React는 CSR, SPA에 최적화

## 패키지 관리툴
라이브러리들을 관리하고 설치할 수 있는 도구   
npm, npx, yarn, yarn2,3(yarn berry)

- npm   
  node에서 기본적으로 내장 되어있는 패키지 관리 툴

- npx   
  npm과 달리 설치하지 않고 라이브러리를 실행 시켜주는 도구   
  npm과 마찬가지로 node5.2버전 이상부터 기본 내장   
  일회성으로 무거운 패키지를 설치해야할 때

- yarn   
  과거에는 npm 보다 속도, 안정성, 보안 모두 뛰어나서 이목을 끌었지만 현재는 거의 차이가 없다.

- yarn berry   
  npm과 yarn의 경우는 설치된 라이브러리를 node_modules라는 파일로 관리   
  pnp라는 방식을 도입 zero install   
  .zip 파일을 관리하기 때문에 프로젝트 자체가 가볍고 빌드 속도가 빠르다.

  **모토레포**   
  하나의 워크스페이스에 여러 프로젝트를 담고 관리

  그러나, 다른 프로젝트를 한페이지에 담고 관리한다는 것은 폴더 구조나 신경을 써야하는 부분들이 배로 늘어난다는 이야기이다. 따라서 초기에 적용하는 것은 좋지 않고 이미 사용자가 충분히 확보된 복잡한 프로젝트를 간단하게 만들기 위해 사용

## 리액트 프로젝트 생성
1. 터미널 명령어를 통해 내가 프로젝트를 생성하고자 하는 위치에 경로 맞춰야함
2. 리액트 프로젝트 명령어 cra(create-react-app)   

    vite esBuild <-- 입문자가 사용하기에는 적합하지 않음   
    CRA가 익숙해지면 vite를 사용

    cra는 react에 필요한 모든 설정을 대신 설정(웹팩, 바벨,env...)   
    이미 설치된 도구를 커스텀하기 힘들다
  
3. npx create-react-app 프로젝트명(ex1)

## webpack(모듈 번들러), babel
### webpack
모듈번들러

- 모듈 : 한가지 이상의 기능을 하는 분리된 코드의 집합
- 번들러 : 묶어주고 정리하는 것

html, css, js, media   
너저분하게 관리되어있는 리소스들을 확장자명이나 특정 기준으로 분류하여 묶어주는 역할

웹팩은 이런 모듈 번들러의 일종으로 CSR 특성 상 URL에 따라 해당 페이지의 리소스를 찾아와 보여주어야 하는데  이러한 탐색 시간을 줄여준다.

네트워크 연산 비용을 줄일 수 있음
   
1. 모듈 단위의 개발
2. loader를 통해 js가 로드 할 수 없는 파일도 로드할 수 있는 상태로 변환

### babel
트랜스파일러

최신 문법을 이해하지 못하는 하위 버전의 웹 브라우저 로더들이 최신 문법을 이해할 수 있도록 저레벨의 문법으로 트랜스 파일하여 변환

**react에서 사용중인 babel은 총 4종류**
1. @babel/core  : 바벨을 구동시키기 위한 핵심 요소
2. @babel/cli : 쉘에서 바벨 명령어 사용 가능
3. @babel/preset-env : 바벨의 가장 기본 설정
4. @babel/preset-react : 바벨이 jsx문법(react문법)을 이해할 수 있도록 설정

## 리액트 프로젝트 구조
- node_modules
- public
- ** src
- .ginignore
- package.json
- package-lock.json
- README.md

## src의 구조
- App.css
- App.js
- App.test.js
- index.css
- vuex.js
- reportWebVitals.js
- setupTest.js



