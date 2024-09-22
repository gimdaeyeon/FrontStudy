//  타입 추론 기본 1
let a = 'abc';

function getB(b = 10) {
    let c = 'hi';
    return b + c;
}

//  타입 추론 기본 2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }
//
// let shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello'
// }

//  타입 추론 기본 3
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K>{
    description: string;
    tag: K;
}

let detailedItem: DetailedDropdown<number> = {
    title: 'abc',
    description: 'ab',
    value: 32,
    tag: 11
}


// Best Common Type (타입스크립트가 타입을 해석하는 알고리즘)
let arr = [1,2,false,'a'];



















