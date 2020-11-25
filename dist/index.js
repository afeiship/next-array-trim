/*!
 * name: @jswork/next-array-trim
 * description: Trim array like string.trim for next.
 * homepage: https://github.com/afeiship/next-array-trim
 * version: 1.0.1
 * date: 2020-11-25 12:48:44
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  var shouldTrim = function (array, char) {
    var first = array[0];
    var last = array[array.length - 1];
    return first === char || last === char;
  };

  var trim = function (array, char) {
    var len_ = array.length - 1;
    var first = array[0];
    var last = array[len_];
    var idx = -1;

    first === char && (idx = 0);
    last === char && (idx = len_);
    idx !== -1 && array.splice(idx, 1);

    if (shouldTrim(array, char)) {
      return trim(array, char);
    }

    return array;
  };

  nx.arrayTrim = function (inArray, inChar) {
    var char = arguments.length === 1 ? null : inChar;
    var shouldEmpty = inArray.every(function (item) { return item === char; });
    return shouldEmpty ? ((inArray.length = 0), inArray) : trim(inArray, char);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.arrayTrim;
  }
})();
