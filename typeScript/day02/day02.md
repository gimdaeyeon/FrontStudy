# typeScript react
### CRA(create-react-app)
typescript가 셋팅되어 있는 상태로 생성할 수 있는 명령어

`npx create-react-app 프로젝트명 --template typescript`
---
일반 함수나, 객체들을 저장할 것은 .ts(단순 js문법)   
컴포넌트는 .tsx 확장자로 끝나야만 한다.
---

## linter, prettier

### eslinter
코드의 문법을 통일   
일부 prettier기능도 지원   
linter

### prettier
코드의 포맷을 통일   
code formatter

==>   
prettier는    
자동으로 코드의 형태(모양)을 예쁘게(개인 혹은 단체가 맞춘 컨벤션에 따라) 정렬   
ex) 띄어쓰기, 콜론을 붙여줄지..

linter는   
개인 혹은 단체가 정한 문법에 어긋나면 경고 혹은 에러를 낸다   
ex) 컴포넌트명이 대문자가 아니다, 혹은 매개변수가 하나일 때 ()를 감싸지 않는다, 작은 따옴표대신 큰 따옴표를 사용한다, 화살표 함수를 사용한다....

협업 과정에서 다른 사람들과의 코드 포멧을 똑같이 만드는 역할

ex) 커밋을 할 때 모든 파일의 포멧을 해당 포멧으로 바꾼다.

prettier, eslint

`npm i -D prettier eslint eslint-plugin-prettier eslint-config-prettier`

일반 자바스크립트에서는 사용할 수 있다.   
그러나, 타입스크립트 전용 라이브러리도 설치를 해줄 필요가 있다   
`npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser`

---

사용법 

프로젝트 상위 경로에 (package.json과 같은 경로에)   
.eslintrc   
.prettierrc 파일을 생성

---

script   
   ` "lint":"eslint --cache",
    "format":"prettier --cache --write"`
  
  npm run 명령어로 포멧팅과 린트검사가 가능
  ---


**git hook** = --> 깃 명령어가 작동되기 전에 실행하는 명령어
1. 직접 만들 수 있으나 조작법이 까다롭고
2. 해당 깃훅을 사용하는 모든 팀원이 같은 깃훅을 설정해야하는 단점

###   husky
1. git hook을 commit과 push이전에 사용할 수 있도록하는 라이브러리
2. 해당 라이브러리는 설치 파일이기 때문에 한사람이 설정해도 모든 인원이 적용
3. 라이브러리지만 가볍다

사용법

`npm i -D husky`   
`npx husky install` // 해당 프로젝트 기초 셋팅

"postinstall":"husky install"   <--추가 (package.json => script)

`npx husky add .husky/pre-commit 'npm run lint'`   
`npx husky add .husky/pre-push 'npm run format'`

---

styled components with typescript

`npm i styled-components @types/styled-components`

+ 초기셋팅 시 `npm i react-router-dom`


tsconfig

기본 경로를  src로   
    `"baseUrl" : "src"`



