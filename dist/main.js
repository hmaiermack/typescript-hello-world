var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//if you define an interface and have a class implement it, then that interface's properties must be included in the class
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }
    //as unchangeableName is readonly you are only able to set the value once, afterwards it cannot be changed
    User.prototype.changeUnchangeableName = function () {
        this.unchangeableName = 'foo';
    };
    //for example, if we commented out this function the class would throw an error because it must include a function called getFullName
    User.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    //static properties are something you get from the class itself and not passed down to its children
    User.maxAge = 50;
    return User;
}());
//this creates a new class Admin with all properties from class User that you can extend with new properties only accessible from Admin
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var admin = new Admin('foo', 'bar');
//by default, everything in a class is public meaning that it can be used anywhere
//if you set a property to private, that means you can only use it inside of a class
//if protected, the property is allowed in the class and its children
var user = new User('mack', 'maier');
//as an example of above, you can no longer access firstName and lastName from class User
console.log(user.getFullName());
console.log(admin.getFullName);
//when typescript is transpiled, none of public/private/protected exists
