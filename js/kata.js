'use strict';

/**
 * Created by gabrieltroia on 6/7/14.
 */

function Kata(pubsub) {

    var self = this,
        announcedKatas = new Hash(),

        profiler,
        currentResult = null;

    this.announceGroup = function (kataGroupObject) {
        var kataGroupName = kataGroupObject.constructor.name;
        for (var i in kataGroupObject) {
            if (typeof kataGroupObject[i] == 'function')
                self.announce(getKataInGroupName(kataGroupName, i), kataGroupObject[i]);
        }

        return this;
    };

    function getKataInGroupName(kataGroupName, kataName) {
        return kataGroupName + '_' + kataName;
    }

    /**
     * Subscribes the kata to be performed
     *
     * @param kataName
     * @param kataMethod
     */
    this.announce = function (kataName, kataMethod) {
        if (typeof kataName != 'string' || typeof kataMethod != 'function')
            throw new Error('The name must be a string and kata must be a function');

        announcedKatas.push(kataName, kataMethod);
        return this;
    };

    this.performFromGroup = function (kataGroupObject, kataName) {
        var kataGroupName = kataGroupObject.constructor.name,
            args = Array.prototype.splice.call(arguments, 2);

        run(announcedKatas.get(getKataInGroupName(kataGroupName, kataName)), kataName, args);

        return this;
    };

    this.perform = function (kataName) {
        run(announcedKatas.get(kataName), kataName, Array.prototype.splice.call(arguments, 1));

        return this;
    };

    function run(kata, kataName, args) {
        if (!kata) throw new Error('Kata ' + kataName + ' not announced!');

        // some profiling information
        var now = new Date().getTime();

        // reset the profiler with each run
        profiler = {
            basicOperations: 0
        };

        currentResult = kata.apply({}, [profiler].concat(args));

        if (currentResult === undefined) {
            console.error('The kata ' + kataName + ' is not learned yet!');
            return;
        }

        console.info('running', kataName);
        console.info('with ');

        var argumentNames = getArgNames(kata);
        for (var i = 0; i < args.length; i++) {
            console.log(argumentNames[i + 1] + ' = ' + args[i]);
        }

        console.info('and result', currentResult);
        console.info('+' + (new Date().getTime() - now) / 1000 + ' | in', profiler.basicOperations + ' basic operations');

    }

    this.expect = function (result) {
        if (currentResult != result) console.error('Expected', result, 'but got', currentResult);

        return this;
    };

    this.expectOtherThan = function (result) {
        if (currentResult == result) console.error('Expected other than ', result, 'but got', currentResult);

        return this;
    };

    this.performAll = function () {
        announcedKatas.each(function (kataName, kataMethod) {
            self.perform(kataName);
        });
    }
}