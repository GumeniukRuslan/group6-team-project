import { refs } from '../components/refs';

/**
 * Функция для рендера элементов header по статусу авторизации
 */
export default function renderOnAuth() {
  const elements = [...refs.elmsNonAuth, ...refs.elmsAuth];
  elements.forEach(element => element.classList.toggle('hidden'));
}
