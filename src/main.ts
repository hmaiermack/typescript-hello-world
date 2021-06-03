//if function doesnt return something, its type defaults to void
//it's still recomended to define it yourself for stricter type checking
//eg if you try to return something you'll get an error rather than the type automatically changing
const doSomething = (): void => {
    console.log("doSomething")
}

//essentially turns off type checking on a variable
//avoid use any
//if you need to use any, it means you most likely don't understand the problem correctly
let foo: any = "foo"

let vAny: any = 10
let vUnknown: unknown = 10

//unknown type isnt directly assignable to another type
//allows you to continue to get type checking

//no error with any despite being the wrong type
let s1: string = vAny
//throws an error because type unknown cannot be assigned to type string
let s2: string = vUnknown

//using as keyword you can use type assertion to convert types from one to another
let s3: string = vUnknown as string

let pageNumber: string = '1'
let numericPageNumber: number = pageNumber as unknown as number