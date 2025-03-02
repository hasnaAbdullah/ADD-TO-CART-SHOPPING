const iconCart = document.querySelector(".cart-icon");
const closeBtn = document.getElementById("close");
const body = document.querySelector("body");
const productList = document.getElementById("product-list");
const addButtons = document.querySelectorAll(".add-to-cart");
let allProducts = [];

function addDataToHTML() {
  productList.innerHTML = "";
  //   console.log(allProducts);
  if (allProducts.length > 0) {
    for (const product of allProducts) {
      const newProduct = document.createElement("div");
      newProduct.classList.add("product");
      newProduct.innerHTML = `
        <img class="product-img" src="image/${product.id}.png" alt="" />
        <h4 class="title">${product.name}</h4>
        <p class="price">$${product.price}</p>
        <div>
          <button class="add-to-cart">Add To Cart</button>
        </div>
          `;
      productList.appendChild(newProduct);
    }
  }
}

console.log(productList.children);
function getProductsData() {
  fetch("product.json")
    .then((response) => response.json())
    .then((dataList) => {
      allProducts = dataList;
      addDataToHTML();
    });
}
getProductsData();

iconCart.addEventListener("click", () => {
  body.classList.toggle("cart-show");
  //   console.log(iconCart);
});
closeBtn.addEventListener("click", () => {
  body.classList.toggle("cart-show");
  //   console.log(iconCart);
});
