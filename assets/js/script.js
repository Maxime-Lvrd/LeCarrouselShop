const btnHome = document.querySelector(".btn-home");
const btnCategories = document.querySelector(".btn-categories");
const btnCollections = document.querySelector(".btn-collections");
const btnSale = document.querySelector(".btn-sale");
const categoryLinks = document.querySelector(".category-links");
const collectionLinks = document.querySelector(".collection-links");

btnHome.addEventListener("click", function () {
    btnHome.classList = "col-11 m-1 border btn-home";
    btnCategories.classList = "col-10 m-1 border btn-categories";
    btnCollections.classList = "col-10 m-1 border btn-collections";
    btnSale.classList = "col-10 m-1 border btn-sale";
    categoryLinks.style.display = "none";
    collectionLinks.style.display = "none";
})

btnCategories.addEventListener("click", function () {
    btnCategories.classList = "col-11 m-1 border btn-categories";
    btnHome.classList = "col-10 m-1 border btn-home";
    btnCollections.classList = "col-10 m-1 border btn-collections";
    btnSale.classList = "col-10 m-1 border btn-sale";
    collectionLinks.style.display = "none";
    if (categoryLinks.style.display == "block") {
        categoryLinks.style.display = "none";
        btnCategories.classList = "col-10 m-1 border btn-categories";
    } else {
        categoryLinks.style.display = "block";
    }
})

btnCollections.addEventListener("click", function () {
    btnCollections.classList = "col-11 m-1 border btn-collections";
    btnHome.classList = "col-10 m-1 border btn-home";
    btnCategories.classList = "col-10 m-1 border btn-categories";
    btnSale.classList = "col-10 m-1 border btn-sale";
    categoryLinks.style.display = "none";
    if (collectionLinks.style.display == "block") {
        collectionLinks.style.display = "none";
        btnCollections.classList = "col-10 m-1 border btn-collections";
    } else {
        collectionLinks.style.display = "block";
    }
})

btnSale.addEventListener("click", function () {
    btnSale.classList = "col-11 m-1 border btn-sale";
    btnHome.classList = "col-10 m-1 border btn-home";
    btnCategories.classList = "col-10 m-1 border btn-categories";
    btnCollections.classList = "col-10 m-1 border btn-collections";
    categoryLinks.style.display = "none";
    collectionLinks.style.display = "none";
})

// Carousel 
function moveToSelected(element) {

    if (element == "next") {
        var selected = $(".selected").next();
    } else if (element == "prev") {
        var selected = $(".selected").prev();
    } else {
        var selected = element;
    }

    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();

    $(selected).removeClass().addClass("selected");

    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");

    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");

    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function (e) {
    switch (e.which) {
        case 37: // left
            moveToSelected('prev');
            break;

        case 39: // right
            moveToSelected('next');
            break;

        default:
            return;
    }
    e.preventDefault();
});

$('#carousel div').click(function () {
    moveToSelected($(this));
});

// Inscription - Connexion
const signIn = document.querySelector(".sign-in");
const signUp = document.querySelector(".sign-up");
const connexion = document.querySelector(".connexion");
const inscription = document.querySelector(".inscription");

signIn.addEventListener("click", function () {
    signUp.style.border = "none";
    signIn.style.borderBottom = "1px solid black";
    inscription.style.display = "none";
    connexion.style.display = "block";
});

signUp.addEventListener("click", function () {
    signIn.style.border = "none";
    signUp.style.borderBottom = "1px solid black";
    inscription.style.display = "block";
    connexion.style.display = "none";
});