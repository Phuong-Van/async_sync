var name = "Phuong";

function namedCallback(param) {
    console.log("NamedCallback() called by", param);
}

function testFunction(callback) {

}

testFunction(namedCallback(name));

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

callbackHell();