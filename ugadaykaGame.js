/*Игра Угадайка
 Напиши программу, которая загадывает целое число до 50, и просит пользователя число отгадать. Каждый раз, когда пользовател вводит число,
 которое ближе к ответу, чем предыдущее предположение пользователя, программа выдает prompt для следующего числа с сообщением "теплее",
 если новое предположение отдаляется от задуманного числа, программа выводит prompt с сообщением "холоднее". 
 После отгадывания числа программа с помощью alert показывает количество попыток, за сколько было угадано число. 
 Максимальное число попыток: 10 (должно быть настраиваемым). После этого игра считается проиграной, о чем сообщается в alert окошке.
 Пример работы (мои комментарии идут за //):
 загаданное число: 34
 программа: Я загадала число. Угадывай, пользователь
 пользователь: 20
 программа: теплее
 пользователь: 10
 программа: холоднее
 пользователь: 15
 программа: теплее
 пользователь: 35
 программа: теплее // (потому что 35 ближе к 34, чем 15)
 пользователь: 45
 программа: холоднее
 пользователь: 34
 программа: угадал, хитрец, за 6 попыток.*/

(function () {
    var numToGuess = getRandomNumber();

    console.log(numToGuess);

    function getRandomNumber() {

        return Math.floor(Math.random() * (51));
    }

    function runGame() {
        var maxNumOfAttemps = parseFloat(prompt('Введите число попыток для отгадывания числа')),
            userNum = parseFloat(prompt('Я загадала число. Угадывай, пользователь')),
            differ = numToGuess,
            newDiffer = Math.abs(numToGuess - userNum),
            numOfAttempts = 1,
            warmer = 'Теплее',
            colder = 'Холоднее',
            message = 'К сожалению вы проиграли :(';

        while (numOfAttempts <= maxNumOfAttemps) {

            if (userNum === numToGuess) {
                message = 'Угадал, хитрец, за ' + numOfAttempts + ' попыток.';
                numOfAttempts = maxNumOfAttemps++;
            } else if(differ >= newDiffer) {
                hintAndnextNum(warmer);
            } else {
                hintAndnextNum(colder);
            }
        }

        function hintAndnextNum(str) {
            numOfAttempts++;
            userNum = parseFloat(prompt(str));
            differ = newDiffer;
            newDiffer = Math.abs(numToGuess - userNum);
        }

        return message;
    }

    alert(runGame());

})();