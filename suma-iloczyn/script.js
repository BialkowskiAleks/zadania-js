let tablicazLiczbami = [1, 2, 3, 4, 5, 6];

function sumaIloczyn(jestemMiejscemwKtorePotemWsadziszTablice) {
	console.log(jestemMiejscemwKtorePotemWsadziszTablice);
	let suma = 0;
	let iloczyn = 1;

	jestemMiejscemwKtorePotemWsadziszTablice.forEach((element) => {
		// suma += element

		// iloczyn!
		iloczyn = iloczyn * element;
		// console.log(iloczyn);

		// suma!
		suma = suma + element;
		// console.log(suma);
	});

	return `suma to: ${suma} , iloczyn to: ${iloczyn} `;
}

console.log(sumaIloczyn(tablicazLiczbami));
