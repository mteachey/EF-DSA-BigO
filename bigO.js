// Problem 1. What is the Big O for this?
//1.1)Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

//Assuming regardless of the size of the room everyone can always hear you and you hear them, Big O is constant.

//1.2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

//Linear

//Problem 2. Even or odd
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else{
        return false;
    }
}

//Big O is constant because the input is always one number and it takes the same number of operations (1) to determine if that numbe is even regardless if the size of that number.

//Problem 3. Are you here?
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

//Polynomial O(n^k) this is similar to the hasDuplicates function

//Problem 4. Doubler
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

//Linear O(n); There is one operation per element so as you increase the elements you increases the operations proportionally

//Problem 5. Naive search
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

//Linear O(n); There could be one operation per element so as you increase the elements you increases the operations proportionally

//Problem 6. Creating pairs
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

//Polynomial O(n^2); A nested for loop so will need to loop over two arrays.

//Problem 7. Compute the sequence
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

//Creating a sequence where the next number of the sum of the previous two numbers; Linear O(n) There is one operation per element so the input and running time are proportional

//Problem 8. An efficient search
//assume input array is always sorted
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

//Logarithmic O(log n); it cuts the input in half over each iteration

//Problem 9. Random element
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//Constant O(1); There is one operation no matter how many elements

//Problem 10. What am I?
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

//Determing if the number is 2? Constant has one operation

//Problem 11. Tower of Hanoi

//Problem 12. Iterative version
//??

//Problem 13. Recursive Big O

//Problem 14. Iterative Big O what?