# Vue 정리
## 1. 개발환경 설정
- ### node 설치: [LTS버전 다운로드](https://nodejs.org/en)
    설치된 버전 확인: `node -v`
- ### vue cli 설치: `npm install -g @vue/cli`
    설치된 버전 확인: `vue --version`
## 2. 프로젝트 생성
- ### vue cli를 통한 프로젝트 생성: `vue create {프로젝트 이름}`
## 3. Vue 시작
1. ### vue 등록
**main.js**
```js
import { createApp } from 'vue'
import App from './App.vue'
import {router} from "@/routes";
import {store} from "@/store";

createApp(App)
    // use() 플러그인 사용
    .use(router) // 라우터
    .use(store) // vuex(전역 상태관리)
    .mount('#app') // #app요소에 App을 등록
```


