function sortowanieBabelkowe(tablica) {
	let zamieniono;
	do {
		zamieniono = false;
		for (let i = 0; i < tablica.length - 1; i++) {
			if (tablica[i] > tablica[i + 1]) {
				[tablica[i], tablica[i + 1]] = [tablica[i + 1], tablica[i]];
				zamieniono = true;
			}
		}
	} while (zamieniono);

	return tablica;
}

const tablicaDoPosortowania = [
	12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1,
];

console.log(sortowanieBabelkowe(tablicaDoPosortowania));
