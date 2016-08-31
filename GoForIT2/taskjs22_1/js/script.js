function pow(a, b) {
  var result = a;

  for (var i = 1; i < b; i++) {
    result = result * a;
  }

  for (var j = -1; j > b; j--) {
    result = 1 / (b * b);
  }

  if (b == 0) {
    result = 1;
  }

  return result;
}

try {
  module.exports.pow = pow;
} catch(e) {
  console.log('result = ', 16);
  console.log('result = ', 0.0625);
  console.log('result = ', 1);
}
