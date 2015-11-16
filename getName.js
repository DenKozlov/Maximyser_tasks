/*Получить название файла или папки из пути
 Реализовать функцию getName(path), которая возвращает название папки или файла из строки пути.
 Разделители сегментов путей - юниксовые ("/"). Примеры путей:
 '/users/dmitry/Dropbox/'
 '/users/dmitry/Dropbox'
 '/users/dmitry/Dropbox/main.js'*/

(function () {
    var path = '/users/dmitry/Dropbox/',
        path2 = '/users/dmitry/Dropbox',
        path3 = '/users/dmitry/Dropbox/main.js';

    function getName(path) {
        var arrOfStr = path.split('/'),
            lastElem =  arrOfStr.length - 1;

        if(arrOfStr[lastElem].length == 0) {
            arrOfStr.pop();
            lastElem -= 1;
        }

        return arrOfStr[lastElem];
    }

    function getName2(path) {
        return path.split('/').filter(function (elem) {

            return elem !== '';
        }).pop();

    }

    console.time('timer');
    console.log(getName(path));
    console.timeEnd('timer');
    console.time('timer');
    console.log(getName2(path));
    console.timeEnd('timer');
})();