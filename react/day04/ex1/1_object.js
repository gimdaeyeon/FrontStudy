console.log('ㅎㅇㅎㅇ');
//실행 : node 파일명

const  student = {

  apple:'신민석님',
  banana:'김예찬님',
  orange:'송연우님',

}

console.log(student);
// console.log(student.apple);

const {apple, banana, orange} = student;

console.log(apple);
console.log(banana);
console.log(orange);

//1. import BroserRouter from "react-router-dom";
// react-router-dom 라이브러리를 통째로 BroserRouter라는 이름으로 가지고 온다

//2.  import {BrowserRouter} from "react-router-dom"
// react-router-dom 라이브러리 중에서 {}안에 있는 애를 가지고 온다.

// 1번을 선택했다면 BrowserRouter.BrowserRouter
// export명이 맞지 않으면 에러가 나는 경우가 있다

// 2번은 선택하면 BrowserRouter

const user = ['이여규님', '우형일님','박선아님'];
const [lee, woo, park] = user;

console.log(woo);
console.log(lee);
console.log(park);

//배열을 키 값이 아닌, 인덱스 순서로 값을 받아올 수 있음
// 순서대로

const dog = {
  name : '루시',
  age : 10,
  weigth : 5
}

const desDog = ({name, age, weigth})=>{
  console.log(`우리집 강아지의 이름은 ${name}입니다. 그리고 나이는 ${age}살이고
  무게는 ${weigth}kg 입니다.`);
}

/*
문자열과 변수 쓰는 방법

`안녕하세요 ${name}입니다`
"안녕하세요"+ name + "입니다"
"안녕하세요" ,name, "입니다"
*/

// desDog(dog.name,dog.age,dog.weigth);
desDog(dog);

// 매개변수로 객체를 전달했고
// 함수의 정의문에서 {}를 사용하여 해당 객체의 키값의 value를 가져왔다.



