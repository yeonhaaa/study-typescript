// function logMessage(value: any) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

// 유니온 타입
var yeona: string | number | boolean;
function logMessage(value: string | number) {
    if (typeof value === 'number'){
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
    console.log(value);
}

logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number; 
}

// function getSomeone(someone: Developer | Person) {
//     someone.skill;
// }

function getSomeone(someone: Developer & Person) {
    someone.skill;
    someone.age;
}

getSomeone({ name: 'yh', age: 100, skill: 'ts' })