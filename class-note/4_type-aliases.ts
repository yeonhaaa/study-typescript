interface Person {
    name: string;
    age: number;
}

type Person1 = {
    name: string;
    age: number;
}

var yh: Person1 = {
    name: 'yh',
    age: 20,
}

type MyString = string;
var hello: MyString = 'hello'; 

type Todo = { id: string; title: string; done: boolean };
function getTodo(tood: Todo) {
    
}