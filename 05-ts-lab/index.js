function greeter(user) {
    return "Hi ".concat(user, " from typescript!");
}
var user = 'Borislava Ivanova';
document.getElementById('app').innerHTML = greeter(user);
