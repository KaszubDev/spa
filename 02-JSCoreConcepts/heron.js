// boki trójkąta
//a = 3;
b = 4;
c = 5;
h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let obliczPole = (a,b,c) => {
    let p = 0.5 * (a + b + c);
    return (Math.sqrt(p * ((p-a) * (p-b) * (p-c))));
}

console.log(obliczPole(b,c,h));