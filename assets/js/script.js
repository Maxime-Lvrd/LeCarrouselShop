const btnHome = document.querySelector(".btn-home");
const btnCategories = document.querySelector(".btn-categories");
const btnCollections = document.querySelector(".btn-collections");
const btnSale = document.querySelector(".btn-sale");
const categoryLinks = document.querySelector(".category-links");
const collectionLinks = document.querySelector(".collection-links");

btnHome.addEventListener("click", function() {
    btnHome.classList = "col-11 m-1 border btn-home";
    btnCategories.classList = "col-10 m-1 border btn-categories";
    btnCollections.classList = "col-10 m-1 border btn-collections";
    btnSale.classList = "col-10 m-1 border btn-sale";
    categoryLinks.style.display = "none";
    collectionLinks.style.display = "none";
})

btnCategories.addEventListener("click", function() {
    btnCategories.classList = "col-11 m-1 border btn-categories";
    btnHome.classList = "col-10 m-1 border btn-home";
    btnCollections.classList = "col-10 m-1 border btn-collections";
    btnSale.classList = "col-10 m-1 border btn-sale";
    collectionLinks.style.display = "none";
    if (categoryLinks.style.display == "block") {
        categoryLinks.style.display = "none";
    } else {
        categoryLinks.style.display = "block";
    }
})

btnCollections.addEventListener("click", function() {
    btnCollections.classList = "col-11 m-1 border btn-collections";
    btnHome.classList = "col-10 m-1 border btn-home";
    btnCategories.classList = "col-10 m-1 border btn-categories";
    btnSale.classList = "col-10 m-1 border btn-sale";
    categoryLinks.style.display = "none";
    if (collectionLinks.style.display == "block") {
        collectionLinks.style.display = "none";
    } else {
        collectionLinks.style.display = "block";
    }
})

btnSale.addEventListener("click", function() {
    btnSale.classList = "col-11 m-1 border btn-sale";
    btnHome.classList = "col-10 m-1 border btn-home";
    btnCategories.classList = "col-10 m-1 border btn-categories";
    btnCollections.classList = "col-10 m-1 border btn-collections";
    categoryLinks.style.display = "none";
    collectionLinks.style.display = "none";
})