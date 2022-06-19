function learnJs(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log(`Я прошёл этот урок!`);
}
  
learnJs('JavaScript', done); // została przekazana wyłącznie funkcja bez wywołania

// =====================
function lang(example) {
    console.log(`Я учу: ${example}`);
  }
function learnJS(lang, callback) {
    lang('JavaScript');
    callback();
  }
function done() {
    console.log('Я прошел этот урок!');
  }
   
  learnJS(lang, done);


  // ==================
function first(lang, callback) {
    setTimeout(function() {
        console.log('Это первый урок!');
    }, 500);
    callback(lang);
}
 
function second(lang) {
    console.log(`Я учу: ${lang}`);
}
first("Java", second);