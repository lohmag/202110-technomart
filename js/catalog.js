/**
 * Created by Nikita on 10.05.2016.
 */
var item_buy_list = document.querySelectorAll(".item-buy");
var popup_incart = document.querySelector(".incart-modal-window");
for (var i = 0; i < item_buy_list.length; i++) {
    item_buy_list[i].addEventListener("click", function (event) {
            event.preventDefault();
            popup_incart.classList.add("modal-show");
        }
    );
}

var close_popup_incart = document.querySelector(".incart-close");
var continue_shopping = document.querySelector(".continue-shopping");
    close_popup_incart.addEventListener("click", function (event) {
            event.preventDefault();
            popup_incart.classList.remove("modal-show");
        }
    );
continue_shopping.addEventListener("click", function (event) {
        event.preventDefault();
        popup_incart.classList.remove("modal-show");
    }
);