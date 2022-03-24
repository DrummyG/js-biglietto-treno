let kilometri = parseInt(prompt('quanti kilometri devi fare?'));
let costo = kilometri * 0.21;
let eta = parseInt(prompt('quanti anni hai?'));

if (eta < 18) {
    costo = (costo / 100) * 80
} else if (eta > 59) {
    costo = (costo / 100) * 60
} else {
    costo = costo
}

if (isNaN(kilometri)) {
    alert('importo non corretto, ricaricare')
}

if (isNaN(eta)) {
    alert('età non pervenuta, ricaricare')
}

costo = costo.toFixed(2);

document.getElementById('testo').innerHTML =`
il costo del tuo biglietto equivale a: ${costo} €.`;

console.log(costo);
