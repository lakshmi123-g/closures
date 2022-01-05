{/*var username = 'Laxmi';
var a = (function (username) {
    username = 'Durga';
    return username;
})(username);
console.log(a);
console.log(username);*/}


{/*var Bank = (function () {
    var name = "lakshmi";
    function getName() {
        return name;
    }
    function setName(newName) {
        name = newName;
    }
    return {
        setName, getName
    }
})();
console.log(Bank);
console.log(Bank.getName());
Bank.setName("Durga");
console.log(Bank.getName());*/}





var name = "lakshmi";
var Bank = (function () {
    name = "lakshmi";
    function getName() {
        return name;
    }
    function setName(newName) {
        name = newName;
    }
    return {
        setName, getName
    }
})(name);
console.log(Bank);
console.log(Bank.getName());
Bank.setName("Durga");
console.log(Bank.getName());
{/*function f1() {
    console.log("function one");
}
function f2() {
    console.log("function two");
}
function f3() {
    console.log("function three");
}
f1();
f2();
f3();*/}