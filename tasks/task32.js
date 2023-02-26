var current_users = ["alice", "bob", "charlie", "david", "eve"];
var new_users = ["charlie", "frank", "gary", "bob", "helen"];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var lowercase_new_user = new_user.toLowerCase();
    if (current_users.map(function (u) { return u.toLowerCase(); }).includes(lowercase_new_user)) {
        console.log("Sorry, the username \"".concat(new_user, "\" is not available."));
    }
    else {
        console.log("The username \"".concat(new_user, "\" is available."));
        current_users.push(new_user);
    }
}
