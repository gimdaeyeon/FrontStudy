class Person {
    private name: string;
    public age: number;
    readonly log:string; // 수정불가, 값 읽기만 가능

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}