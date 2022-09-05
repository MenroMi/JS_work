const promis = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Ready...');
        setTimeout(() => {
            const person = {
                name: 'John',
                age: 34
            };
            
            if ("surname" in person) {
                resolve(person);
            } else {
                reject(person);
            }

        }, 2000);
    }, 2000);
    
})
.then((data) => {
    setTimeout(() => {
        console.log(data);
        setTimeout(() => {
            console.log(data.name);
        }, 2000);
    }, 2000);
    return data;
})
.then((data) => {
    setTimeout(() => {
        data.surname = 'Watson';
    }, 4000);
    return data;
})
.then((data) => {
    setTimeout(() => {
        console.log(data.surname);
    }, 5000);
})
.catch((data) => {
    console.error(`${data.name} dont have surname in database`);
});

// ==========================================

function delay(ms) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });

    return promise;

  }
  
delay(3000).then(() => console.log('выполнилось через 3 секунды'));

