import tabs from "./modules/tabs";
import timer from "./modules/timer";
import modal from "./modules/modal";
import cards from "./modules/cards";
import forms from "./modules/forms";
import slider from "./modules/slider";
import calc from "./modules/calc";
import {openWindow} from "./modules/modal";

window.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openWindow(".modal", modalTimerId), 10000); // when we want open modal window
    //after some time, and clear interval later

    tabs();
    timer();
    modal("[data-modal]", '.modal', modalTimerId);
    cards();
    forms(modalTimerId);
    slider();
    calc();

});