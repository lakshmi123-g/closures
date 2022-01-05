{/*let x = 10;
function sum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d + x;
            }
        }
    }

}
console.log(sum(1)(2)(3)(4));*/}



{/*function initializer() {
    var counter = 0;
    var incrementFn = function increment() {
        counter++;
        return counter;
    }
    return incrementFn;
}
var incrementer = initializer();
//incrementer();*/}





{/*for (var index = 1; index <= 3; index++) {
    (function (index) {
        setTimeout(function () {
            console.log('after ' + index + ' second(s):' + index);
        }, index * 1000);
    })(index);
}*/}






{/*var funcs = [];

function createfunc(i) {
    return function () {
        console.log("My value: " + i);
    };
}

for (var i = 0; i < 3; i++) {
    funcs[i] = createfunc(i);
}

for (var j = 0; j < 3; j++) {
    funcs[j]();
}*/}
{/*let one = 1;
let two = 2;
let sum = `adding ${one} and ${two} gives me  ${one + two}`;
console.log(sum);*/}


//console.log(`hello World`.endsWith(`hell`));
{/*
var x={},
  y={key:"y"},
  a={key:"z"},
  z={key:"z"};
x[y] = 11;
x[z] = 21;
x[a] = 43;
console.log(x[y]);
*/}


{/*const name = ["john"];
name.unshift("charlie");                    //unshift()
name.unshift("joseph", "Jane");
console.log(name);*/}

{/* var items = [5, 3, 7, 6, 2, 9];
function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left,
        j = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, leftIndex - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray);*/}
/*function create() {
    var count = 0;
    return {
        increment: function () {
            count++;
        },                               //closure
        print: function () {
            console.log(count);
        }
    }
}
var c = create();
c.increment();
c.print();*/

/*var Output = (function (x) {
    delete x;
    return x;
}
)(0);
console.log(Output);
*/
/*var X = { f00: 1 }
var Output = (function () {
    delete X.foo;
    return X.foo;

})();
console.log(Output);  */


/*function doSomething() {
    console.log(this);
}
doSomething();*/


/*var obj = {
    name: "lakshmi",
    getName: function () {
        console.log(this.name);
    }

}

var getName = obj.getName;

var obj2 = { name: "durga", getName };
obj2.getName();*/



/*var obj1 = {
    address: "Mumbai,India",
    getAddress: function () {
        console.log(this.address);
    }
}

var getAddress = obj1.getAddress;
var obj2 = { name: "durga" };
obj2.getAddress();*/


/*var bikeDetails = {
    displayDetails: function (registrationNumber, brandName) {
        return this.name + " , " + "bike details: " + registrationNumber + " , " + brandName;
    }
}
var person1 = { name: "Vivek" };
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
detailsOfPerson1();
*/


/*function memoizedAddTo256() {
    var cache = {};

    return function (num) {
        if (num in cache) {
            console.log("cached value");
            return cache[num]

        }
        else {
            cache[num] = num + 256;
            return cache[num];
        }
    }
}

var memoizedFunc = memoizedAddTo256();

memoizedFunc(20);
memoizedFunc(20);*/



/*function* iteratorFunc() {
    let count = 0;
    for (let i = 0; i < 2; i++) {
        count++;
        yield i;
    }
    return count;
}

let iterator = iteratorFunc();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());*/

//console.log(typeof typeof 1);
//console.log(typeof number);

/*for (var i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i); }, i * 1000);
}

typeof undefined == typeof NULL*/



// program to generate fibonacci series up to n terms

// take input from the user
/*const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log("fib series");

for (var i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;

} */












function getMedian(ar1, ar2, n) {
    var i = 0;
    var j = 0;
    var count;
    var m1 = -1, m2 = -1;

    for (count = 0; count <= n; count++) {

        if (i == n) {
            m1 = m2;
            m2 = ar2[0];
            break;
        }


        else if (j == n) {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j]) {
            m1 = m2; m2 = ar1[i];
            i++;
        }
        else {
            m1 = m2;
            m2 = ar2[j];
            j++;
        }
    }

    return (m1 + m2) / 2;
}

var ar1 = [1, 5, 9];
var ar2 = [2, 6, 7];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
    document.write("Median is " + getMedian(ar1, ar2, n1));
else
    document.write("Doesn't work for arrays of unequal size");

