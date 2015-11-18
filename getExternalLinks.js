
// Реализовать функцию getExternalLinks, которая возвращает массив ссылок, ведущих на внешние ресурсы (то есть не на тот домен, где запускается скрипт)
document.addEventListener('DOMContentLoaded', getExternalLinks );

 function getExternalLinks() {
 var allLinks = document.querySelectorAll('a'),
     currHost = location.hostname;

 function getDomain(url) {
     var domain;

     if (url.indexOf("://") > -1) {
         domain = url.split('/')[2];
     }
     else {
         domain = url.split('/')[0];
     }

     domain = domain.split(':')[0];

     return domain;
 }

 return console.log(Array.prototype.reduce.call(allLinks, function (prevVal, currVal) {
     var link = currVal.getAttribute('href'),
         domain;
     if(currVal.hostname === '') {
         domain = getDomain(link);
     } else if(currVal.hostname !== currHost) {
         domain = currVal.hostname;
     }
     if(domain) {
         prevVal.push(domain);
     }
     return prevVal
 }, []))
 }



