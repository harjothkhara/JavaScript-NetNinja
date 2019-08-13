const title = document.querySelector('h1');
//console.log(title); // <h1 style="color: orange;">The DOM</h1>

//title.setAttribute('style', 'margin: 50px;') // overriden orange color
// setAttribute() overrides whats currently there

// style is a CSS property names in the DOM
console.log(title.style); // CSSStyleDeclaration {0: "color", alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", …}
console.log(title.style.color); //orange

title.style.margin = '50px'; //new property added and color not overidden
title.style.color = 'crimson'; //overidden the origina color but not the margin

title.style.fontSize = '60px'; // font size increases, color and margin not overriden.

// if your unsure what the name will be just refer to the style property,

//removing a property
title.style.margin = ''; // margin has now gone
