// function isvalidsubsequence(array, sequence) {
//     let counter = 0;
//     for (let i = 0; i < array.length; i++) {
//         let curnum = array[i];

//         if (sequence[counter] === curnum) {
//             counter++;

//         }
//         if (counter === sequence.length) {
//             return true
//         }
//     }
//     return false
// }
// isvalidsubsequence = isvalidsubsequence;



const numbers = [2, 5, 8]

const addNumbers = (previousResult, currentItem) => {
    console.log({ previousResult, currentItem })
    return previousResult + currentItem
}

const initialValue = 0

const total = numbers.reduce(addNumbers, initialValue)

console.log(total)
