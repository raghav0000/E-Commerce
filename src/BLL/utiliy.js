export function getPriceAfterDiscount(price, disPercentage) {
    var p = price - price * (disPercentage / 100);
    return p.toFixed(2);
}

export function addToCart(product, cart) {
    var p = cart.find(e => e.product.id == product.id);
    if (p) {
        p.quantity += 1;
    }
    else {
        cart.push({ product: product, quantity: 1 });
    }
}

export function removeFromCart(product, cart) {
    var index = cart.findIndex(e => e.product.id == product.id);
     if(index != -1){
        cart.splice(index,1);
     }
}

export function increaseProductQuantity(product, cart) {
    var p = cart.find(e => e.product.id == product.id);
    if (p) {
        p.quantity += 1;
    }    
}

export function decreaseProductQuantity(product, cart) {
    var p = cart.find(e => e.product.id == product.id);
    if (p) {
        if(p.quantity==1){
            removeFromCart(product,cart);
        }
        else{
            p.quantity -= 1;
        }
       
    } 
}

export function getTotalCartValue(cart){
    var val=0.0;
    for(let e of cart){
        val += e.quantity*getPriceAfterDiscount(e.product.price,e.product.discountPercentage);
    }
    return val.toFixed(2);
}


export function getPriceRangeArray(allProducts) {
    if (!allProducts) return undefined;
    var arr_price = allProducts.map((p) => parseInt(p.price));
    arr_price.sort((a, b) => a - b);
    let small = arr_price[0];
  
    let big = arr_price[arr_price.length - 1];
    let small_range =
      parseInt(small.toString()[0]) * 10 ** (small.toString().length - 1);
    let big_range =
      (parseInt(big.toString()[0]) + 1) * 10 ** (big.toString().length - 1);
    let range = parseInt(big_range / 5);
    let div_range =
      parseInt(range.toString()[0]) * 10 ** (range.toString().length - 1);
    var arr_range = [];
    let value = small_range;
    for (let i = 1; i <= 5; i++) {
      var count = 0;
      if (i == 1) {
        // count=allProducts.filter(product=>{
        //    return product.price%2==0
        // }).length;
        count = allProducts.filter((product) => {
          return product.price >= value && product.price <= div_range;
        }).length;
        arr_range.push({ start: value, end: div_range, count: count });
        value = div_range;
      } else if (i == 5) {
        count = allProducts.filter((product) => {
          return product.price >= value && product.price <= value + div_range;
        }).length;
        arr_range.push({ start: value, end: value + div_range, count: count });
      } else {
        count = allProducts.filter((product) => {
          return product.price >= value && product.price <= value + div_range;
        }).length;
        arr_range.push({ start: value, end: value + div_range, count: count });
        value += div_range;
      }
    }
  
    return arr_range;
  }

