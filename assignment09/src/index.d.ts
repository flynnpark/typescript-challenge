declare module 'lodash' {
  /**
   * Gets the first element of `array`.
   *
   * @since 0.1.0
   * @alias first
   * @category Array
   * @param {Array} array The array to query.
   * @returns {*} Returns the first element of `array`.
   * @see last
   * @example
   *
   * head([1, 2, 3])
   * // => 1
   *
   * head([])
   * // => undefined
   */
  function head<T>(array: T[]): T | undefined;

  /**
   * Checks if `path` is a direct or inherited property of `object`.
   *
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   * @see has, hasPath, hasPathIn
   * @example
   *
   * const object = create({ 'a': create({ 'b': 2 }) })
   *
   * hasIn(object, 'a')
   * // => true
   *
   * hasIn(object, 'b')
   * // => false
   */
  function hasIn<T>(object: T, key: string): boolean;

  /**
   * Checks if `value` is classified as a boolean primitive or object.
   *
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
   * @example
   *
   * isBoolean(false)
   * // => true
   *
   * isBoolean(null)
   * // => false
   */
  function isBoolean(value: any): boolean;

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * toString(null)
   * // => ''
   *
   * toString(-0)
   * // => '-0'
   *
   * toString([1, 2, 3])
   * // => '1,2,3'
   */
  function toString(value: any): string;

  /**
   * Splits `string` by `separator`.
   *
   * **Note:** This method is based on
   * [`String#split`](https://mdn.io/String/split).
   *
   * @since 4.0.0
   * @category String
   * @param {string} [string=''] The string to split.
   * @param {RegExp|string} separator The separator pattern to split by.
   * @param {number} [limit] The length to truncate results to.
   * @returns {Array} Returns the string segments.
   * @example
   *
   * split('a-b-c', '-', 2)
   * // => ['a', 'b']
   */
  function split(
    string: string,
    separator?: RegExp | string,
    limit?: number
  ): string[];

  /**
   * Checks if `path` is a direct property of `object`.
   *
   * @since 5.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   * @see has, hasIn, hasPathIn
   * @example
   *
   * const object = { 'a': { 'b': 2 } }
   * const other = create({ 'a': create({ 'b': 2 }) })
   *
   * hasPath(object, 'a.b')
   * // => true
   *
   * hasPath(object, ['a', 'b'])
   * // => true
   */
  function hasPath(object: object, param: string[] | string): boolean;

  /**
   * Iterates over elements of `array`, returning an array of all elements
   * `predicate` returns truthy for. The predicate is invoked with three
   * arguments: (value, index, array).
   *
   * **Note:** Unlike `remove`, this method returns a new array.
   *
   * @since 5.0.0
   * @category Array
   * @param {Array} array The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   * @see pull, pullAll, pullAllBy, pullAllWith, pullAt, remove, reject
   * @example
   *
   * const users = [
   *   { 'user': 'barney', 'active': true },
   *   { 'user': 'fred',   'active': false }
   * ]
   *
   * filter(users, ({ active }) => active)
   * // => objects for ['barney']
   */
  function filter<T>(array: T[], predicate: Function): T[];

  /**
   * Checks if `predicate` returns truthy for **all** elements of `array`.
   * Iteration is stopped once `predicate` returns falsey. The predicate is
   * invoked with three arguments: (value, index, array).
   *
   * **Note:** This method returns `true` for
   * [empty arrays](https://en.wikipedia.org/wiki/Empty_set) because
   * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
   * elements of empty arrays.
   *
   * @since 5.0.0
   * @category Array
   * @param {Array} array The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   * @example
   *
   * every([true, 1, null, 'yes'], Boolean)
   * // => false
   */
  function every<T>(array: T[], predicate: Function): boolean;

  /**
   * Creates an array of values by running each element of `array` thru `iteratee`.
   * The iteratee is invoked with three arguments: (value, index, array).
   *
   * @since 5.0.0
   * @category Array
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   * @example
   *
   * function square(n) {
   *   return n * n
   * }
   *
   * map([4, 8], square)
   * // => [16, 64]
   */
  function map<T>(array: T[], iteratee: Function): T[];
}
