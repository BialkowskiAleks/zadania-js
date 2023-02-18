function odwrocNapis(napis) {
	return napis.split("").reverse().join("");
}

const napis = "Akademia108";
const odwroconyNapis = odwrocNapis(napis);
console.log(odwroconyNapis);
