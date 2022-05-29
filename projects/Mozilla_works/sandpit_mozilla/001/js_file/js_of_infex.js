"use strict";

function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
let user = new User("Вася");
let admin = new User('Андрей');
admin.isAdmin = true;
console.log(user.name, user.isAdmin);
console.log(admin.name, admin.isAdmin);
