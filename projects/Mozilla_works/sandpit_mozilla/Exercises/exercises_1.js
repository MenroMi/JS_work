/*
Есть список учеников в массиве, которые хотят поиграть в игру:
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

Но команд должно быть 3 по 3 человека.
Задача: написать функциюю которая будет принимать в себя массив строк:
    а) сортируя имена по алфавиту,
    б) распределит 3 группы по 3 человека ( всё по порядку ),
    в) и добавляет строку с оставшемися студентами ( если есть, если нет, то прочерк)
================================================
There is a list of students in an array who want to play the game:
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

But teams should be 3 to 3 people.
Task: write a function that will take an array of strings:
     a) sorting the names alphabetically,
     b) distribute 3 groups of 3 people (everything in order),
     c) and adds a line with the remaining students (if there is, if not, then a dash)
*/

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi'];

function sortStudentsByGroups(arr) {

  arr = arr.sort();

  let stringos = 'Оставшиеся студенты: ';
  let res = [[], [], []];
  
  arr.forEach((item, i) => {
    if ( i <= 2) {
      res[0].push(item);
    } else if (i <= 5) {
      res[1].push(item);
    } else if (i <= 8) {
      res[2].push(item);
    } else {
      stringos += `${item}, `;
    }
});

  stringos = stringos.length > 21 ? stringos = stringos.trim().slice(0, -1) : stringos += '-';
  res.push(stringos);

  return res;
}

console.log(sortStudentsByGroups(students));


// ====================== Another solutions:

/*
  let groupOne = [],
  groupTwo = [],
  groupThree = [],
  restOfClassmates = 'Оставшиеся студенты: ';

  for (let i = 0; i < arr.length; i++) {
    if (i < 3) {
      groupOne.push(arr[i]);
    } else if (i === 3 || i < 6) {
      groupTwo.push(arr[i]);
    } else if ( i === 6 || i < 9) {
      groupThree.push(arr[i]); 
    } else if (i === 9 || i > 9){
      restOfClassmates += `${arr[i]}, `;
    } else {
      break;
    }
  }
  
  if (restOfClassmates.length == 21) {
    restOfClassmates += '-';
  } else {
    restOfClassmates = restOfClassmates.trim().slice(0, -1);
  }

  let result = [groupOne, groupTwo, groupThree, restOfClassmates];

  console.log(result);
*/

// =====

/*

function sortStudentsByGroups(arr) {
  const sortArr = arr.sort();
  console.log(sortArr);
 
  const resultArr = [], groupArr = [];
 
  sortArr.forEach(item => {
    groupArr.push(item);
 
    if (groupArr.length === 3) {
      resultArr.push(groupArr.slice());
      groupArr.length = 0;
    }
  });
 
  resultArr.push(`Оставшиеся студенты: ${groupArr.length === 0 ? '-' : groupArr.join(', ')}`);
  return resultArr;
}

*/