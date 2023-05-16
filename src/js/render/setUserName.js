export default function setUserName(elementsDOM, userName) {
  const elements = [...elementsDOM];
  elements.forEach(element => (element.textContent = userName));
}
