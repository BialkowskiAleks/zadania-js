class Ksiazka {
	constructor(tytul, autor, przeczytana) {
		this.tytul = tytul;
		this.autor = autor;
		this.przeczytana = przeczytana;
	}

	opiszKsiazke() {
		return `Książka ma tytuł ${this.tytul}, autorem jest ${
			this.autor
		} i została${this.przeczytana ? "" : " nie"} przeczytana.`;
	}
}

const ksiazka1 = new Ksiazka("Wiedźmin", "Andrzej Sapkowski", false);
const ksiazka2 = new Ksiazka("Pan Tadeusz", "Adam Mickiewicz", true);
const ksiazka3 = new Ksiazka("Lalka", "Bolesław Prus", false);

const tablicaKsiazek = [ksiazka1, ksiazka2, ksiazka3];

function iloscPrzeczytanych(tablica) {
	let ilosc = 0;
	tablica.forEach((ksiazka) => {
		if (ksiazka.przeczytana) {
			ilosc++;
		}
		console.log(ksiazka.opiszKsiazke());
	});
	return ilosc;
}

const iloscPrzeczytanychKsiazek = iloscPrzeczytanych(tablicaKsiazek);
console.log(`Liczba przeczytanych książek: ${iloscPrzeczytanychKsiazek}.`);
