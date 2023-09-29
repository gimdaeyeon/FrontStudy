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


<!--  강의시간 01:00:00 -->





