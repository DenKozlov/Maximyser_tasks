/*Проверить является ли один массив подмножеством второго
 Дописать функцию contains(where, what). Если все элементы массива what содержатся в массиве where,
 функция должна возвращать true. Пустой массив является подмножеством любого массива. 
 Порядок вхождения элементов в массив не имеет значения. Примеры:
 contains([1,2,3], [3,2]); // true
 contains([1,2,3], [3,2,1,2,3]); // true*/

(function () {
    var where = [1,2,3],
        what = [3,2,1,2,3];
    
    function contains(where, what) {
           return what.every(function (elem) {
                  return where.some(function (el) {
                         return el == elem
                    });
        })
    }
    console.log(contains(where, what));
})();