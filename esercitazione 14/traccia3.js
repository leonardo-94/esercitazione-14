// Traccia 3 - distributore di bevande

let sceltaValida = false;

while (sceltaValida == false) {
    console.log("Benvenuto nel distributore! Scegli una bevanda: 1 = acqua, 2 = coca cola, 3 = birra");

    let scelta = prompt("Inserisci un numero: 1 = acqua, 2 = coca cola, 3 = birra");

    if (scelta == 1) {
        console.log("E' stata selezionata l'acqua");
        sceltaValida = true;
    } else if (scelta == 2) {
        console.log("E' stata selezionata coca cola");
        sceltaValida = true;
    } else if (scelta == 3) {
        console.log("E' stata selezionata birra");
        sceltaValida = true;
    } else {
        console.log("Scelta non valida, riprova");
    }
}
