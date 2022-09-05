function MyModule() {
    this.hi = function() {
        console.log('hello!');
    };
    this.bye = function() {
        console.log('Bye!');
    };
}

module.exports = MyModule;