// We must calculate common numbers of progress, which are located in arrays on one first object ( we can do it wth loop or recursion);


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


/*

Search with loops ( but not practical)

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

*/

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