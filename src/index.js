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
    var isStart = first === char;
    var isEnd = last === char;

    if (isStart) {
      array.splice(0, 1);
    }

    if (isEnd) {
      array.splice(len_, 1);
    }

    if (shouldTrim(array, char)) {
      return trim(array, char);
    }

    return array;
  };

  nx.arrayTrim = function (inArray, inChar) {
    var char = arguments.length === 1 ? null : inChar;
    var shouldEmpty = inArray.every(function (item) {
      return item === char;
    });

    return shouldEmpty ? ((inArray.length = 0), inArray) : trim(inArray, char);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.arrayTrim;
  }
})();
