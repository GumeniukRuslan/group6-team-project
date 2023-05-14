import { getTopBooks } from "./api/fetchLogic";
import { refs } from "./components/refs";
import { renderTopCategories} from "./render/renderTopCategories";
import { renderCategoryTitle } from "./render/renderCategoryTitle";
import { removeLoading, startLoading } from "./helpers/spinner";
import { renderError } from "./render/renderError";

export const createTopBooks = async () => {
    startLoading();
    renderCategoryTitle(`Best sellers books`);
    try {
        const books = await getTopBooks();
        refs.booksHandler.innerHTML = renderTopCategories(books);
    } catch (e) {
        refs.booksHandler.innerHTML = renderError(`Something went wrong...`);
    }
    removeLoading();
}

if (refs.booksHandler) {
    window.addEventListener("load", createTopBooks);
}