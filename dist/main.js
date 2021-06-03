//typescript doesn't parse markup
//when working with DOM elements be as specific as possible when defining your types
//in the example below, if you do not assert that the element .foo is not an HTMLInputElement then you wouldnt be able to access it's value
var someEl = document.querySelector(".foo");
//element is the highest class in the dom hierarchy and very generic
console.log('someElement', someEl.value);
