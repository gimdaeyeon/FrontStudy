// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText('로그'); // 문자열 로그
// logText(3); // 3
// logText(false); // 진위값 false

// function logText<T>(text:T):T{
//     console.log(text);
//     return text;
// }
// logText<string>('안녕');

// function logString(text:string) {
//     console.log(text);
//     return text;
// }
// function logNumber(text:number) {
//     console.log(text);
//     return text;
// }
//
// logText('a');
// logText(10);


// const a = logText('a');
// logText(10);
// const num = logNumber(10);
// logText(true);

function logText<T>(text: T): T {
    console.log(text);
    return text;
}

const str = logText<string>('abc');
str.split('')
const login = logText<boolean>(true);


// 인터페이스에 제네릭을 선언하는 방법

// interface Dropdown {
//     value: string;
//     selected: boolean;
// }
//
// const obj: Dropdown = {value: 'abc', selected: false};

interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const obc: Dropdown<string> = {value: 'abc', selected: false}

// // 제네릭의 타입제한
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length);
//     text.forEach(console.log);
//     return text;
// }
//
// logTextLength<string>(['hi', 'abc']);

// 제네릭 타입 제한 2 - 저의된 타입 이용하기
interface LengthType {
    length: number;
}

function logTextLength<T extends LengthType>(text:T):T{
    text.length;
    return text;
}

// logTextLength(13);
// logTextLength({length:3});

// 제네릭 타입 제한 3 -keyof
interface ShoppingItem{
    name:string;
    price:number;
    stock:number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption:T):T{
    return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
let a= 'price';
getShoppingItemOption('price');
// getShoppingItemOption(a);













