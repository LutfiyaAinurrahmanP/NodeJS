import { URL } from "url";

const youtube = new URL("https://youtube.com");

youtube.host = "www.nonton.com";
youtube.searchParams.append("status", "premium");

console.info(youtube.toString());
console.info(youtube.href);
console.info(youtube.protocol);
console.info(youtube.host);
console.info(youtube.pathname);
console.info(youtube.searchParams);