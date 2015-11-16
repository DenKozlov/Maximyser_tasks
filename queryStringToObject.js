/*Преобразовать строку запроса (query string) в объект
 Реализуй функцию queryStringToObject(queryString), которая возвращает объект.
 Распознавать следующие типы данных: числа, строки, булевы.
 Помни, что некоторые символы query string могут быть закодированы.
 Пример работы:
 queryStringToObject("user=true"); // {user: true}
 queryStringToObject("user=true&age=29"); // {user: true, age: 29}
 queryStringToObject("user=true&age=29&name=Evgen"); // {user: true, age: 29, name: "Evgen"}*/

(function () {
    function queryStringToObject(queryString) {
        var arrOfStr = decodeURIComponent(queryString).split('&'),
            obj = {};

        arrOfStr.forEach(function (elem) {
            var strToArr = elem.split('=');

            if(strToArr[1] === 'true') {
                strToArr[1] = true;
            } else if(strToArr[1] === 'false') {
                    strToArr[1] = false;
                 } else if(!isNaN(strToArr[1])) {
                        strToArr[1] = parseFloat(strToArr[1]);
                    }
            obj[strToArr[0]] = strToArr[1];
        });

        return obj;
    }

    console.log(queryStringToObject("user=true"));
    console.log(queryStringToObject("user=true&age=29"));
    console.log(queryStringToObject("user=true&age=29&name=Evgen"));
})();