import baseGetTag from './.internal/baseGetTag.js'
import isObjectLike from './isObjectLike.js'

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

//是否为布尔值函数
function isBoolean(value) {
  // 判断传入的参数是否为布尔值 true或false。
  return value === true || value === false ||
    (isObjectLike(value) && baseGetTag(value) == '[object Boolean]')
}

export default isBoolean
