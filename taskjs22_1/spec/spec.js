var app = require('../js/script.js');

describe('app', function() {
  it('pow()', function() {
    var result;
    result = app.pow(2, 4);
    expect(result).toEqual(16);
    console.log('result', result);
  });

  it('pow()', function() {
    var result;
    result = app.pow(2, -4);
    expect(result).toEqual(0.0625);
    console.log('result', result);
  });

  it('pow()', function() {
    var result;
    result = app.pow(2, 0);
    expect(result).toEqual(1);
    console.log('result', result);
  });
});
