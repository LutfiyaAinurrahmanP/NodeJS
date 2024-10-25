export const sum = (first, last) => {
    return first + last;
}

export const sumAll = (numbers) => {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

// const check = sumAll([5]);
// console.log(check);
