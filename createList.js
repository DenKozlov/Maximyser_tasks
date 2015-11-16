/*Релизовать функцию createList(listData, listContainer, itemContainer), возвращаюшую узел списка. Использовать innerHTML нельзя.
 Второй и третий аргументы не обязательные. Значения по умолчанию для них - ul и li. listData - массив.
 listData Может содержать как элементы (текст), так и массивы элементов. Глубина вложенности массивов любая.
 Примеры возвращаемых узлов:
 createList(['мясо', 'рыба']) /* ->
 <ul>
 <li>мясо</li>
 <li>рыба</li>
 </ul>
 createList(['мясо', ['яблоки', 'бананы']], 'ol') /*->
 <ol>
 <li>мясо</li>
 <li>
 <ol>
 <li>яблоки</li>
 <li>бананы</li>
 </ol>
 </li>
 </ol>
 createList(['мясо', ['яблоки', 'бананы']], 'div', 'div') /*->
 <div>
 <div>мясо</div>
 <div>
 <div>
 <div>яблоки</div>
 <div>бананы</div>
 </div>
 </div>
 </div>
 */
document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(createList(['мясо', ['яблоки', 'бананы']], 'div', 'div'));
});

function createList(listData, listContainer, itemContainer) {

    return listData.reduce(someF, document.createElement(listContainer || 'ul'));

    function someF(prevVal, currVal) {
        var iCont = document.createElement(itemContainer || 'li');
        if (!Array.isArray(currVal)) {
            iCont.appendChild(document.createTextNode(currVal));
            prevVal.appendChild(iCont);
        } else {
           prevVal.appendChild(iCont).appendChild(currVal.reduce(someF, document.createElement(itemContainer || 'li').appendChild(document.createElement(listContainer || 'ul'))));
        }

        return prevVal;
    }
}

