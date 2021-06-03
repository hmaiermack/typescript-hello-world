//interface label should start with a capital letter
//by default all properties in interface are mandatory
//to make a property optional add a ? after the property name
interface User {
    name: string,
    age?: number
}

const user: User = {
    name: 'Mack',
    age: 26
}

const user2: User = {
    name: "Jack"
}