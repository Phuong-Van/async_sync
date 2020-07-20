let message = "Init message"

function changeMessage() {
    setTimeout(() => {
        message = "Changed message"; //API request
    }, 2000);
}

changeMessage ();
console.log(message);