'use sctrict';

const guessTheNumber = function () {
    const rightNum = Math.floor(Math.random() * 100) + 1;
    console.log(`Загаданное число ${rightNum}`);
    alert('Угадай число от 1 до 100');
    let i = 9;
    const innerFunc = function () {

        const isNumber = function (num) {
        return !isNaN(parseFloat(num)) && isFinite(parseFloat(num))
        }
        
        if (i >= 0) {
            let userGuess = prompt('Введите число');
            if (isNumber(userGuess)) {            
                if (userGuess == rightNum) {
                    alert('Вы угадали');
                } else if (userGuess !== rightNum && userGuess < rightNum) {alert('Вы не угадали, число больше, у Вас осталось: ' + i + ' попоток!'); i--; innerFunc()
                } else if (userGuess !== rightNum && userGuess > rightNum) {alert('Вы не угадали, число меньше, у Вас осталось: ' + i + ' попоток!'); i--; innerFunc()
                } else {};
            } else if (userGuess === null) {alert(`Игра окончена`);
            } else {alert(`Вы ввели что-то не то, попробуйте ещё раз!`); innerFunc()    
            };
        } else {alert ("Вы проиграли")};
    };
    innerFunc();
}

guessTheNumber();