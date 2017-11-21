
module('Shopping cart');

/*
Write a function that calculates total value of goods in a shopping cart,
taking discounts into account.

goods in an array of objects like { name: 'Milk', value: 10, amount: 2 }
discounts is an array of objects like { name: 'Milk', discount: '10%' }
*/

function totalCost(goods, discounts) {
  // Write your code here

  var goodsName = '';
  var arr = [];
  var subTotal = 0;
  var subDiscount = 0;

  for (var i = 0; i < goods.length; i++) {
    for (var j = 0; j < i; j++) {
      if (goods[i].name == goods[j].name) {
        goodsName = goods[i].name;
      }
    }
  }

  for (var i = 0; i < goods.length; i++) {
    if (discounts.length >= 0  && i <= discounts.length) {
      if (goodsName == goods[i].name) {
        arr[i] = i;
      }

      for (var j = 0; j < i; j++) {
        if (discounts[j].name == goods[i].name) {
          var perc = parseInt(discounts[j].discount) / 100;
          subDiscount += goods[i].value * goods[i].amount * perc;

          if (arr.length > 0) {
            for (var k = 0; k < discounts.length; k++) {
              var perc = parseInt(discounts[k].discount) / 100;
              subDiscount += goods[arr[0]].value * goods[arr[0]].amount * perc;
            }
          }
        }
      }
    }

    subTotal += goods[i].value * goods[i].amount;
  }

  var total = subTotal - subDiscount;

  return total;
}

test('Shopping cart', function() {
  equal(totalCost([
    { name: 'Milk', value: 10, amount: 1 },
    { name: 'Vegetables', value: 20, amount: 1 },
    { name: 'Meat', value: 50, amount: 2 }
  ], []), 130, 'Without discounts, simple case');
  // 10 + 20 + 50 * 2 = 130

  equal(totalCost([
    { name: 'Milk', value: 10, amount: 1 },
    { name: 'Vegetables', value: 20, amount: 1 },
    { name: 'Meat', value: 50, amount: 2 },
    { name: 'Milk', value: 10, amount: 5}
  ], []), 180, 'Without discounts, repeated names');
  // 10 + 20 + 50 * 2 + 10 * 5 = 180

  equal(totalCost([
    { name: 'Milk', value: 10, amount: 1 },
    { name: 'Vegetables', value: 20, amount: 1 },
    { name: 'Meat', value: 50, amount: 1 }
  ], [
    { name: 'Vegetables', discount: '50%' }
  ]), 70, 'With discounts, simple case');
  // 10 + 10 + 50 = 70

  equal(totalCost([
    { name: 'Milk', value: 10, amount: 1 },
    { name: 'Vegetables', value: 20, amount: 1 },
    { name: 'Meat', value: 50, amount: 1 },
    { name: 'Salt', value: 5, amount: 3 },
    { name: 'Milk', value: 10, amount: 5}
  ], [
    { name: 'Vegetables', discount: '50%' },
    { name: 'Milk', discount: '10%'}
  ]), 129, 'With discounts, repeated names');
  // 9 + 10 + 50 + 5 * 3 + 9 * 5 = 129
});
