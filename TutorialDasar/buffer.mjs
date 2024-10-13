const buffer = Buffer.from("Lutfiya");
console.info(buffer.toString());

buffer.reverse();
buffer.toString();
console.info(buffer.toString());

// buffer encoding

const buffer2 = Buffer.from("Lutfiya ainurrahman", "utf-8");
console.info(buffer2.toString("base64"));
console.info(buffer2.toString("hex"));

const buffer3 = Buffer.from("awokoakoakow", "base64url");
console.info(buffer3.toString("utf8"));