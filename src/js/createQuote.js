import { getRandomQuote } from "./api/quoteApi";
import { getDate } from "./helpers/dateObserver";
import { renderQuote } from './render/renderQuote';
import { refs } from "./components/refs";

const QUOTE_KEY = 'quote';

const createQuotes = async () => {
    const isQouteLoaded = getDate();
    let quote;
    if (isQouteLoaded) {
        quote = JSON.parse(localStorage.getItem(QUOTE_KEY));
        renderQuote(quote)
    } else {
        try {
            quote = await getRandomQuote();
            localStorage.setItem(QUOTE_KEY, JSON.stringify(quote));
            renderQuote(quote)
        } catch (e) {
            return;
        }
    }
}

if (refs.quoteText) {
    window.addEventListener("load", createQuotes)
}