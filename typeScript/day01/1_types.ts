// string

let hello: string ='hello';
console.log(hello);

/*
const sum = (num1,num2) =>{
  return num1+num1;
}
*/

const sum = (num1:number, num2:number):number =>{
  return num1 + num2;
};


// sum(5,"6");  //err
console.log(sum(5,6));

// boolean
let bool : boolean = true;

// 타입스크립트만이 가지고 있는 타입
// 1. unknown, any 
// unknown=> 알 수 없는,  any  => 아무나

// any <-- 어따 쓸까?
// 라이브러리 --> 남이 만든건 --> 리턴 타입?
// 라이브러리와 같이 내가 타입을 알 수 없는 경우에 사용하는게 any다

// 2. never, void
// never(무한루프, 에러처리)
// 반환값이 절대 없는 경우

const error = (err: string): never=>{
    throw new Error(err);
};

// void(반환 값이 없는 경우)
const printMessage = (message : string): void =>{
  console.log(message);
};

// 3. object 💩
// object 범위 (객체, 배열, ...)가 광범위 하기 때문에
// 얘가 어떤 배열인지 어떤 객체인지 타입을 명시해주는 것이 좋다

// 4.array
// Array<type>, type[]
const numberArray : Array<number> =[1,2,343];
const stringArray: string[] = ["1","df","s"];

// 5.tuple
// 배열인데 값이 정해져있는 배열, 길이도 정해져있음
let studnet: [string, number,string]; // 길이 몇? 3
studnet = ['철수', 20,'축구'];

const [name1,age,hobby] = studnet;







