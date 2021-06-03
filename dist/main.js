var username = 'mack';
//unions -> | allow you to combine data types
//most popular union is checking for null: eg for async fetching
var pageNumber = '1';
//when using a union whatever you set your variable to is the default value, if there is no default value it will default to undefined
//let error: string | null would be type undefined, whereas the below example is type null
var errorMessage = null;
//you can also pass interfaces into unions
var user = null;
//unions can get out of control if you abuse them
var someProp;
