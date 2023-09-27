// typeAlias
// 어떠한 것에도 타입을 줄 수 있다.
{
  type Text = string;
  const name : Text = '철수';

  type TextString = '안녕하세요';
  // 값이나 value도 type화 시킬 수 있다
  const nameString: TextString = '안녕하세요';

  // type, interface

  type UserInfo = {
    id?: number;
    name? : string;
    hobby? : string;
  }

  const User : UserInfo[] = [{
    id : 3,
    name :'daeyeon',
    hobby : '축구',
  },
  {},
  {},
  {},
];

// data?.data
// data!.data

// union type, interserction type

type store = '옷가게'|'신발가게'| '와인가게';
type year = string |number;

let storeKind :store = '옷가게';
let year: year = '2022.03.33';
year =1999;
// year = true; err
// ex) button type ='submit'  |'default'
// ex) string | undefined

type Student = {
  name : string;
  score: number;
};

type WebUser = {
  nickname : string;
  posting?: ()=>void;
};

const internet = (person : Student & WebUser)=>{
  console.log(person.name, person.score);
};

internet({
  name : '김대연',
  score : 30,
  nickname : 'dddd',
  posting : ()=>{
    console.log('ㅎㅇㅎㅇ');
  },
});




}

















