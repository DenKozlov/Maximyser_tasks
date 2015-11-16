/*Реализовать простейший templater
 Описать функцию templater(templateString, dataObj). Функция, принимает аргументом строку
 и объект. Заменяет все вхождения подстрок вида ${STRING} значениями из объекта
 с ключом STRING. Пример использования:
 templater('${who} ${action} ${what}', {
 who: 'mama',
 action: 'mila',
 what: 'ramu'
 }); // 'mama mila ramu'*/

(function () {
    function templater(templateString, dataObj) {
    var keys =  Object.keys(dataObj);

        keys.forEach(function (elem) {
            var regExp = new RegExp('\\${'+elem+'\\}');

            templateString = templateString.replace(regExp, dataObj[elem]);
        });

        return templateString;
    }

    console.log(templater('${who} ${action} ${what}', {
        who: 'mama',
        action: 'mila',
        what: 'ramu'
    }))
})();