//typescript doesn't parse markup
//when working with DOM elements be as specific as possible when defining your types
//in the example below, if you do not assert that the element .foo is not an HTMLInputElement then you wouldnt be able to access it's value
const someEl = document.querySelector(".foo") as HTMLInputElement

//element is the highest class in the dom hierarchy and very generic
console.log('someElement', someEl.value)

//similarly to element, event is a "super generic" type and will be automatically assigned
someEl.addEventListener('blur', (event) => {
    //create a new variable with a specific type assertion so that you can correctly access its value
    //if you tried to access the value without defining target as an HTMLInputElement via event.target.value
    //typescript will throw an error
    const target = event.target as HTMLInputElement
    console.log("event", target.value)
})

//when working with the DOM in typescript you have to use as to assign the correct types to whatever it is you're working with