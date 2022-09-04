function Person(name, age) {
    this.name = name;
    this.age = age;
}
var yh = new Person('yh', 100);
// ES6
class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log('생성 되었습니다.');
        this.name = name;
        this.age = age;
    }
}

var yh = new Person('yh', 100); // 생성  되었습니다. 
console.log(yh); 


