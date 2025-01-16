let order = [];
let total = 0;

function addToOrder(item, price) {
    order.push({ item, price });
    total += price;
    updateOrder();
}

function updateOrder() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';
    order.forEach(({ item, price }) => {
        const li = document.createElement('li');
        li.textContent = `${item} - $${price}`;
        orderList.appendChild(li);
    });
    document.getElementById('total').textContent = total;
}

function submitOrder() {
    if (order.length === 0) {
        alert('Your order is empty!');
        return;
    }
    alert('Order submitted! Thank you for your purchase.');
    order = [];
    total = 0;
    updateOrder();
}