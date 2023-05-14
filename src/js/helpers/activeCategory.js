export const activeCategory = (category) => {
    const formerActive = document.querySelector('.active-category');
    formerActive.classList.remove('active-category');
    document.querySelectorAll('.categories__item').forEach(item => {
        if (item.dataset.category === category) {
            item.classList.add('active-category');
        }
    })
}