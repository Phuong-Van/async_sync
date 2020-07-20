function promise() {
    let isValid = false;
    let promise = () => {
        return new Promise((resolve, reject) => {
            if (isValid) {
                resolve("---- Successfully ----");
            } else {
                reject(" ---- Failed -----");
            }
        })
    };

    promise().then((result) => {
        console.log(`***** Status: ${result} *****`);
    }).catch((error) => {
        console.log(`***** Error: ${error} *****`);
    })
}

let fetchPromise = (number, timeout) => {
    return new Promise((resolve, result) => {
        setTimeout(() => {
            console.log(`---- Task ${number} is completed. -----`);
            resolve(number);
        }, timeout);
    })
}

function promiseChain() {
    let sum = 0;
    fetchPromise(1, 500)
        .then((result) => {
            console.log("Task 1 : " + result);
            return sum = result;
        })
        .then((result) => {
            console.log("Task 2 : " + result);
            return sum += result;
        })
        .then((result) => {
            console.log("Task 3 : " + result);
            return sum += result;
        })

    .catch((err) => {
        console.log(`Error: ${err}`);
    })
    setTimeout(() => {
        console.log("----- Sum = " + sum + " -----");
    }, 2000);
}

function promiseParallel() {
    Promise.all([fetchPromise(1, 500), fetchPromise(2, 1000), fetchPromise(3, 1500)]).then((result) => {
        let [task1, task2, task3] = result;
        console.log(`Success: task 1 = ${task1} , task 2 = ${task2}, task 3 = ${task3}`);
    })
}

function promiseRace() {
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("One")
        }, 1000);
    })

    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Two")
        }, 500);
    })

    Promise.race([promise1, promise2]).then((result) => {
        //Return promise is faster
        console.log("***** Promise race: " + result + " *****");
    })
}

promise();
// promiseParallel();
// promiseChain();
promiseRace();