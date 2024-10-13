import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin, // fungsi sama seperti cin di c++
    output: process.stdout // fungsi sama seperti cout di c++
});

input.question("siapa nama anda? : ", function(nama){ // menginputkan inputan
    console.info(`hello ${nama}`);// menampilkan output yang sudah diinputkan
    input.close(); // menutup program inputan
});