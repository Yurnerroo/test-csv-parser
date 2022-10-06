import * as fs from "fs";
import path from "path";

function readFile(filename: string){
    try {
        const filePath = path.resolve(__dirname, `../${ filename }`);
        const resultSync = fs.readFileSync(filePath, "utf-8",);
        // console.log(resultSync);
        return resultSync;
    } catch (err) {
        console.log(err);
        return "Something went wrong"
    }
}


// split data per line and comma

const resp = readFile("./data.csv").split("\n");
for (let i = 0; i < resp.length; i++) {
  resp[i] = resp[i].replace("\\r", " ");
  resp[i].split(",");
}
console.log(resp[0]);
// store it in object

// add data to DB

// let qwe = {
//   qwe: "213",
//   asd: 123
// }

// const run = async () => {
//     const resp = readFile("./data.csv");
//     console.log(JSON.stringify(resp, null, 2))
// }

// run()
