const DATE_KEY = 'date';
const today = new Date().getDate();

export const getDate = () => {
    let currentDate = JSON.parse(localStorage.getItem(DATE_KEY));

    if (currentDate && currentDate === today) {
        return true;
    } else if (!currentDate) {
        currentDate = today;
        localStorage.setItem(DATE_KEY, currentDate);
        return false;
    } else if (currentDate && currentDate !== today) {
        localStorage.setItem(DATE_KEY, today);
        currentDate = today;
        return false;
    }
}