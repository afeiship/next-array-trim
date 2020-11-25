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

    return shouldTrim(array, char) ? trim(array, char) : array;
  };

  nx.arrayTrim = function (inArray, inChar) {
    var char = arguments.length === 1 ? null : inChar;
    return trim(inArray, char);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.arrayTrim;
  }
})();
