import getRawTag from './getRawTag.js'
import objectToString from './objectToString.js'

/** `Object#toString` result references. */
//定义nulnullTag为[object Null]
const nullTag = '[object Null]'
//定义undefinedTag为[object Undefined]
const undefinedTag = '[object Undefined]'

/** Built-in value references. */
//判断是否存在Symbol(Symbol是一种新类型原始类型和Number、string一样)
//Symbol.toStringTag的意思是--字符串用来创建对象默认的字符串描述 @question? 大概是为了创建一个描述信息？
const symToStringTag = Symbol ? Symbol.toStringTag : undefined

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */

//baseGetTag函数
function baseGetTag(value) {
  //判断参数是否等于null
  if (value == null) {
    //如果参数等于null，判断参数是否等于undefined，如果参数等于undefined则返回 undefinedTag否则返回nullTag
    return value === undefined ? undefinedTag : nullTag
  }
  //如果参数不等于null 则判断symToString && symToStringTag in Object(value) @question? 后面的判断不知何意思
  //1、如果成立则返回getRawTag(value)
  //2、如果不成立则返回objectToString(value)
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value)
}

export default baseGetTag
