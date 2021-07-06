/**
 * ES5 Deep clone
 * @param {object} origin
 * @param {object || undefined} target
 * Object.prototype.toString({})  => '[object Object]'
 * Object.prototype.toString([])  => '[object Array]'
 */
function deepClone(origin, target) {
  const tar = target || {};
  const toStr = Object.prototype.toString;
  const arrType = '[object Array]';

  for (const key in origin) {
    // 防止拿到原型上的key
    if (origin.hasOwnProperty(key)) {
      if (typeof origin[key] === 'object' && origin[key] !== null) {
        tar[key] = toStr.call(origin[key]) === arrType ? [] : {};
        deepClone(origin[key], tar[key]);
      } else {
        tar[key] = origin[key];
      }
    }
  }

  return tar;
}
