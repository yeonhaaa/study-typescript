// function logText(text) {
//     return text;
// }

// logText('hello');
// logText(10);
// logText(true);


// function logText<T>(text: T): T{
//     return text;
// }

// logText<string>('hello');
// logText(10);
// logText(true);


function logText(text: string | number) {
    return text;
}

logText('hello');
logText(10);


// 인터페이스에 제네릭 선언
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const obj: Dropdown<String> = { value: 'abc', selected: true }

// 제네릭 타입 제한
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach(function (text) {
        console.log(text);
    });
    return text;
}

logTextLength<string>(['hi']);