import fs from "fs";

const writer = fs.createWriteStream("target.log");
writer.write("lutfiya\n");
writer.write("Ainurrahman\n");
writer.write("Prasetyo");
writer.close();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data)=> {
    console.info(data.toString());
    reader.close();
});