let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child')

val = listItem;

/* val.style.background = "red";
 */
val = list.children;

val[1].textContent = 'hello';


console.log(val);