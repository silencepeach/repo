const fs = require('fs');

function writeFile(file, data) {
    return new Promise(function(resolve, reject) {
        fs.writeFile(file, data, function(err) {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

function readFile(file, data) {
    return new Promise(function(resolve, reject) {
        fs.readFile(file, data, function(err, data) {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

writeFile("./1.txt", "11111")
.then(function() {
    console.log("1.txt created");
    return readFile("./1.txt", "UTF-8");
}).catch(function(err) {})
.then(function(data1) {
    return writeFile("./2.txt", data1 + "22222");
}).catch(function(err) {})
.then(function() {
    console.log("2.txt created");
    return readFile("./2.txt", "UTF-8");
}).catch(function(err) {})
.then(function(data2) {
    return writeFile("./3.txt", data2 + "33333");
}).catch(function(err) {})
.then(function() {
    console.log("3.txt created");
    return readFile("./3.txt", "UTF-8");
}).catch(function(err) {})
.then(function(data3) {
    console.log(data3);
}).catch(function(err) {});