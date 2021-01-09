(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  var trim = function (array, char) {
    var len_ = array.length - 1;
    var first = array[0];
    var last = array[len_];
    var idx = -1;
    var hasStart = first === char;
    var hasEnd = last === char;

    hasStart && (idx = 0);
    hasEnd && (idx = len_);
    idx !== -1 && array.splice(idx, 1);

    return hasStart || hasEnd ? trim(array, char) : array;
  };

  nx.arrayTrim = function (inArray, inChar) {
    var char = arguments.length === 1 ? null : inChar;
    return trim(inArray, char);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.arrayTrim;
  }
})();
