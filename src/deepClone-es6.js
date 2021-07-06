function deepClone(origin) {
  const toStr = Object.prototype.toString;

  if (origin == undefined || typeof origin !== 'object') {
    return origin;
  }

  if (origin instanceof Date) {
    return new Date(origin);
  }

  if (origin instanceof RegExp) {
    return new RegExp(origin);
  }

  const target = new origin.constructor();

  for (const key in origin) {
    if (origin.hasOwnProperty(key)) {
      target[key] = deepClone(origin[key]);
    }
  }

  return target;
}
