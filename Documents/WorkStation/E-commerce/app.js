// Cart Array
let cart = [];

// Select Elements
const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("total");
const cartCount = document.getElementById("cart-count");

// Add to Cart Buttons
const buttons = document.querySelectorAll(".add-cart");

// Add Event Listener to Buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {

        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        cart.push({
            name,
            price
        });

        updateCart();

        alert(`${name} added to cart!`);
    });
});

// Update Cart Function
function updateCart() {

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        const li = document.createElement("li");

        li.innerHTML = `
            ${item.name} - $${item.price}
            <button onclick="removeItem(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(li);
    });

    totalElement.textContent = total.toLocaleString();
    cartCount.textContent = cart.length;
}

// Remove Item
function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

// Search Cars
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const searchValue = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll(".car-card");

    cards.forEach(card => {

        const title = card.querySelector("h3")
            .textContent
            .toLowerCase();

        if(title.includes(searchValue)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    });
});

// Contact Form Validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Please fill in all fields.");
        return;
    }

    alert("Message sent successfully!");

    form.reset();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});