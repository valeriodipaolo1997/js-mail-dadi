/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Mail
Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.*/

//genero numeri casuali da 1 a 6
const computerNumber = Math.floor(Math.random()*6 + 1);
const playerNumber = Math.floor(Math.random()*6 + 1);

console.log(computerNumber,playerNumber);

//controllo se i numeri generati sono uguali oppure chi ha il punteggio piu alto vince
if (computerNumber === playerNumber) {
    console.log('tie');
} else if (computerNumber > playerNumber) {
    console.log('computer won');
} else {
    console.log('Player won');
}


//MAIL

//definisco le variabili
/*const userEmail = prompt('digita la tua email');
const registeredEmail = ['utente1@gmail.com', 'utente2@gmail.com', 'utente3@gmail.com', 'utente4@gmail.com', 'utente5@gmail.com'];


 for (let i = 0; i < registeredEmail.length; i++) {
    const user = registeredEmail[i];
} 
 //controllo se l email è presente nella lista o no
 if (registeredEmail.includes(userEmail)) {
    alert("L'utente è gia registrato");
} else {
    alert("L'utente non è registrato");
} */


//BONUS
const registeredEmail = ['utente1@gmail.com', 'utente2@gmail.com', 'utente3@gmail.com', 'utente4@gmail.com', 'utente5@gmail.com'];
const btn = document.querySelector('[type=submit]');
const messageDOM = document.querySelector('.message');

btn.addEventListener('click', (e) => {

    e.preventDefault();

    const email = document.querySelector('#email').value;

    messageDOM.innerHTML = "L'utente non è registrato";
    
    //stampo in pagina se l email e gia registrata o se non e stata inserita nessuna email
    for (let i = 0; i <  registeredEmail.length; i++) {
        const user =  registeredEmail[i];

        
        if (email === user) {

            messageDOM.innerHTML = "L'utente è già registrato"
            //console.log(user, email);
    
        } else if (email === '') {
            messageDOM.innerHTML = "Inserire email"
        }
        
    }
})
