/**
 * Функция для рендера элементов header по статусу авторизации
 */
export default function renderOnAuth(elmsNonAuth, elmsAuth) {
  const elements = [...elmsNonAuth, ...elmsAuth];
  elements.forEach(element => element.classList.toggle('hidden'));
}
