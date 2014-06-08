'use strict';


//kata.perform('bubbleSort_06.07.14', generateArrayOfIntegers(450));
//kata.perform('bubbleSort_06.07.14', generateArrayOfIntegers(4500));
//kata.perform('bubbleSort_06.07.14', generateArrayOfIntegers(45000));

// console.log(generateArrayOfIntegers(10, [1,2,3,4,5], [10,9,7]));

//kata.perform('binaryIntegerSearch_iterative_06.07.14', generateArrayOfIntegers(45, [1], [2]), 2).expect(-1);
//kata.perform('binaryIntegerSearch_iterative_06.07.14', generateArrayOfIntegers(1000, [5, 67, 34]).sort(function(a, b) {
//    return a - b;
//}), 67).expectOtherThan(-1);



//kata.perform('binaryIntegerSearch_recursive_06.07.14', generateArrayOfIntegers(100, [5, 67, 34]).sort(function(a, b) {
//    return a - b;
//}), 67).expectOtherThan(-1);




var todaysKata = new Kata_06_08_14();

kata.announceGroup(todaysKata);

kata.performFromGroup(todaysKata, 'binarySearchRecursive', generateArrayOfIntegers(100, [5, 67, 34]).sort(function(a, b) {
    return a - b;
}), 67);

kata.performFromGroup(todaysKata, 'binarySearchIterative', generateArrayOfIntegers(100, [5, 67, 34], [45]).sort(function(a, b) {
    return a - b;
}), 45).expect(-1);


//
//kata.announce('binarySearch_Recursive_06.08.14', todaysKata.binarySearch);
//
//kata.perform('binarySearch_Recursive_06.08.14', generateArrayOfIntegers(100, [5, 67, 34]).sort(function(a, b) {
//    return a - b;
//}), 67).expectOtherThan(-1);