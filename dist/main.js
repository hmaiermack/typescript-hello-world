var user = {
    name: 'Mack',
    age: 26,
    getMessage: function () {
        return 'Hello' + name;
    }
};
var user2 = {
    name: "Jack",
    getMessage: function () {
        return 'Hello' + name;
    }
};
console.log(user.getMessage());
