function doHomework(subject, callback){
    console.log(`Starting exercises ${subject}`);
    callback();
}

function alertFinished(){
    console.log("==> Finished.");
}

doHomework('math', function () {
    console.log("==> Finished.");
})

doHomework("physical education", alertFinished);


function callbackHell() {
    function first(cb) {
        setTimeout(function() {
            return cb('first');
        }, 0);
    }

    function second(cb) {
        return cb('second');
    }

    function third(cb) {
        return cb('third');
    }

    first(function(result1) {
        console.log(result1);
        second(function(result2) {
            console.log(result2);
            third(function(result3) {
                console.log(result3);
            });
        });
    });
}

// callbackHell();

