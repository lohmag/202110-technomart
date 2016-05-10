/**
 * Created by nmass on 10.05.2016.
 */
var write_us = document.querySelector(".lost");
var popup_write_us = document.querySelector(".writeus-modal-window");

write_us.addEventListener("click", function (event) {
        event.preventDefault();
        popup_write_us.classList.add("modal-show");
    }
);
var close_write_us = document.querySelector(".writeus-close");
close_write_us.addEventListener("click", function (event) {
        event.preventDefault();
        popup_write_us.classList.remove("modal-show");
    }
);

var small_map = document.querySelector(".small-map");
var popup_map = document.querySelector(".map-modal-window");

small_map.addEventListener("click", function (event) {
        event.preventDefault();
        popup_map.classList.add("modal-show");
    }
);

var close_popup_map = document.querySelector(".map-close");
close_popup_map.addEventListener("click", function (event) {
        event.preventDefault();
        popup_map.classList.remove("modal-show");
    }
);




