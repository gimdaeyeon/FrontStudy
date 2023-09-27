// interface
// 설계도 이 안에 있는 것은 반드시 구현되어야만 하는 것

type User = {
  id :number;
  lname: string;
};

type reply = {
  User :User;
  content: string;
}

interface Post  {
  id: number;
  content : string;
  User:User
}

interface Post{
  Comments : reply[];
}

// type alias와 다르게 interface는 중복 선언이 가능
// 다음에 선언한 interface와 이전에 선언한 interface가 합쳐진다
// interface는 class에 상속(적용)이 가능

// * type alias와 interface의 타입 지정으로써의 역할은 같다
// 따라서 원하는 형태를 사용해도 무방

// 일반적으로 인터페이스와 클래스를 최종 타입으로 많이 사용하는 편
// union이나 tuple을 정의할 때 type alias를 사용









