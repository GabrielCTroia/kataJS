/**
 * Created by gabrieltroia on 6/7/14.
 */

kata.announce('bubbleSort_06.07.14', function (profiler, unSortedArray) {
    var tmp,
        swaps = true;

    for (var i = 0; i < unSortedArray.length - 1; i++) {
        for (var j = i + 1; j < unSortedArray.length; j++) {
            if (unSortedArray[j] < unSortedArray[i]) {
                tmp = unSortedArray[i];
                unSortedArray[i] = unSortedArray[j];
                unSortedArray[j] = tmp;
                swaps = true;
                profiler.basicOperations++;
            }

        }
        if (!swaps) return unSortedArray;
        swaps = false;
    }

    return unSortedArray; // now sorted
});


kata.announce('binaryIntegerSearch_iterative_06.07.14', function (profiler, intSortedArray, x) {

    var startSearch = 0,
        endSearch = intSortedArray.length;

    while (startSearch <= endSearch) {
        var median = startSearch + Math.floor((endSearch - startSearch) / 2);

        if (x == intSortedArray[median]) return median;
        else if (x < intSortedArray[median]) endSearch = median - 1;
        else startSearch = median + 1;

        profiler.basicOperations++;
    }
    return -1;
});

kata.announce('binaryIntegerSearch_recursive_06.07.14',
    function binarySearchRecursive_060714(profiler, intSortedArray, key, startSearch, endSearch) {

        startSearch = startSearch || 0;
        endSearch = endSearch || intSortedArray.length;

        var median = startSearch + Math.floor((endSearch - startSearch) / 2);
        profiler.basicOperations++;

        if (endSearch < startSearch) return -1;

        if (key == intSortedArray[median]) return median;
        else if (key < intSortedArray[median]) return binarySearchRecursive_060714(profiler, intSortedArray, key, startSearch, median - 1);
        else return binarySearchRecursive_060714(profiler, intSortedArray, key, median + 1, endSearch);
    });

kata.announce('quickSort_06.07.14', function(profiler, intArray) {

});