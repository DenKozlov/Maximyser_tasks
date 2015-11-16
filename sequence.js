/*Реализовать класс на прототипах
 Реализовать класс Sequence(arr). Конструктор принимает аргументом массив элементов. Имеет методы (описанные в прототипе) go, next, prev.
 Запоминает на каком элементе из массива сейчас находится "указатель".
 Метод go(index) возвращает элемент из массива с индексом index, или последний элемент массива, если index больше длины массива.
 Запоминает индекс возвращенного элемента. Метод next() возвращает следующий элемент из массива идущий за запомненным индексом,
 или первый элемент массива, если последний запомненный индекс - индекс последнего элемента.
 Метод prev() возвращает предыдущий элемент из массива идущий перед запомненным индексом, или последний элемент массива,
 если последний запомненный индекс - индекс первого элемента.
 var s1 = new Sequence(['one', 'two', 'three'])
 s1.go(2);  // 'three'
 s1.next(); // 'one'
 s1.next(); // 'two'
 var s2 = new Sequence([{name: 'Manya'}, {name:'Valya'}]);
 s2.go(100500); // {name: 'Valya'} последний элемент, так как индекс выходит за границы максимального
 s2.prev(); // {name: 'Manya'}
 s2.prev(); // {name: 'Valya'}*/
(function () {
    function Sequence(arr) {
        this.pointer = undefined;
        this.lastInd = arr.length - 1;
        this.arr = arr;
    }

    Sequence.prototype.go = function (index) {
        if(index > this.lastInd) {
            this.pointer = this.lastInd;
        } else {
            this.pointer = index;
        }

        return this.arr[this.pointer];
    };
    Sequence.prototype.next = function () {
        if(this.pointer < this.lastInd) {
            this.pointer++;
        } else {
            this.pointer = 0;
        }

        return this.arr[this.pointer];
    };
    Sequence.prototype.prev = function () {
        if(this.pointer === 0) {
            this.pointer = this.lastInd;
        } else {
            this.pointer--;
        }

        return this.arr[this.pointer];
    };
    var s1 = new Sequence(['one', 'two', 'three']);
    console.log(s1.go(2));  // 'three'
    console.log(s1.next()); // 'one'
    console.log(s1.next()); // 'two'
    var s2 = new Sequence([{name: 'Manya'}, {name:'Valya'}]);
    console.log(s2.go(100500)); // {name: 'Valya'} последний элемент, так как индекс выходит за границы максимального
    console.log(s2.prev()); // {name: 'Manya'}
    console.log(s2.prev()); // {name: 'Valya'}*/
})();