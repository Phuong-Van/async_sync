// Promise.resolve(1)
// .then(() => 2)
// .then(console.log)

const axios = require('axios');

function displayData(data) {
    setTimeout(() => {
        console.log(data);
    }, 5000);
}

function getData(callback) {
    var listStudent = [];

    listStudent = axios.get('https://5f113fc065dd950016fbd1c6.mockapi.io/api/v1/students')
        .then(response => {
            return response.data;
        });

    callback(listStudent);
}

getData(displayData);