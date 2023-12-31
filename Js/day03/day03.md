# 연산자(Operator)
기능이 있는 특수문자 또는 단어   
함수, 키워드들은 연산자가 아니다 (알고만)

### 산술 연산자
- +, -, *, /
- %,**

- a%b : 나머지 연산자(a를 b로 나눈 나머지 값)
- a**b : 제곱연산자(a의 b제곱)   
  ex)10%3 : 1

  비트 연산(2진법)   
  1 bit : 컴퓨터 용량의 최소단위
  1 byte : 8bit / 메모리의 최소 단위, 데이터의 최소 단위
  ---

# 조건식
조건을 제시하는 식   
결과가 참 또는 거짓 둘 중 하나로 나오는 식(true/false)

Boolean타입   
  참을 나타내는 treu / 거짓을 나타내는 false 값   
  Boolean() : 형변환
---

# 관계 연산자
- >, < : 초과, 미만   
- >=, <= : 이상, 이하   
- == : 같다 (타입이 달라도 값만 같으면 true)
- != : 다르다 (타입이 다르고 값이 같다면 false)
- === : 같다(타입과 값이 모두 같음 true)
- !== : 다르다(값, 타입 중 하나만 달라도 true)

---
# 논리연산자
조건식들 간의 관계를 설장해주는 연산자   
(A와 B는 조건식)   
- A && B : A와 B가 모두 true여야만 true 아니면 false(and)
A || B : 둘중 하나라도 true 값이라면 true ( or)

--- 
# 단항 연산자
!A : A가 true라면 그의 반대인 false를 false라면 true를 (not 반대)

---
# 제어문
프로그램 내에서 주어진 조건식의 결과에 따라 명령을 수행하도록 제어하는 문장

- 조건문   
  + if ~ else if ~ else (if문)   
  + switch ~ case ~ default(switch/case 문)

- 반복문   
  + while문   
  + for문

---
# 조건문
조건에 따라 경우의 수를 나눌 때   
프로그램의 흐름을 열러갈래로 나눌 때 (사용자에게 선택지를 준다)   
특정 상태를 물어볼 때 (해당 변수에 데이터 값이 있니?, 체크박스는 체크했니?, alert창이 있니?)

### if문(만약에~)
조건식을 검사한다. true일 경우에 if문 안에 있는 내용을 수행하고 만약 해당 조건이true가 아니라면 else if 혹은 else안에 있는 내용을 수행한다.

### switch문
경우의 수가 변수에 담긴 값의 따라 나뉠 때 사용   
변수에 담긴 값에 알맞은 case 안의 내용을 실행한다.

하지만, 밑에 여러가지 case들이 더 있다면 이어서 case들이 호출되므로 break;를 사용해야 해당 조건문을 탈출(종료) 시켜줘야한다.
--- 

# 삼항연산자
### 조건식 ? 값1 : 값2;
=>조건식이 true면 값1을 보여주고 아니면 값2를 보여줘라

### 조건식 && 값   
=> 조건식이 true이면 값을 보여주고 아니면 null을 보여줘라   
===조건식? 값 : null

--- 
# 반복문
특정한 코드나 행위를 반복해야할 때 사용

- 조건에 의한 반복   
  while문

- 횟수에 의한 반복   
  for문
