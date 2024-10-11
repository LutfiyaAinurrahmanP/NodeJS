function samplePromise() {
    return Promise.resolve("lutfi");
}


const name = await samplePromise();
console.info(name);