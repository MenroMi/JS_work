"use strict";

let count = 0;

for (let i = 0; i < 1e9; i++) {
    count++;
    if (count >= 1e9) {
        alert('done');
    }
}
