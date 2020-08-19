
const quoteContainer = document.getElementById("quote-container")
const quote = document.querySelector("#quote");
const author = document.querySelector('.quote-author span');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader')

let getQuoteCounter = 0;
let isLoading = false;

const toggleLoader = () => {
    quoteContainer.style.display = isLoading ? 'block' : 'none'
    loader.style.display = !isLoading ? 'block' : 'none'
    isLoading = !isLoading
}


const getQuote = async () => {
    toggleLoader()
    const proxyURL = 'https://cors-anywhere.herokuapp.com/'
    const apiURL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
    try {
        const response = await fetch(proxyURL + apiURL);
        const result = await response.json()
        toggleLoader()
        showQuote(result);
    } catch (error) {
        toggleLoader()
        console.log('WHOOPS! NO QUOTE', error);
        if(getQuoteCounter < 5) {
            getQuoteCounter += 1;
            // getQuote();
        }
    }
}

const showQuote = (quoteData) => {
    quote.textContent = quoteData.quoteText;

    quoteData.quoteText.length > 120
        ? quote.classList.add('long-quote')
        : quote.classList.remove('long-quote')

    author.textContent = `- ${quoteData.quoteAuthor || 'Unknown'}`
}

const tweetQuote = () => {
    const URL = `https://twitter.com/intent/tweet?tex
t=${quote.textContent} ${author.textContent}`
    window.open(URL, '_blank')
}

twitterBtn.addEventListener('click', tweetQuote);
newQuoteBtn.addEventListener('click', getQuote);
getQuote();
        
