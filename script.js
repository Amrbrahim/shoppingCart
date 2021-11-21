"use strict";
/*
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  for (var i = 0; i < cartButton.length; i++) {
    var button = cartButton[i];
    button.addEventListener("click", addToCartClicked);
  }
}
*/

// Side Cart Logic
cartButton.forEach(function (btn) {
  btn.addEventListener("click", addToCart);
});

function addToCart(e) {
  cartDisplay.style.display = "block";
  cartDisplay.style.transform = "translateX(0px)";
  let cartProduct = document.createElement("div");
  cartProduct.classList.add("product-cart-right-side");
  productInCart.appendChild(cartProduct);

  let price =
    e.target.parentElement.nextElementSibling.nextElementSibling.textContent;
  console.log(e.target.parentElement.previousElementSibling.src);

  let cartContent = `
  
    <div class="cart-main-container">
      <img class="cart-img" src="${e.target.parentElement.previousElementSibling.src}">
      <div class="side-cart-content-container">
        <h5 class="cart-product-name">${e.target.parentElement.nextElementSibling.textContent}</h5>
        <p class="cart-price">${price}</p>
        <button class="remove-cart-item"><ion-icon class="product-removing-icon" name="close-circle-outline"></ion-icon></button>
      </div>  
    </div> 
  
  `;
  cartProduct.innerHTML = cartContent;

  //Update Navigation Cart Icon Totals
  cartIconTotal.textContent++;

  // Updating Cart Total Value
  cartTotals.textContent = curPrice + Number(price);
  curPrice = Number(cartTotals.textContent);

  // Remove Item From Cart
  let cartRemovingButton = document.querySelectorAll(".remove-cart-item");
  cartRemovingButton.forEach(function (element) {
    element.addEventListener("click", removeCartItem);
  });
}

function removeCartItem(e) {
  // console.log(e.target.parentElement);
  e.target.parentElement.parentElement.parentElement.parentElement.remove();

  // Update Navigation Cart Totals
  cartIconTotal.textContent--;

  // Update Cart Total Value
  if (cartTotals.textContent <= 0) return;
  cartTotals.textContent =
    curPrice -
    Number(
      Math.round(e.target.parentElement.previousElementSibling.textContent)
    );
  curPrice = Number(Math.round(cartTotals.textContent));
}

//open pages on click
const openBlogPage = function () {
  window.open("blog.html");
};

blog.forEach((el) => {
  el.addEventListener("click", openBlogPage);
});

const blogFooter = document.querySelector(".blog-link");
blogFooter.addEventListener("click", openBlogPage);

contact.addEventListener("click", function () {
  window.open("contact.html");
});

// Scroll to position
let scrolling = function (e) {
  e.preventDefault();
  firstSection.scrollIntoView({ behavior: "smooth", block: "start" });
};
scrollDownText.addEventListener("click", scrolling);
animatedLine.addEventListener("click", scrolling);

// sticky navigation
const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (entry.isIntersecting === false) document.body.classList.add("sticky");
    if (entry.isIntersecting === true) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
  }
);
// entries is an array of what you observe
// here we're only observing slider section so we picked entries[0]
observer.observe(sliderSection);

// Deal Counter
let dealDay = document.querySelector(".day");
let dealHour = document.querySelector(".hour");
let dealMin = document.querySelector(".minute");
let dealSecond = document.querySelector(".second");

let countDownDate = new Date("Jan 31 2022 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime(); // from 1970 till now
  let dateDifference = countDownDate - dateNow; // from 1970 till Jan 2022

  // Get Time Units
  let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (dateDifference % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60
  );

  let minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / 1000 / 60);
  let seconds = Math.floor((dateDifference % (1000 * 60)) / 1000);

  dealDay.textContent = days < 10 ? `0${days}` : days;
  dealHour.textContent = hours < 10 ? `0${hours}` : hours;
  dealMin.textContent = minutes < 10 ? `0${minutes}` : minutes;
  dealSecond.textContent = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDifference < 0) {
    clearInterval(counter);
  }
}, 1000);

////////animated slider text/////////////
const sliderContent = document.querySelector(".slider-content");
let myText = "Get Free shipping on orders over $99.";
let i = 0;
let time = setTimeout(() => {
  let myAnimatedText = setInterval(() => {
    sliderContent.textContent += myText[i];
    i = i + 1;
    if (sliderContent.textContent.length === 37) clearInterval(myAnimatedText);
  }, 25);
}, 900);

/*
setTimeout: allows us to run a function once after the interval of time.
setInterval: allows us to run a function repeatedly, starting after the interval of time, 
then repeating continuously at that interval.
*/
