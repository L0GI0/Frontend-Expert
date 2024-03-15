const secondLi = document.getElementById('second-li');

const firstLi = document.querySelector('li') /* takes CSS selector as a string and returns the first one that matches
the selector string */

console.log(firstLi);
console.log(secondLi);


const listItemsNodeList = document.querySelectorAll('li'); /* Return a NodeList which is Iterable */

console.log(listItems);

console.log(listItems.length) /* logs 3 */

listItems.forEach(listItem => {
    console.log(listItem); /* logs every item in the list */
});

listItems.map(listItem => console.log(listItem)) // This wont work as listItems doesn't have map method

Array.from(listITems).map(li => { /* But we can convert NodeList to Array using Array.from()*/
    console.log(li);
})

/* Usually 
getElementByClassName and getElementByTagName are not recommended to use
as HTMLCollection is not as powerful as NodeList
*/

const elementsByClassNameHTMLCollection = document.getElementByClassName('list-item'); /* We end up getting HTMLCollection */
const elementsByTagNameHTMLCollection = document.getElementsByTagName('li');

elementsByClassNameHTMLCollection.forEach(li => {
    console.log(li); 
}) // This throws an error as HTMLCollection doesn't have forEach function but Array.from() still can be used

listItemsNodeList[0].style.color = 'red';
listItemsNodeList[0].style.backgroundColor = 'blue';

listItemsNodeList[0].textContent = 'Changed!';
listItemsNodeList[0].value = 5;
listItemsNodeList[0].setAttribute('value', '7'); /* usually passed as string, if not they will convert for you */
listItemsNodeList[0].setAttribute('class', 'blue big');

/* classList property */

listItemsNodeList[0].classList.remove('big'); /* removes big class from elements class property */
listItemsNodeList[0].classList.add('big', 'blue'); /* adds blue class in to elements class property */
listItemsNodeList[0].classList.toggle('big'); /* adds big class if it its already there and removes it if its 
in class attribute value */

listItemsNodeList[0].className = 'blue';

const p = document.createElement('p');

p.textContent = 'Hello World';

document.body.appendChild(p); /* document.body equals to document.getElementByTagName('body'); */
document.body.append(p, 'Test'); /* append can also take text as an argument */
document.body.prepend('Text');

/* as when using p.textContent we can also create a TextNode and append that */

const text = document.createTextNode('Hello World');
p.append(text);

/* Another alternative is innerHTML - property of elements that
contains all the HTML of an Element in a string */

console.log(listItemsNodeList[0].innerHTML);
console.log(document.querySelector('ol').innerHTML);

document.body.innerHTML += '<p>HTML Text String</p>' /* same as appending but its not recommend to do it as its
bug prompt */

document.body.innerHTML = '' /* this is sometimes useful when we want to 
remove all the html from body */

document.body.innerHTML = '<script>doSomethingBad()</script>' /* If users would be able to 
control whats within the innerHTML they could inject some virus code */

/* Adding elements in a loop */

const parent = document.querySelector('ol');
const listItemsToAdd = [];

for (let i = 0; i < 3; i++) {
    const li = document.createElements('li');
    li.textContent = `List item with i=${i}`;
    listItemsToAdd.push(li);
}

parent.append(...listItemsToAdd);

/* Fragments - build in functionality we can use instead of previous loop code */

const fragment = document.createDocumentFragment(); /* creates own little DOM */

for (let i = 0; i < 3; i++) {
    const li = document.createElements('li');
    li.textContent = `List item with i=${i}`;
    fragment.append(li); /* Nothing happens in the real DOM here */
}

parent.append(fragment);

listItems[0].parentNode.removeChild(listITems[0]); /* it works but its a lot of code just to remove element */
listItems[0].remove() /* Works the same as the code above */

/* getting sizes from the DOM */

console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(listItems[0].style.fontSize); /* This will return an empty string.
The reason for this is that the fontSize because is not being set on the element so its not on style property */

window.getComputedStyle(listItems[0]).fontSize; /* This will return an actual style of an object converted to px */

const scrollable = document.getElementById('scrollable');

console.log(scrollable.clientHeight); /* gives an height of an element including (padding + height) */
console.log(scrollable.offSetHeight); /* gives an height of an element including (padding + height + border) */
console.log(scrollable.scrollHeight); /* gives an height including content that is already scrolled out of view */

console.log(scrollable.offsetTop); /* distance from the outer border to the inner positioned parent border */

console.log(scrollable.querySelectorAll('p')[0].offsetTop);

/* scrollIntoView() */

scrollable.querySelectorAll('p')[5].scrollIntoView(); /* Will scroll contents of the scrollable container down 
to where we can see the paragraph */

scrollable.scrollTo({
    top: scrollable.querySelectorAll('p')[0].offsetTop,
    behavior: 'smooth' /* The transition will happen smoothly rather than just jumping to the value */
});