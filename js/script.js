let favorite = document.querySelectorAll("#products .icons .fa-heart");
for (let i = 0; i < favorite.length; i++) {
    favorite[i].addEventListener("click", function(e) {
        e.preventDefault();

        let id = this.closest(".card").id;
        let oldFavorite = localStorage.getItem("favorites");
        let newFavorite;
        if (oldFavorite == null) {
            newFavorite = id;
            this.style.color = "red";
        } else {
            let arr = oldFavorite.split(",");
            if (arr.find(item => item == id) == undefined) {
                newFavorite = oldFavorite + "," + id;
                this.style.color = "red";
            } else {
                let newArr = arr.filter(item => item != id);
                newFavorite = newArr.join(",");
                this.style.color = "white";

            }
        }

        localStorage.setItem("favorites", newFavorite);
        document.querySelector(".cart-favorite").textContent = localStorage.getItem("favorites").split(",").length;

    })

}
let oldFavorite = localStorage.getItem("favorites");
if (oldFavorite != null) {
    let idsArr = localStorage.getItem("favorites").split(",");
    let cards = document.querySelectorAll(".card");
    document.querySelector(".cart-favorite").textContent = idsArr.length;

    for (let i = 0; i < cards.length; i++) {
        if (idsArr.some(item => item == cards[i].id)) {
            cards[i].children[2].firstElementChild.style.color = "red";
        }
    }
}

let cart = document.querySelectorAll("#products .icons .fa-shopping-cart");
for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener("click", function(e) {
        e.preventDefault();
        let id = this.closest(".card").id;
        let oldCart = localStorage.getItem("carts");
        let newCart;
        if (oldCart == null) {
            newCart = id;
            this.style.color = "red";
        } else {
            let arr = oldCart.split(",");
            if (arr.find(item => item == id) == undefined) {
                newCart = oldCart + "," + id;
                this.style.color = "red";
            } else {
                let newArr = arr.filter(item => item != id);
                newCart = newArr.join(",");
                this.style.color = "white";
            }
        }
        localStorage.setItem("carts", newCart);
        document.querySelector(".cart-basket").textContent = localStorage.getItem("carts").split(",").length;
    })

}
let oldCart = localStorage.getItem("carts");
if (oldCart != null) {
    let idsArr = localStorage.getItem("carts").split(",");
    let cards = document.querySelectorAll(".card");
    document.querySelector(".cart-basket").textContent = idsArr.length;

    for (let i = 0; i < cards.length; i++) {
        if (idsArr.some(item => item == cards[i].id)) {
            cards[i].children[2].lastElementChild.style.color = "red";
        }
    }
}