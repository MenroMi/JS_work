// const head = document.head;
// console.log(document.documentElement);

// console.log(document.body.childNodes);

// console.log(document.querySelector('#current').parentNode.parentNode); // możemy używać właściwości kilka razy

// console.log(document.querySelector("[data-current='3'").nextElementSibling); // można używać data-properties


const children = document.body.childNodes;

for (let child of children) {
    if ( child.nodeName == '#text' || child.nodeName == '#comment') {
        continue;
    }
    console.log(child);
}