'use sctrict';

const guessTheNumber = function () {
    const rightNum = Math.floor(Math.random() * 100) + 1;
    console.log(`Загаданное число ${rightNum}`);
    alert('Угадай число от 1 до 100');
    const innerFunc = function () {
        const isNumber = function (num) {
        return !isNaN(parseFloat(num)) && isFinite(parseFloat(num))
        }
        let i = 9;
        do {
            let userGuess = prompt('Введите число');
            console.log(isNumber(userGuess));
            if (isNumber(userGuess)) {            
                if (userGuess == rightNum) {
                    alert('Вы угадали'); break
                } else if (userGuess !== rightNum && userGuess < rightNum) {alert('Вы не угадали, число больше, у Вас осталось: ' + i + ' попоток!')
                } else if (userGuess !== rightNum && userGuess > rightNum) {alert('Вы не угадали, число меньше, у Вас осталось: ' + i + ' попоток!')
                } else {console.log(rightNum)};
                i--;            } 
            else if (userGuess === null) {alert(`Игра окончена`); break}
            else {alert(`Вы ввели что-то не то, попробуйте ещё раз!`)};
        }
         while (i >= 0);      
    };
    innerFunc();
}

guessTheNumber();