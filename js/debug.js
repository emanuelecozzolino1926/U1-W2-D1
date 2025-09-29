// DEBUG ESERCIZIO 3
const somma =  12 + 20; //Ho utilizzato const perchè i numeri non devno essere modificati dal utente finale e hanno un valore fisso
console.log(somma);

//DEBUG ESERCIZIO 4
const x = 12; //Ho utilizzato const perchè il numero non deve essere modificato dal utente finale e ha un valore fisso
//DEBUG ESERCIZIO 6 AGGINGIAMO LA SOTTRAZIONE
console.log(x - 4);

//DEBUG ESERCIZIO 7
const name1 = "john";
const name2 = "John";
const minuscoloName1 = name1.toLowerCase(); //CREIAMO NUOVE VARIABILI (MINUSCOLO e gli diamo il valore della variabile name1 e name2 trasformato in minuscolo)
const minuscoloName2 = name2.toLowerCase();
console.log(minuscoloName1 !== minuscoloName2);

// DEBUG ESERCIZIO 2 (SPOSTATO COSI SOPRA FUNZIONA E SI BLOCCA QUI)
const myName = "Emanuele"; //Ho utilizzato const perchè il mio nome non cambierà mai
console.log(myName);
//INCLUSIONE ESERCIZIO 5
myName = "Giorgio"; //Errore non posso assegnare un nuovo valore a una costante
console.log(myName);
