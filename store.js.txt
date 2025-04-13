let cart = [];

const updateCart = () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');
    
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - €${item.price}`;
        cartItemsContainer.appendChild(listItem);
        totalPrice += parseFloat(item.price);
    });

    totalPriceContainer.textContent = `Kopā: €${totalPrice.toFixed(2)}`;
};

const addToCart = (name, price) => {
    cart.push({ name, price });
    updateCart();
};

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const name = event.target.getAttribute('data-name');
        const price = event.target.getAttribute('data-price');
        addToCart(name, price);
    });
});

