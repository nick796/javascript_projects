
/* 
The "Smart Shopping Cart" (Object Logic)

Goal: Create a function createCart() that manages a shopping list.

    The Task: It should return an object with three methods:

        addItem(name, price)

        getTotal() (returns sum of all prices)

        applyDiscount(percentage) (reduces all item prices by that amount).

    Focus: Closures and Array manipulation (reduce and map).
*/
function createCart(){
    let cart = []
    return{
        addItem:function(name,price){
            cart.push({name:name,price:price})
        },
        getTotal:function(){return cart.reduce((total,product)=>{return total+product.price;},0)},
        applyDiscount(percentage){cart = cart.map((item) => {return{...item,price:item.price*(1-percentage/100)}})}
    }
}


const myCart = createCart();
myCart.addItem("Ball",1.2);
myCart.addItem("Laptop",1500);
myCart.addItem("Mouse",20);
console.log("Total money is "+ myCart.getTotal())
myCart.applyDiscount(30)
console.log("Total money after discount is "+ myCart.getTotal())