//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//var distance = prompt('Inserisci i km da percorrere');
//var age = parseInt(prompt('Inserisci l\'età'));

function generaNumeroCasuale(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function generaBiglietto() {
    var nomePasseggero = document.getElementById('nome_cognome').value;
    document.getElementById('nome_passeggero').innerHTML = nomePasseggero;

    var distance = document.getElementById('percorso_km').value;

    var fasciaEta = document.getElementById('fascia_eta').value;
    console.log(fasciaEta);

    var coefficiente = 0.21;
    var prezzoInt = distance * coefficiente;

    //va applicato uno sconto del 20% per i minorenni
    var sconto;
    if (fasciaEta == 'Minorenne') {
    sconto = 20;
    promo = 'Sconto Minorenne'
    } 
    //va applicato uno sconto del 40% per gli over 65.
    else if (fasciaEta == 'Over 65') {
    sconto = 40;
    promo = 'Sconto Over 65'
    } else {
        promo = 'Prezzo intero'
    }
    console.log(sconto);
    console.log(promo);
    document.getElementById('sconto_passeggero').innerHTML = promo;
    //L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

    if (fasciaEta == 'Minorenne' || fasciaEta == 'Over 65') {
    prezzo = prezzoInt - ((prezzoInt * sconto) / 100);
    } else if (fasciaEta == 'Adulto') {
    prezzo = prezzoInt
    }
    document.getElementById('costo_biglietto').innerHTML = prezzo.toFixed(2) + ' €';

    var carrozza = generaNumeroCasuale(1, 11);
    document.getElementById('carrozza').innerHTML = carrozza;

    var codiceTreno = generaNumeroCasuale(90000, 100000);
    document.getElementById('codice_cp').innerHTML = codiceTreno;
}

function resetBiglietto() {
    var nomePasseggero = document.getElementById('nome_cognome').value = '';
    var distance = document.getElementById('percorso_km').value = '';
    var fasciaEta = document.getElementById('fascia_eta').value = '';
    document.getElementById('nome_passeggero').innerHTML = '';
    document.getElementById('sconto_passeggero').innerHTML = '';
    document.getElementById('costo_biglietto').innerHTML = '';
    document.getElementById('carrozza').innerHTML = '';
    document.getElementById('codice_cp').innerHTML = '';
}
