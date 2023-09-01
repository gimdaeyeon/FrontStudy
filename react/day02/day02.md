# ReactJS란?
복잡한 사용자 인터페이스르 쉽게 구축하기 위해 페이스북에서 만든 JS라이브러리

## React의 핵심 컨셉?
re-render와 components

### components?
한가지 이상의 기능을 수행하는 UI 단위

### re-render
업데이트 이전의 가상 돔트리와 업데이트 이후 가상 돔트리 상태를 비교 업데이트 된 내용이 있다면 컴포넌트를 사용자 화면에 구성할 때 사용자 화면을 구성할 때 사용하는 render 함수를 다시 호출하는 것

### Virtual DOM?
React가 가진 가상의 돔 트리, DOM TREE의 복사본

## 패키지 관리툴?
npm, npx, yarn

### 리액트 프로젝트 생성 명령어
npx create-react-app 프로젝트명(폴더명)   
[프로젝트 = 폴더 = 패키지]   
[패키지 = 라이브러리]

---

## CRA(Create React App)
- React에서 따로 설치하지 않아도 필요한 라이브러리들은 자동으로 설치해주고 폴더 구조도 자동으로 만들어주는 일종의 명령어
- 최고의 장점은 설정하기 까다로운 바벨과 웹팩을 초기 패키지에 포함

## 바벨(babel)
- 트랜스파일러 (번역기)
- ES6 이상의 문법 코드들을 지원하지 않는 브라우저가 이해할 수 있도록 ES5 이하의 문법으로 변환

=> 최신 버전이 지원 되지 않는 브라우저에 맞는 버전의 언어로 변환


## 웹팩
- 가장 많이 사용되는 **모듈** 번들러
- 애플리케이션을 구성하는 자원(html, css, js, img, audio...)등을 모두 각각의 모듈로 보고 이를 종합해서 하나의 결과물을 만드는 도구

#### 모듈
프로그래밍 관점에서 특정 기능을 갖는 작은 코드 단위(코드 집합)

## todolist
ReactJS 입문자가 하기에 가장 유명한 미니 프로젝트(토이 프로젝트)   
`npx create-react-app todolist`   
### React의 기본 주소와 포트
localhost:3000   

localhost = 컴퓨터의 IP주소 = 127.0.0.1:3000;    
localhost:3000   

---

## npm i 
node_modules가 없는 상태로 전달   
git에 있는 것을 clone을 받아도 마찬가지의 형태

#### package.json

### dependencies
- 설치되어있는 라이브러리들의 키 값
- node_modules 폴더에 라이브러리들이 설치되어있는데 
- 해당 폴더는 용량이 크기 때문에 공유하지 않는다.
- 따라서 npm i or npm install 이라는 명령어를 치게 되면 
- package.json의 dependencies에 명시되어있는 라이브러리들을 알아서 설치(node_modules 폴더가 생성)


### script
- start : 사용자가 보는 화면을 개발자가 확인할 때
- build : 배포 폴더를 만들기 위하여 사용
- dev : 개발자가 보는 화면을 개발자가 확인할 때
- test : TDD (테스트 주도 개발) -- 유닛테스트 -- "jest"

### port변경하기
SET PORT=3001 &&   
(EXPORT)



## CSS-in-JS
style.css와 같은 css 파일을 만들어서 css를 적용   
js안에서 css 문법을 사용하고 적용시킬 수 있는게 css-in-js

=> Styled-components, Emotion

#### 왜? 사용하는가?
React와 같은 SPA에 개발에서 js안에서 html, js를 모두 기술   
따라서 문서의 구조와 로직에 스타일링 코드가 같은 위치에 위치 시킬 수 있음   
=> 응집도를 높일 수 있음    
=> 굳이 다른 파일을 가지고오거나 옮겨다니지 않아도 (부하를 감소)   
개발하고 있는 그 컴포넌트 자체에 집중할 수 있게

### Styled-components
- React의 css 스타일링 방법 중 하나
- css 파일이 아닌 js 파일에 직접 기술하는 css in js의 한 종류
- 컴포넌트 호출 시 필요한 css만 호출
- className을 사용하지 않아 겹치는 오류 방지

#### 사용법
```js

<LoginForm>
...
</LoginForm>

const LoginForm = style.div`
  ...css 속성
`

```
<!-- 강의 시간 02:30:29 -->











