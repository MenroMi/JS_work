let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        
        }, {
            
            name: 'Ann',
            progress: 18

        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};


function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;


    for (let course of Object.values(data)) {

        if (Array.isArray(course)) {
            students += course.length;
            
            for ( let i = 0; i < course.length; i++) {
                total += course[i].progress; // wybieramy drugą właściwość włożonego obiektu
            }
            // course.forEach((numb) => {
            // total += numb.progress;
            // });
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for (let k = 0; k < subCourse.length; k++) {
                    total += subCourse[k].progress;
                }
            }
        }
    }

    return total / students;
    // return total / students;

}


// console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;
        
        for ( let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for ( let subData of Object.values(data)) {
            const subDataArray = getTotalProgressByRecursion(subData);
            total[0] += subDataArray[0];
            total[1] += subDataArray[1];
        }
        
        return total;
    }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0]/result[1]);

// ======================

function factorial(n) {
    if (!Number.isInteger(n) || typeof(n) === 'string' || n < 0) {
        return 'Error';
    } else {
        return (n === 0 || n < 0) ? 1 : n * factorial(n - 1);
    }
}

console.log(factorial(5));
