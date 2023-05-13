export const renderError = () => {
    const sample = new URL('../../images/unsuccessful_fetch.png', import.meta.url);
    return `<div class="error">
    <p class="error__text">Something went wrong...</p>
    <img src="${sample}" class="error__img" alt="error" width="265">
</div>`
}