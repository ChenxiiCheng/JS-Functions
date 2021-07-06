/**
 * forEach(() => {}, arg)
 * forEach的第二个参数是改变该forEach的指向
 * @param {function} cb
 */
Array.prototype.myForEach = function (cb) {
  const _arr = this;
  const _len = _arr.length;
  //   const _arg2 = arguments[1] || window;
  const _arg2 = arguments[1];

  for (let i = 0; i < _len; i++) {
    cb.apply(_arg2, [_arr[i], i, _arr]);
  }
};

// const arr = [1, 2, 3, 4, 5];

// arr.forEach((item, index, array) => {
//   console.log(item, index, array);
// });

// arr.myForEach((item, index, array) => {
//   console.log(item, index, array);
// });
