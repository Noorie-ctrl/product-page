let cartCount= 0;
let cartItems = [];
let totalPrice = 0;
// select all add to cart buttons
const addItemToCart = document.querySelectorAll("#cartLoad");
// let's get the badge element
const badgeElement = document.getElementById("cartBadge");
const cartItemsList = document.getElementById("cartItemsList");
const cartDropdown = document.getElementById("cartDropdown");
const cartIcon = document.getElementById("cartResult");
const cartTotal = document.getElementById("cartTotal");
// looping through all buttons
cartIcon.addEventListener("click", ()=>{
    cartDropdown.classList.toggle("hidden");
})
addItemToCart.forEach(button => {
    button.addEventListener("click",() =>{
         const name = button.getAttribute("data-name");
         const price = parseFloat(button.getAttribute("data-price"));

        cartItems.push({ name, price })
        cartCount++;
        totalPrice += price;
        badgeElement.classList.remove("hidden");
        badgeElement.textContent = cartCount;

        updateCartDropdown ()
    });
});
 function updateCartDropdown() {
  // Clear list
  cartItemsList.innerHTML = "";

  // Re-add each item
  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.className = "flex justify-between text-sm";
    li.innerHTML = `
      <span>${item.name}</span>
      <span>€${item.price.toFixed(2)}</span>
    `;
    cartItemsList.appendChild(li);
  });

  // Update total price
  cartTotal.textContent = `€${totalPrice.toFixed(2)}`;
}


const swallow = document.getElementById("swallow");
const swallowMenu = document.getElementById("swallowMenu");

swallow.addEventListener("click",(e) =>{
    // e.stopPropagation();
    swallowMenu.classList.toggle("hidden")
});

const rice = document.getElementById("rice");
const riceMenu = document.getElementById("riceMenu");

rice.addEventListener("click", (e)=>{
    riceMenu.classList.toggle("hidden");
})

const soups = document.getElementById("soups");
const soupsMenu = document.getElementById("soupsMenu");

soups.addEventListener("click",(e)=>{
    soupsMenu.classList.toggle("hidden")
});

const toggleMenu = document.getElementById("menuToggle");
const menuMobile = document.getElementById("mobileMenu");

toggleMenu.addEventListener("click", ()=>{
    menuMobile.classList.toggle("hidden");
   
});
