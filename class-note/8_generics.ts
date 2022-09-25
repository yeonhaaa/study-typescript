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
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length);
//     text.forEach(function (text) {
//         console.log(text);
//     });
//     return text;
// }

// logTextLength<string>(['hi']);

interface LengthType {
    length: number;
}

// 타입 제한
function logLength<T extends LengthType>(text: T): T {
    text.length;
    return text;
} 
logLength('price')

// keyof 제네릭 타입
interface ShoppingItem {
    name: 'blue'
    price: 'red';
    stock: 'white';
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T{
    return itemOption;
}

getShoppingItemOption('name');
getShoppingItemOption('price');
getShoppingItemOption('stock')

const beer = ['TERRA','CASS'] as const;

type TItem = typeof beer
type TKEY = keyof typeof beer
// const getItem2 = [typeof item]
// type TGetItem = typeof item[number]
// type TGETKEY = keyof typeof item[number]
type TBeer = { [key in typeof beer[number]]: string }
const COLOR_CODE: TBeer = {
    TERRA: 'green',
    CASS: 'blue'
}

COLOR_CODE['TERRA']
COLOR_CODE[9]