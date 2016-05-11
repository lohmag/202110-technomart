/**
 * Created by nmass on 10.05.2016.
 */
var write_us = document.querySelector(".lost");
var popup_write_us = document.querySelector(".writeus-modal-window");
if (write_us) {
    write_us.addEventListener("click", function (event) {
            event.preventDefault();
            popup_write_us.classList.add("modal-show");
        }
    );
}
var close_write_us = document.querySelector(".writeus-close");
if (close_write_us) {
    close_write_us.addEventListener("click", function (event) {
            event.preventDefault();
            popup_write_us.classList.remove("modal-show");
        }
    );
}
var small_map = document.querySelector(".small-map");
var popup_map = document.querySelector(".map-modal-window");
if (small_map) {
    small_map.addEventListener("click", function (event) {
            event.preventDefault();
            popup_map.classList.add("modal-show");
        }
    );
}
var close_popup_map = document.querySelector(".map-close");
if (close_popup_map) {
    close_popup_map.addEventListener("click", function (event) {
            event.preventDefault();
            popup_map.classList.remove("modal-show");
        }
    );
}

/**
 * Created by Nikita on 10.05.2016.
 */
var item_buy_list = document.querySelectorAll(".item-buy");
var popup_incart = document.querySelector(".incart-modal-window");
if (item_buy_list) {
    for (var i = 0; i < item_buy_list.length; i++) {
        item_buy_list[i].addEventListener("click", function (event) {
                event.preventDefault();
                popup_incart.classList.add("modal-show");
            }
        );
    }
}
var close_popup_incart = document.querySelector(".incart-close");
if (close_popup_incart) {
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
}
