import { refs } from "../components/refs";

export const renderCategoryTitle = (title) => {
    const arrayOfWords = title.split(" ");
    const lastWord = arrayOfWords[arrayOfWords.length - 1];
    const allExceptLastWord = arrayOfWords.slice(0, -1).join(" ");

    refs.categoryTitle.innerHTML = `${allExceptLastWord} <span class="books__title-last">${lastWord}</span>`;
}