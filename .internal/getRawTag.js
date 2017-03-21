/** Used for built-in method references. */
//将object原型链上的方法、属性放在objectProto
const objectProto = Object.prototype

/** Used to check objects for own properties. */
//拿取hasOwnpropetry方法
const hasOwnProperty = objectProto.hasOwnProperty

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
//拿取toString方法
const nativeObjectToString = objectProto.toString

/** Built-in value references. */
//判断是否存在Symbol(Symbol是一种新类型原始类型和Number、string一样)
//Symbol.toStringTag的意思是--字符串用来创建对象默认的字符串描述 @question? 大概是为了创建一个描述信息？
const symToStringTag = Symbol ? Symbol.toStringTag : undefined

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  const isOwn = hasOwnProperty.call(value, symToStringTag)
  const tag = value[symToStringTag]
  let unmasked = false

  try {
    value[symToStringTag] = undefined
    unmasked = true
  } catch (e) {}

  const result = nativeObjectToString.call(value)
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag
    } else {
      delete value[symToStringTag]
    }
  }
  return result
}

export default getRawTag
