import * as fs from "fs";
import path from "path";


function readFile(filename: string){
    try {
        const filePath = path.resolve(__dirname, `../${ filename }`);
        const resultSync = fs.readFileSync(filePath, "utf-8",);
        return resultSync;
    } catch (err) {
        console.log(err);
        return "Something went wrong"
    }
}


function storeToArray(dataPath: string): Array<Array<string | number>> {
    const resp = readFile(dataPath).split("\n");
    let splitData: Array<Array<string>> = [];

    for (let i = 0; i < resp.length; i++) {
    resp[i] = resp[i].replace("\r", "");
    splitData.push(resp[i].split(","));
    }
    return splitData;
}


function addToDatabase(path: string, model: string): void {
    let data = storeToArray(path);
    for (let i = 0; i < data.length; i++) {
        // prisma.model.create(...data[i]);
    }
}


const run = () => {
    addToDatabase("./data.csv", "any_model")
}

run()
