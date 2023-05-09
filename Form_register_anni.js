// Ottiene l'elemento del form
const form = document.querySelector('form');

// Aggiunge un gestore di eventi per la sottomissione del form
form.addEventListener('submit', (event) => {
  // Impedisce il comportamento predefinito di sottomissione del form
  event.preventDefault();

  // Ottiene il valore del campo di input della data di nascita
  const dataDiNascita = new Date(document.querySelector('#nascita').value);

  // Calcola l'età dell'utente
  const oggi = new Date();
  const eta = oggi.getFullYear() - dataDiNascita.getFullYear();
  const meseDiNascita = dataDiNascita.getMonth();
  const giornoDiNascita = dataDiNascita.getDate();

  if (meseDiNascita > oggi.getMonth() || (meseDiNascita === oggi.getMonth() && giornoDiNascita > oggi.getDate())) {
    eta--;
  }

  // Verifica se l'utente ha almeno 16 anni
  if (eta >= 16) {
    // Chiede all'utente di inserire una nuova password personale
    const nuovaPassword = prompt('Hai 16 anni o più. Inserisci una nuova password personale:');

    // Verifica se l'utente ha inserito una nuova password
    if (nuovaPassword) {
      // Aggiorna il valore del campo di input della password
      document.querySelector('#password').value = nuovaPassword;

      // Invia il form
      form.submit();
    }
  } else {
    // Invia il form senza richiedere una nuova password
    form.submit();
  }
});