```text
npm i express mysql2 sequelize sequelize-cli dotenv

npx sequelize init

```
- mysql2 : nodeJs mySQL 연결해주는 라이브러리
- sequelize : ORM, 쿼리문이 없어도 명령문 만으로도 DB를 관리, 단 순수 쿼리문도 사용이 가능
- sequelize-cli : sequelize부가적 기능, 백업, 테이블 수정
- dotenv : .env파일을 통해 밖으로 유출되면 안되는 값을 변수화  시켜서 프로젝트 안에서 접근할 수 있도록 해주는 라이브러리

## DB의 테이블끼리의 관계
- 1:1 관계 (일대일)
- 1:N 관계 (일대다)
- N:N관계 (다대다)

### npx sequelize init
sequelize 설정 파일 생성, 해당 명령어 없이 폴더명 이름만 맞춰줘도 생성 가능

- config : DB연결 설정
- models : 스키마와 테이블 정의
- migrations : 테이블 수정
- seeders : 백업









