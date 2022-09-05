function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    };
}

let family = marry({
    name: "John"
}, {
    name: "Ann"
});

delete family.father;
delete family.mother.husband;

console.log(family);
console.log(family.man);