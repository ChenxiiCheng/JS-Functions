Array.prototype.myFilter = function (cb) {
  const _arr = this;
  const _len = _arr.length;
  const _arg2 = arguments[1];
  const _newArr = [];
  let _item;

  for (let i = 0; i < _len; i++) {
    _item = deepClone(_arr[i]);
    cb.apply(_arg2, [_item, i, _arr]) ? _newArr.push(_item) : '';
  }

  return _newArr;
};
