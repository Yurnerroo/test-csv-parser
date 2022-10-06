import * as fs from "fs";
import path from "path";

async function asyncReadFile(filename: string){
    try {
        const filePath = path.resolve(__dirname, `../${ filename }`);
        console.log(filePath)

        const resultSync = await fs.readFileSync(filePath, "utf-8",);
        console.log(resultSync);

        return {resultSync};
    } catch (err) {
        console.log(err);
        return "Something went wrong"
    }
}

// split data per line and comma

// store it in object

// add data to DB


const run = async () => {
    const resp = await asyncReadFile("./data.csv");
    console.log(JSON.stringify(resp, null, 2))
}

run()
