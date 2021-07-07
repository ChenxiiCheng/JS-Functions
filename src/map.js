Array.prototype.myMap = function (cb) {
  const _arr = this
  const _len = _arr.length
  const _arg2 = arguments[1]
  const _newArr = []
  const _item, _res

  for (let i = 0; i < _len; i++) {
    _item = deepClone(_arr[i])
    _res = cb.apply(_arg2, [_item, i, _arr])
    _res && _newArr.push(_res)
  }

  return _newArr
}