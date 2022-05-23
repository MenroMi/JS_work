let user = {
  name: "John",
  surname: "Smith",
  fullName(value) {
      [this.name, this.surname] = value.split(' ');
      return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

console.log(user.fullName('Alice Cooper')); // John Smith (*)

// срабатывает сеттер!
admin.fullName('Alice Cooper'); // (**)
console.log(admin.name); // Alice
console.log(admin.surname); // Cooper