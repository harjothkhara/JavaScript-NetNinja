const content = document.querySelector('p');

// classList is a property that lists all the classes the p element has.
console.log(content.classList) // DOMTokenList ["error", value: "error"]

// add or remove classes

//taking the p tag and adding a class to it called error by using the add() method
// for this example we removed the p class error beforehand.
content.classList.add('error');
console.log(content.classList); // DOMTokenList ["error", value: "error"]


//removing class use the remove()
content.classList.remove('error');
console.log(content.classList); //DOMTokenList [value: ""]

// adding a new class
content.classList.add('success');
console.log(content.classList); // text should now be limegreen
