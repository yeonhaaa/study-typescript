enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스'
}

var myShoes = Shoes.Nike;
console.log(myShoes); // '나이키';


// 예제
enum Answer {
    Yes = 'Y',
    No = 'No',
}

function askQuestion(answer: Answer) { // 파라미터 타입이 Answer 이넘
    if (answer === Answer.Yes) {
        console.log('정답입니다.');
    }
    if (answer === Answer.No) {
        console.log('오답입니다.');
    }
}

askQuestion(Answer.Yes);