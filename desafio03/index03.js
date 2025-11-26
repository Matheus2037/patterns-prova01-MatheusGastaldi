//GRASP - INFORMATION EXPERT

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    
    getPrice() {
        return this.price;
    }
}

class OrderItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getSubtotal() {
        return this.product.getPrice() * this.quantity;
    }
}

class Order {
    constructor() {
        this.items = [];
    }
    
    addItem(item) {
        this.items.push(item);
    }

    getTotal() {
        let total = 0;
        for (const item of this.items) {
            total += item.getSubtotal();
        }
        return "O valor total do pedido é de: R$" + total 
    }
}

const ps5 = new Product("PS5", 4000);
const xbox = new Product("XBOX", 3000);
const item = new OrderItem(ps5, 2);
const item2 = new OrderItem(xbox, 2);
const order = new Order();
order.addItem(item);
order.addItem(item2);

console.log(order.getTotal());