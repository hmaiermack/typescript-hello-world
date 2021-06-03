//if function doesnt return something, its type defaults to void
//it's still recomended to define it yourself for stricter type checking
//eg if you try to return something you'll get an error rather than the type automatically changing
var doSomething = function () {
    console.log("doSomething");
};
//essentially turns off type checking on a variable
//avoid use any
//if you need to use any, it means you most likely don't understand the problem correctly
var foo = "foo";
var vAny = 10;
var vUnknown = 10;
//unknown type isnt directly assignable to another type
//allows you to continue to get type checking
//no error with any despite being the wrong type
var s1 = vAny;
//throws an error because type unknown cannot be assigned to type string
var s2 = vUnknown;
//similar example to above
console.log(vAny.foo());
console.log(vUnknown.foo());
