const newQuoteBtn = document.querySelector('#js-new-quote');
const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';
const quoteText = document.getElementById('js-quote-text');
// Call `fetch()`, passing in the URL.
function fetchQuote(endpoint){
 return fetch(endpoint)
  // fetch() returns a promise. When we have received a response from the server,
  // the promise's `then()` handler is called with the response.
  .then((response) => {
    // Our handler throws an error if the request did not succeed.
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // Otherwise (if the response succeeded), our handler fetches the response
    // as text by calling response.text(), and immediately returns the promise
    // returned by `response.text()`.
    // console.log(response.text());
    return response.json();
  })
  .then((json) => {
    const text = json.question;
    console.log(text);
    return text;
  })
  // When response.text() has succeeded, the `then()` handler is called with
  // the text, and we copy it into the `poemDisplay` box.
//   .then((text) => {
//     poemDisplay.textContent = text;
//   })
  // Catch any errors that might happen, and display a message
  // in the `poemDisplay` box.
  .catch((error) => {
    console.log(`Could not fetch quote: ${error}`);
    alert(`Could not fetch quote: ${error}`);
  });}

function displayQuote(data){
    console.log(data);
    quoteText.textContent = data;
    
}

function getQuote(){
    console.log("New quote button clicked");
    fetchQuote(endpoint)
    .then((text) =>{
        displayQuote(text)
    });
}
newQuoteBtn.addEventListener('click', () =>{
    getQuote();
})