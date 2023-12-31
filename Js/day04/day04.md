# 배열(Array)
저장공간을 나열해놓은 형태의 구조   
하나의 이름과 방번호(인덱스)로 참조되는 정렬된 값의 집합

- 배열 요소 : 배열을 구성하는 각각의 값
- 인덱스 : 배열에서의 위치를 가리키는 숫자  

### \* 배열 특징
  1. 타입이 고정되어있지 않다   
  `let arr = ['김대연', 10,-2.45, true]`

  2. 인덱스가 연속적이지 않아도 된다.   
   
```js
    let arr = [];
    arr[0] = 10;
    arr[3] = '김대연';
    
    console.log(arr[3]);

    let arr2 = [];
    a = "A";
    arr2[a] = 10;
    // 인덱스가 굳이 순서대로인 숫자가 아니어도 된다. 
```

## Array 객체의 기능(메소드)

- 배열명.length : 현재 이 배열의 총 길이(값이 있는 방의 갯수)
- 배열명.push : 배열에 요소를 추가
- 배열명.pop() : 배열의 마지막 값을 제거
- 배열명.shift() : 배열의 첫번째 값을 제거
- 배열명.concat() : 두개의 배열을 합친 배열을 반환(return)
- 배열명.join() : 배열 요소 사이에 원하는 문자를 삽입한 '문자열' 반환
- 배열명.reverse() : 배열을 역순으로 배치
- 배열명.sort() : 배열을 오름차수능로 정렬

---

# 함수(function)
하나의 특별한 목적의 작업을 수행하도록 설계된 독립적인 영역

함수는 필요할 때마다 호출하여 해당 작업을 반복해서 수행하기 때문에 코드의 재활용을 가능하게 해주는 , 즉 반복되느 코드, 행위, 기능들을 쉽게 관리하기 위해 선언하여 사용한다.

어떠한 값 a와 b를 전해받은 함수느 복잡한 로직을 실행하는 함수이고 그 함수의 이름은 정의하는 대로 실행하는데
```text

... a();
let num = 변수;
let num2 = 변수;
a(num, num2); --> 한 줄이면 반복해서 사용가능

```

## 함수의 선언

```text

                          매개변수
function 함수이름(전달 받을 값1, 값2....){
  ...수행할 문장
  return 리턴값(리턴 값이 없다면 생략가능)
}

* 핵심 : 재사용
=> 기능(코드의 집합)에 이름을 주고 언제든 다시 사용할 수 있게 하는 것

```

### 매개변수







