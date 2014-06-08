'use strict';

/**
 * Created by gabrieltroia on 6/7/14.
 */

function generateArrayOfIntegers(n, toInclude, toExclude) {
    //
    var arr = [],
        toInclude = toInclude || [],
        toExclude = toExclude || [];

    if (toExclude.length >= n / 1.7) throw new Error('The exclusion list is larger than or equal to n/1.7 = ' + n / 1.7 + ', ' +
        'which will cause an infinite loop!');

    if (toInclude.length >= n / 1.7) throw new Error('The inclusion list is larger than or equal to n/1.7 = ' + n / 1.7 + ', ' +
        'which will cause an infinite loop!');

    while (arr.length < n) {
        var random = Math.floor(Math.random() * n * n) + 1;
        // don't let duplicates and elements from to Exclude be pushed in the array
        if (arr.indexOf(random) == -1 && toExclude.indexOf(random) == -1) arr.push(random);
    }

    // Makes sure the given toInclude integeres are places in the array at random positions
    var c = 0;
    // replace some numbers in the given array
    while (c < toInclude.length) {
        var randomPosition = Math.floor(Math.random() * arr.length);

        // make sure the random position found to be replaced is not on the to include list
        if (toInclude.indexOf(arr[randomPosition]) == -1) {
            arr[randomPosition] = toInclude[c];
            c++;
        }
    }

    return arr;
}

function getArgNames(func) {
    var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
        ARGUMENT_NAMES = /([^\s,]+)/g,

        fnStr = func.toString().replace(STRIP_COMMENTS, ''),
        result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);

    return (result === null) ? [] : result;
}