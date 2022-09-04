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
