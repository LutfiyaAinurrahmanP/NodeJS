import fs from "fs";
import zlib from "zlib";



function kompress() {
    const source = fs.readFileSync("TutorialDasar/zlib.mjs");
    const result = zlib.gzipSync(source);

    console.info(result.toString());
    fs.writeFileSync("TutorialDasar/zlib-compress.txt", result);
}

function dekompress(){
    const source = fs.readFileSync("TutorialDasar/zlib-compress.txt");
    const result = zlib.unzipSync(source);
    console.info(result.toString());
}

console.info(kompress());