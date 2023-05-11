import { getTopBooks } from "./api/fetchLogic";
import { refs } from "./components/refs";
import { renderTopCategories} from "./render/renderTopCategories";
import { renderCategoryTitle } from "./render/renderCategoryTitle";

const createTopBooks = async () => {
    const books = await getTopBooks();
    refs.booksHandler.innerHTML = renderTopCategories(books);
    renderCategoryTitle(`Best sellers books`);
}

if (refs.booksHandler) {
    window.addEventListener("load", createTopBooks);
}