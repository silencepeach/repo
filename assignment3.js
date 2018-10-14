const fs = require('fs');
const util = require('util');

const writeFile2 = util.promisify(fs.writeFile);
const readFile2 = util.promisify(fs.readFile);

const start = async() => {
    try{
        await writeFile2("./1.txt", "11111");
        console.log("1.txt created");
        const data1 = await readFile2("./1.txt", "UTF-8");
        await writeFile2("./2.txt", data1 + "22222");
        console.log("2.txt created");
        const data2 = await readFile2("./2.txt", "UTF-8");
        await writeFile2("./3.txt", data2 + "33333");
        console.log("3.txt created");
        const data3 = await readFile2("./3.txt", "UTF-8");
        console.log(data3);
    } catch(err) {
        console.log(err);
    }
};

start();