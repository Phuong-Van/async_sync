function synchronous() {
    task1 = () => {
        console.log("Task 1 is started.");    
        console.log("Task 1 has finished.");
    }
    
    task2 = () => {
        console.log("Task 2 is started.");
        console.log("Task 2 has finished.");
    }
    
    task3 = () => {
        console.log("Task 3 is started.");
        console.log("Task 3 has finished.");
    }
    
    task1 ();
    task2 ();
    task3 ();
}

synchronous();


function print(callback) {  
    callback();
}