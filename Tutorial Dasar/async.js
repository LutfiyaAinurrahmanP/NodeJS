function samplePromise() {
    return Promise.resolve("lutfi");
}

async function run() {
    const name = await samplePromise();
    console.info(name);
}

run();