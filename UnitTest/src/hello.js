export const hello = (name) => {
    if (name) {
        return `hello ${name}`;
    }
    else {
        throw new Error("Name is required");
    }
};