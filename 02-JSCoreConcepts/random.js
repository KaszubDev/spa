const randomNumbers = () => {
    let arr = [];
    for(let i=0;i<10;i++) {
        arr.push(Math.floor(Math.random() * 16) + 5);
    }
    return arr;
}
console.log(randomNumbers());