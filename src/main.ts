//similar to interfaces, types start with a capital letter
type ID = string
type PopularTag = string;
//you can use type aliases inside of interfaces, giving you more info as to what the property is actually for
interface UserInterface {
    id: ID,
    name: string,
    lastName: string
}

//can use type aliases similar to property types
const popularTags: PopularTag[] = ['dragon', 'coffe']

let username: string = 'mack'
//unions -> | allow you to combine data types
//most popular union is checking for null: eg for async fetching
let pageNumber: string | number = '1';

//when using a union whatever you set your variable to is the default value, if there is no default value it will default to undefined
//let error: string | null would be type undefined, whereas the below example is type null
let errorMessage: string | null = null

//you can also pass interfaces into unions
let user: UserInterface | null = null

//unions can get out of control if you abuse them
let someProp: string | number | null | undefined | object | string[]