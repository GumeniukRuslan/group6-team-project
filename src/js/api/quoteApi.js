import axios from "axios";

const URL_FOR_QUOTE = 'https://api.api-ninjas.com/v1/quotes?category=';
const API_KEY = 'BkvMyQUAdvwnTogVAaciVw==WojfXIXRwZ1WJrhb';
const CATEGORY = 'learning';

const headers = {
    'X-Api-Key' : API_KEY,
}

export const getRandomQuote = async () => {
    try {
        const {data} = await axios.get(`${URL_FOR_QUOTE}${CATEGORY}`, {headers});
        return data;
    } catch (e) {
        return;
    }
} 