// Traccia 2 - numeri pari da 1 a 20 e media dei dispari

let somma = 0;
let contatore = 0;

console.log("Numeri pari:");

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        // numero pari, lo stampo
        console.log(i);
    } else {
        // numero dispari, lo sommo per fare la media
        somma = somma + i;
        contatore = contatore + 1;
    }
}

let media = somma / contatore;

console.log("La media dei numeri dispari e': " + media);
