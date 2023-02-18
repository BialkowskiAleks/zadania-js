let tablicazLiczbami = [0, 1, 2, 3, 4, 5];

function sumaKwadratow(tablica) {
	console.log(tablica);
	let suma = 0;
	tablica.forEach((element) => {
		// suma += element ** 2;
		suma += Math.pow(element, 2);
	});
	return suma;
}
const wynik = sumaKwadratow(tablicazLiczbami);
console.log(`Suma kwadratów elementów w tablicy to: ${wynik}`);
