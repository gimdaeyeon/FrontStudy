# DBMS (DataBase Management System )
데이터 베이스 관리 시스템

## DATA
의미가 있는(쓰임새가 있는) 모든 정보와 자료
```text

ex) 어디 사는 몇 살의 누구가 남성 혹은 여성의 요리유튜브를 시청했다
지역, 나이, 성별, 시청 영상, 영상의 주제 및 카테고리, 시청 시간

```

Data가 돈이 되는 시대 => 많은 데이터량을 저장할 필요가 있음   
즉 이런한 막대한 양의 데이터를 효율적으로 관리하기 위해 DBMS를 활용

## DataBase
(기지, 집단, 군체 집합)   
DataBase(데이터들의 기지(집단)) = DB

DBMS란
- 다양한 데이터 집단을 관리하는 시스템 도구
- 다수의 사용자가 데이터 베이스 내의 데이터에 접근할 수 있도록 (협업 관련)하는 도구

## DBMS 종류
- 계층형
- 네트워크형
- 관계형(o)
- NoSQL(o)
  
## RDBMS (Relational DataBase Management System)
1. 관계형 데이터 모델에 기초를 두고 있음
2. 모든 데이터를 2차원의 테이블 형태(표, 액셀)로 표현
3. 테이블이 서로 연관되어 있기 때문에 다른 DBMS보다 효율적으로 데이터를 구성할 수 있고 확장성 있게 구성할 수 있음
4. 데이터를 관리하기 위해 SQL이라는 쿼리문(언어)를 사용

종류 : Oracle, MySql, MariaDB, MSSQL, PostgreSQL

데이터 관리가 용이하다

### NoSQL : mongoDB
간단한거(연관성이 필요없는 것), 빅데이터

장점 : 
- 대용량 데이터 저장 가능
- 데이터 간의 구조가 없기 때문에 테이블 간의 관계가 불필요
- 저장이비교적 자유로움

 단점 : 
 - 데이터의 구조가 없기 때문에 데이터 중복이 일어날 수 있다.
 - 데이터 규격이 정해져있지 않음


## MySQL
Oracle과 더불어 세계에서 가장 널리 쓰이는 오픈 소스 RDBMS

### MySQL 데이터타입, 제약조건(스키마)
1. 숫자타입
   - 정수 : int, bigint(smallint, mediumint)
   - 실수 : float, double
2. 문자타입
   - char, varchar, text
3. 날짜와 시간
   - date, datetime, timestmp
4. enum
   - enum('f', 'w') ==> 괄호 안에 있는 데이터만

#### 제약조건
1. NON NULL : null을 저장할 수 없음(required)
2. UNIQUE : 중복된 값을 저장할 수 없음
3. DEFAULT : 기본 값
4. PRIMARY KEY, FOREIGN KEY   
    primary key : 기본키(not null, unique)   
    foreign key : rdbms의 핵심키 테이블간의 관계를 설정
5. AUTO_INCREMENT : 데이터를 넣지 않아도 숫자가 자동으로 증가되어 추가    
  중복값이 저장되지 않음   
  단, 직접 데이터 추가 불가능

---

|회원테이블|
|:--:|
|아이디|
|비번|
|이메일|
|이름|
|전화번호|
|성별|
|가입일|
|주소|

- 스키마(제약조건, 데이터타입), 다른 테이블과의 관계 명확
- DBMS에 data를 실제로 넣기 위해 물리 모델링

|tbl_user|
|:--:|
|useridx bigint AUTO_INCREMENT PK|
|user_name varchar|
|user_pw varchar|
|user_id varchar|
|user_address varchar|
|user_regdage datetime default now()|

---

### 테이블을 만드는 sql문
```sql

create table 테이블명{
  필드명(컬럼명) 데이터타입 제약조건
}


```

- Create => insert into 테이블명(컬럼명,... ) value(값,...);
- Read => select 컬럼명 from  테이블명;
- Update => update 테이블명 set 컬럼명 = 데이터 where 조건식(컬럼명 = 데이터);
- Delete => delete from 테이블명 where 조건식;









