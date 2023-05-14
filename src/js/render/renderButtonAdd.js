export function renderModalAdd() {
    const markupAdd = () =>
    `<button class="btn-add-list" type="button">add to shopping list</button>`.join("");
    buttonAdd.insertAdjacentHTML("beforeend", markupAdd);   
  }

