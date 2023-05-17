import {refs} from '../components/refs';

export const renderQuote = (data) => {
    data.map(quote => {
        refs.quoteAuthor.textContent = quote.author;
        refs.quoteText.textContent = quote.quote;
    })
}