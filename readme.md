1.  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById - we use that to fetch specific HTML element from page's DOM, Id must be unique

getElementsByClassName - by using that we get hold of multiple HTML elements with similar class name.

querySelector / querySelectorAll - they both are used to get hold of HTML elements just like getElementsbyId or byClassname. The key difference is querySelector returns first matching element whereas querySelectorAll returns list of matching elemets.

2. How do you create and insert a new element into the DOM?

You first create new element:
document.createElement('p');

assign innerText/innerHTML value depending on what element you are creating

then append it to the respective div or body or section

3. What is Event Bubbling? And how does it work?

Its a technique in which whenever event triggered on a child element it goes up to its parent or ancestor in DOM. It gives parent element an opportunity to respond to any event triggered by child element.

4. What is Event Delegation in JavaScript? Why is it useful?
   By using Event Delegation we can handle events effectively. We can cling single event listener ot a parent to capture all child elements as opposed to adding multiple event listeners to child elements.

perks:

- not writing multiple event listerns
- less code
- Ideal for dynamically added elements

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault()- As name suggests, it prevent the default action of the browser

stopPropagation() - It stops further propagation of the current event in the capturing & bubbling stages.

Thats all for today, Thanks!
