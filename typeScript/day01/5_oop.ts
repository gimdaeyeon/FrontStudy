interface CarDriving {
  drivingStart: ()=>void;
  drivingStop: ()=>void;
}

/*
  접근제어자

  private -- 외부 접근이 불가능
  static --- new 클래스명() <-- 선언을 해줘야하는데, 생성자를 만들지 않아도 된다
  protected -- 외부 접근이 불가능, 단 상속 받은 자식 클래스는 접근이 가능
  public -- 공공, 외부에서 접근 가능
*/


class Car{
  private driver = '김짱구';
  name : string;
  drivingStart(){}

  constructor(name:string){
    this.name = name;
  }

  static drivingStop(){}

  public Driver(){ 
    console.log(`${this.driver}`);
  }
// 강의시간 03:17:00
  public printerName(){
  } 
}