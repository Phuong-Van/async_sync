// callback
/*
    setTimeout(callback, timeout);

*/
function callback() {
    function prepareItems(table) {
        setTimeout(() => {
            console.log('Serve items to ', table);
        }, 1000);
    }

    console.log("Take order from Table1");
    console.log("Place Table1 order in kitchen");

    prepareItems("Table1");
    console.log("Take order from Table2");
    console.log("Place Table1 order in kitchen");
}

function callback_1() {
    function first(cb) {
        setTimeout(function () {
            return cb('first');
        }, 0);
    }

    function second(cb) {
        return cb('second');
    }

    function third(cb) {
        return cb('third');
    }

    first(function (result1) {
        console.log(result1);
        second(function (result2) {
            console.log(result2);
            third(function (result3) {
                console.log(result3);
            });
        });
    });
}

function disadvantagesCallback() {
    
}

// callback hell
/*
    getData(function (a) {
        getMoreData(a, function (b) {
            getMoreData(b, function (c) {
                getMoreData(c, function (d) {
                    getMoreData(e, function (f) {
                        getMoreData(f, function (g) {
            
                        })
                    })
                })
            })
        })
    })

*/

var a = 1;
var b = 2;
var c = 3;

var result1 = a + b;
var result2 = b + c;

const Items = [
    {
        item: "complimentary drink",
        itemDescription: "This is a complimentary drink."
    }
];

var itemAvailable = true;
// var itemAvailable = false;

function getItems() {
    setTimeout(() => {
        Items.forEach(value => {
            console.log("Serve to Table: ", value.item);
        })
    }, 1000);
}

// promise
function promise() {
    /* function placeOrder(itemObject) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                Items.push(itemObject);
                if (itemAvailable) {
                    resolve();
                }
                else {
                    reject("Item not available");
                }
            }, 2000);
        })
    } */

    // placeOrder({ item: "veg rice", itemDescription: "Rice and vegetables are prepared." }).then(getItems).catch((err) => {
    //     console.log(err);
    // })

    // promise chaining
    /* placeOrder({ item: "veg rice", itemDescription: "Rice and vegetables are prepared." })
    .then(() => {
        console.log("Place Order completed");
        console.log("----- Task 1 -----");
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        })
    })
    .then(() => {
        console.log("----- Task 2 -----");
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        })
    })
    .then(() => {
        console.log("----- Task 3 -----");
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        })
    }) */

    //promise all   

    let fetchPromised = (number, timeout) => {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                console.log(`----- Task ${number} completed. -----`);
                resolve(number);
            }, timeout);
        })
    }


    Promise.all([fetchPromised(1, 500), fetchPromised(2, 1000), fetchPromised(3, 1500)]).then(result => {
        let [task1, task2, task3] = result;
        console.log(`Success: task 1 = ${task1} , task 2 = ${task2}, task 3 = ${task3}`);
    }, (err) => {
        console.log(`Error: ${err}`);
    })
}

// async-await
function asyncawait() {
    async function orderAndGetItems() {
        try {
            let fetchPromised = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("----- Completed -----")
                }, 1000);
            })

            let result = await fetchPromised;

            console.log(result);
        }
        catch (error) {
            console.log("Error " + error);
        }
    }

    orderAndGetItems();
}

// callback();
callback_1();
// promise();
// asyncawait();