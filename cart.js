let cart = [];

function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.innerText = cart.length;
}

function displayCartItems() {
    const cartItemsDiv = document.getElementById("cart-items");
    cartItemsDiv.innerHTML = "";  

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <p>${item.name} - ₹${item.price}</p>
        `;
        cartItemsDiv.appendChild(cartItem);
    });
}

function addToCart(id, name, price) {
    const product = { id, name, price };
    cart.push(product);
    updateCartCount();
    displayCartItems();
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const id = e.target.getAttribute("data-id");
        const name = e.target.getAttribute("data-name");
        const price = e.target.getAttribute("data-price");
        addToCart(id, name, price);
    });
});

document.getElementById("cart-icon").addEventListener("click", () => {
    const cartModal = new bootstrap.Modal(document.getElementById("cart-modal"));
    cartModal.show();
});

document.getElementById("checkout-btn").addEventListener("click", () => {
    alert("Proceeding to checkout!");
});











