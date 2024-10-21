export const sayHello = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(name){
                resolve(`Halo ${name}`);
            }else{
                reject(`Name is empty`);
            }
        }, 1000);
    });
};