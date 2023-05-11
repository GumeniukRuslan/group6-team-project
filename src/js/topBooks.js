import { getTopBooks } from "./api/fetchLogic";
import { refs } from "./components/refs";
import { renderTopCategories} from "./render/renderTopCategories";
import { renderCategoryTitle } from "./render/renderCategoryTitle";
import { removeLoading, startLoading } from "./helpers/spinner";

const createTopBooks = async () => {
    startLoading();
    const books = await getTopBooks();
    refs.booksHandler.innerHTML = renderTopCategories(books);
    renderCategoryTitle(`Best sellers books`);
    removeLoading();
}

if (refs.booksHandler) {
    window.addEventListener("load", createTopBooks);
}