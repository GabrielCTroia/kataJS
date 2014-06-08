'use strict';

/**
 * Created by gabrieltroia on 6/7/14.
 */

function Hash(tableSize) {

    tableSize = tableSize || 100;

    /**
     * The hash table as an array at its base
     * @type {Array}
     */
    var keys = [],
        values = [];

    // public

    this.push = function (key, value) {
        if (typeof key != 'string') key = key.toString();

        if (keys.indexOf(key) == -1) {
            keys.push(key);

            values[hash(key)] = value;
            this.length++;
        }
    };

    this.get = function (key) {
        return values[hash(key)];
    };

    this.each = function (fn) {
        for (var i = 0; i < keys.length; i++) fn(keys[i], values[hash(keys[i])]);
    };

    this.length = 0;

    // private

    /**
     * Creates the hash function
     * Inspired from http://erlycoder.com/49/javascript-hash-functions-to-convert-string-into-integer-hash-
     * !! not sure if the best, since it creates very big hash keys.
     * @param key
     * @returns {number}
     */
    function hash(key) {
        var hash = 0;
        if (key.length == 0) return hash;
        for (var i = 0; i < key.length; i++) {
            var char = key.charCodeAt(i);

            hash = ((hash<<5)-hash)+char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }

    this._values = values;
    this._keys = keys;

}
