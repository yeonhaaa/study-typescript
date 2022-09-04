interface User {
    age: number;
    name: string;
}


// 변수에 인터페이스 활용
var yh: User = {
    age: 10,
    name: 'yeona'
}

// 함수에 인터페이스 활용
function getUser(user :User) {
    console.log(user);
}

const user = {
    name: 'apple',
    age: 70
}
getUser(user);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
} 

var sum: SumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var abc: StringArray = ['1', '2', '3'];
// abc[0] = 1

// 딕셔너리 패턴 ( Regex : 정규표현식)
interface StringRegexDictionary {
    [key: string]: RegExp;
}


var obj1: StringRegexDictionary = {
    // sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

Object.keys(obj1).forEach(function(value) {});


// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

var capt: Developer = {
    language: 'ts',
    name: 'yh',
    age: 500,
}












