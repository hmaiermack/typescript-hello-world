//classes are syntactic sugar for prototypes
interface UserInterface {
    getFullName(): string
}

//if you define an interface and have a class implement it, then that interface's properties must be included in the class
class User implements UserInterface{
    protected firstName: string
    private lastName: string
    readonly unchangeableName
    //static properties are something you get from the class itself and not passed down to its children
    static readonly maxAge = 50

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
        this. unchangeableName = firstName
    }


    //as unchangeableName is readonly you are only able to set the value once, afterwards it cannot be changed
    changeUnchangeableName(): void {
        this.unchangeableName = 'foo'
    }

    //for example, if we commented out this function the class would throw an error because it must include a function called getFullName
    getFullName(): string {
        return this.firstName + ' ' + this.lastName
    }
}

//this creates a new class Admin with all properties from class User that you can extend with new properties only accessible from Admin
class Admin extends User {
    private editor: string
    
    setEditor(editor: string): void {
        this.editor = editor
    }

    getEditor(): string {
        return this.editor
    }
}

const admin = new Admin('foo', 'bar')

//by default, everything in a class is public meaning that it can be used anywhere
//if you set a property to private, that means you can only use it inside of a class
//if protected, the property is allowed in the class and its children
const user = new User('mack', 'maier')

//as an example of above, you can no longer access firstName and lastName from class User
console.log(user.getFullName())

console.log(admin.getFullName)

//when typescript is transpiled, none of public/private/protected exists