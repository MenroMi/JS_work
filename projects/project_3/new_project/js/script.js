window.addEventListener('DOMContentLoaded', () => {

    const tabs = require("./modules/tabs"),
          timer = require("./modules/timer"),
          modal = require("./modules/modal"),
          cards = require("./modules/cards"),
          forms = require("./modules/forms"),
          slider = require("./modules/slider"),
          calc = require("./modules/calc");

        tabs();
        timer();
        modal();
        cards();
        forms();
        slider();
        calc();

});