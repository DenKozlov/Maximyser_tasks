/* Реализовать функцию getUniqueTags, которая возвращает массив названий тегов, присутствуещих на странице.
 В массиве каждого типа тег должен присутствовать в единственном экземпляре.*/
document.addEventListener('DOMContentLoaded', getUniqueTags);

function getUniqueTags() {
    var allElems = Array.prototype.slice.call(document.body.querySelectorAll('*'));


    return console.log(allElems.reduce(function (prevVal, currVal) {
        var node = currVal.nodeName.toLowerCase();
        if(prevVal.indexOf(node) === -1) {
            prevVal.push(node);
        }

        return prevVal;
    }, []));
}