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

const obc:Dropdown<string> = {value:'abc',selected:false}







