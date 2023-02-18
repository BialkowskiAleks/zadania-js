function posortujLitery(napis) {
	return napis.split("").sort().join("");
}

const napis = "Akademia108";
const posortowanyNapis = posortujLitery(napis);
console.log(posortowanyNapis);
