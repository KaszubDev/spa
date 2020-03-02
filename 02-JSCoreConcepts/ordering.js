const reverse = (arr) => {
    return arr.reverse();
}

const sort = function(arr) {
    return arr.sort();
}

const even = function(arr) {
    let array = [];
    arr.map(item => item % 2 == 0 ? array.push(item) : null);
    return array;
}

numbers = [8,3,2,1,5,4,6];
console.log(numbers);
console.log(reverse(numbers));
console.log(even(numbers));
console.log(reverse(even(numbers)));
console.log(even(sort(numbers)));
