function Kata_06_08_14() {

    var self = this;

    this.binarySearchRecursive = function(profiler, sortedArray, key, startSearch, endSearch) {

        startSearch = startSearch || 0;
        endSearch = endSearch || sortedArray.length;

        if (endSearch < startSearch) return -1;

        var median = startSearch + Math.floor((endSearch - startSearch) / 2);

        profiler.basicOperations++;

        if (sortedArray[median] == key) return median;
        else if (key < sortedArray[median]) return self.binarySearchRecursive(profiler, sortedArray, key, startSearch, median - 1);
        else return self.binarySearchRecursive(profiler, sortedArray, key, median + 1, endSearch);
    };

    this.binarySearchIterative = function(profiler, sortedArray, key) {

        var startSearch = 0,
            endSearch = sortedArray.length;

        while (startSearch <= endSearch) {

            var median = startSearch + Math.floor((endSearch - startSearch) / 2);

            profiler.basicOperations++;

            if (sortedArray[median] == key) return median;
            else if (key < sortedArray[median]) endSearch = median - 1;
            else startSearch = median + 1;
        }

        return -1;
    }

}