const jsonPracownicy = {
	pracownicy: [
		{ firstName: "Krystian", lastName: "Dziopa" },
		{ firstName: "Anna", lastName: "Szapiel" },
		{ firstName: "Piotr", lastName: "Żmuda" },
	],
};

console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach((pracownik, index) => {
	console.log(`${index}: ${pracownik.firstName} ${pracownik.lastName}`);
});
