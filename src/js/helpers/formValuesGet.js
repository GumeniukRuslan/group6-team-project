export default function formValuesGet(formSubmitted) {
  const form = new FormData(formSubmitted);
  const keys = form.keys();
  const data = {};
  let key = keys.next().value;

  while (form.has(key)) {
    data[key] = form.get(key);
    key = keys.next().value;
  }
  formSubmitted.reset();

  return data;
}
