(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.arrayTrim trim to be empty', function () {
      const arr = [null, null, null];
      expect(nx.arrayTrim(arr)).toEqual([]);
      expect(nx.arrayTrim(arr, null)).toEqual([]);
    });

    test('nx.arrayTrim trim normal', function () {
      const arr = [null, null, null, 'a', 'b', 'c', null];
      expect(nx.arrayTrim(arr)).toEqual(['a', 'b', 'c']);
    });

    test('nx.arrayTrim trim with customize char', function () {
      const arr = [undefined, undefined, undefined, 'a', 'b', 'c', undefined];
      expect(nx.arrayTrim(arr, undefined)).toEqual(['a', 'b', 'c']);
    });
  });
})();
