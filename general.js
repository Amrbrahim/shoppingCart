"use strict";
let cartButton = document.querySelectorAll(".btn");
let cartDisplay = document.querySelector(".cart-total");
let cartBtnClose = document.querySelector(".cart-closing-btn");
let product = document.querySelectorAll(".product");
let productInCart = document.querySelector(".product-in-cart");
let cartTotals = document.querySelector(".cart-total-price");
let cartIconTotal = document.querySelector(".cart-items-number");
let cartNavButton = document.querySelector(".cart-number");
let checkout = document.querySelector(".checkout-view");
let slides = document.querySelectorAll(".slider-img");
let scrollDownText = document.querySelector(".scroll-down");
let firstSection = document.querySelector(".main");
let animatedLine = document.querySelector(".animated-bar");
let sliderSection = document.querySelector(".slider");
let headerNav = document.querySelector(".nav-list");
let modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const register = document.querySelector(".login-link");
const contact = document.querySelector(".contact-method");
const blog = document.querySelectorAll(".blog-btn");
let curPrice = 0;
cartIconTotal.textContent = "0";

// modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

register.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//Smooth Scrolling//
headerNav.addEventListener("click", function (e) {
  e.preventDefault();
  //console.log(e.target);
  if (!e.target.classList.contains("section-scroll")) return;
  const goTo = e.target.getAttribute("href");
  document
    .querySelector(goTo)
    .scrollIntoView({ behavior: "smooth", block: "center" });
});

// Closing Cart Sidebar On Click
cartBtnClose.addEventListener("click", function (e) {
  e.preventDefault();
  cartDisplay.style.display = "none";
});

// Navigation Cart
cartNavButton.addEventListener("click", function (e) {
  e.preventDefault();
  cartDisplay.style.display = "block";
  cartDisplay.style.transform = "translateX(0px)";
});
