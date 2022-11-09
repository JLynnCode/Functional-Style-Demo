export function calculateTotal (items, tax) {
  let totalPrice = 0;
  let taxedItemPrice = 0;
  let absoluteTax = Math.abs(tax);

  for(var i = 0; i < items.length; i++){

    if(items[i].taxable == true){

      taxedItemPrice = items[i].price + (items[i].price * absoluteTax);
      totalPrice += taxedItemPrice;
    }else{

      totalPrice += items[i].price;
    }
  }

  return totalPrice;
}
