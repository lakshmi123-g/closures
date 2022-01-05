{/*function example1() {
    var a = 10;
}
console.log(a);*/}

//function ex2() {
//  var b = 20;
//function innerFunction() {
//  return b;
//}
//return innerFunction;
//}
//let output = ex2();
//console.log(output());
{/*let one = function () {
    return 1;
}
console.log(one());*/}
{/*var x = 100;
function outer() {
    var y = 20;
    //var n = 100;
    function inner() {
        var z = 10;
        console.log(y + z + x);
        y++;
        z++;
    }
    return inner;
}
let inner = outer();
console.log(inner());

console.dir(inner());
console.log(inner());*/}


{/*function Bank() {
    var name = "Durga";
    function getName() {
        return name;
    }
    function setName(newName) {
        name = newName;
    }
    return { getName, setName }
}
let bank = Bank();
console.log(bank);
console.log(bank.getName());
bank.setName("Lakshmi");
console.log(bank.getName());
bank.setName("Bharu");
console.log(bank.getName());
bank.setName("Nikki");
console.log(bank.getName());*/}




{/*function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

//console.log(add5(2));  
//console.log(add10(2));
console.log(add10(3));*/}



{/*function mulNumbers(a) {
    var product = a;
    function mulBySecond(b) {
        product *= b;
        return mulByThird;
    }
    function mulByThird(c) {
        product *= c;
        return product;
    }
    return mulBySecond
}
console.log(mulNumbers(2)(3)(4));*/}









{/*var counter = (function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }

    return {
        increment: function () {
            changeBy(1);
        },

        //decrement: function () {
        //  changeBy(-1);
        //},

        value: function () {
            return privateCounter;
        }
    };
})();

console.log(counter.value());

counter.increment();
console.log(counter.value());
counter.increment();

console.log(counter.value());

//counter.decrement();
//console.log(counter.value());*/}



{/*var funcs = [];

function createfunc(i) {
    return function () {
        console.log(" value is: " + i);
    };
}

for (var i = 0; i < 3; i++) {
    funcs[i] = createfunc(i);
}

for (var j = 0; j < 3; j++) {

    funcs[j]();
}*/}

{/*let stoveTemp = 500;
function Pot() {
    this.boilStatus = ''; this.startBoiling = function () {
        if (stoveTemp > 300) this.boilStatus = "boiling";
    }
}
let pastaPot = new Pot(); pastaPot.startBoiling();
console.log(pastaPot);
function Pasta() {
    this.cookedStatus = false;
    this.addToPot = function (boilStatus) {
        if (boilStatus == "boiling")
            this.cookedStatus = true;
    }
}
let myMeal = new Pasta();
myMeal.addToPot(pastaPot.boilStatus);
console.log(myMeal.cookedStatus);*/}

{/*function numberGenerator() {

    var num = 1;
    function checkNumber() {
        console.log(num);
    }
    num++;
    return checkNumber;
}

var number = numberGenerator();
number();*/}

{/*let f = () => {
    let i = 1;
    return () => {
        console.log(i);
    }
};
console.dir(f());*/}
{/*for (let i = 0; i < 3; i++) {
    const f = () => {
        console.log(i);
    }
    f();
}*/}





for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);

}



for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);

}