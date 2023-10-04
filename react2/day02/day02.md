- react-router-dom
  - router (경로) => 네트워크 데이터 전송하는 경로 = 소포
  - react에서 dom을 전달하기 위해 사용하는 경로
  - 경로 설정에 관한 라이브러리
  - npm i react-router-dom
  - ex) URL이 변함에 따라 다른 DOM을 index.html에 전달하는 역할
- styled-components === emotion (css-in-js)
  - js안에 css 문법을 작성
  - npm i styled-components
- fontawesome
  - icon 관련된 라이브러리
  - @fortawesome/free-solid-svg-icons
  - @fortawesome/react-fontawesome
- styled-reset
  - styled-components react.css
  - npm i styled-reset

## 리액트의 폴더 설계
**정답은 없다** 현재 자신의 프로젝트 규모와 환경에 따라 유지보수 용이
1. presentation - contatiner
   - container에서 비즈니스 로직을 통한 데이터를 처리하고
   - presentation에서 처리된 데이터를 출력하여 사용자에게 보여주는 형태

    react는 비즈니스 로직과 view가 합쳐져있는 형태   
    비즈니스 로직과  UI를 분리하기 위해 나온 컴포넌트 패턴

    그러나 이를 개발한 Dan Abrmov는 2019년을 기준으로 해당 패턴은 더이상 사용하지 말아라

    react -> hook 함수의 탄생, 컴포넌트 패턴으로 ui와 비즈니스 로직을 분리하지 않아도 충분히 똑같은 일을 할 수 있기 때문

2. custom hook
     - container가 하는 역할을 hook 함수를 custom한 hook 함수의 로직으로 관리하고 UI 재사용 및 로직 또한 재사용 가능하도록 한 패턴
     - components
     - utils
     - consts
     - styles
     - pages
     - routes
     - hooks
     - ...etc

3. atomic
   - atoms (원자)
   - molecules(분자)
   - organisms(유기체)
   - templates(템프릿)
   - pages(페이지)













