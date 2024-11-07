export const sayHello = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name) {
                resolve(`Halo ${name}`);
            } else {
                reject(`Name is empty`);
            }
        }, 1000);
    });
};

export const getBallance = async (name, from) => {
    const balance = await from();
    return { name: name, balance: balance };
};