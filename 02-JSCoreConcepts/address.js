title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/
// Case 1
console.log(title + " " + name + " " + surname);
console.log("ul. " + street);
console.log(zip + " " + city);
console.log(country.toUpperCase());

//Case 2
country = country.toUpperCase();
console.log(`${title} ${name} ${surname}\nul. ${street}\n${zip} ${city}\n${country}`);