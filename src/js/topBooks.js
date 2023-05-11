import { getTopBooks } from "./api/fetchLogic";
import { refs } from "./components/refs";
import { renderTopCategories } from "./render/renderTopCategories";

const createTopBooks = async () => {
    const books = await getTopBooks();
    refs.booksHandler.innerHTML = renderTopCategories(books);
}

if (refs.booksHandler) {
    window.addEventListener("load", createTopBooks);
}