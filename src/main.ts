//interface label should start with a capital letter
//by default all properties in interface are mandatory
//to make a property optional add a ? after the property name
//interfaces provide autocomplete 
interface User {
    name: string,
    age?: number,
    getMessage(): string
}

const user: User = {
    name: 'Mack',
    age: 26,
    getMessage() {
        return 'Hello' + name
    }
}

const user2: User = {
    name: "Jack",
    getMessage() {
        return 'Hello' + name
    }
}

console.log(user.getMessage())