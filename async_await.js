//async function async_await(){}
async_await = async() => {
    try {
        let message = "Empty";
        let fetchPromise = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("----- Completed -----")
                }, 1000);
            })
        }

        message = await fetchPromise();

        console.log("***** Result: " + message + " *****");
    } catch (exception) {
        console.log(`***** Exception: ${exception} *****`);
    }
}

async_await();