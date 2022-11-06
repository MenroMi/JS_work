"use strict";


const mergeTwoLists = function(list1, list2) {

    const res = [];

    if(list1.length === 0 && list2.length === 0) {
        return list1;
    } else {

        for(let i = 0; i < list1.length; i++) {
            res.push(list1[i]);
            for(let k = 0; k < list2.length; k++) {
                res.push(list2[k]);
            }
        }

    }

    function compareNum(a, b) {
        return a-b;
    }

    return res.sort(compareNum);

};


console.log(mergeTwoLists([1,22,4], [111, 33, 4]));
console.log(mergeTwoLists([], [1, 31312, 23424]));