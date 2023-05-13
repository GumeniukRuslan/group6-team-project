export function renderSupportList(data) {
  const funds = data
    .map(({ title, url, img }, idx) => {
      console.log(img);
      const image = new URL(`${img}`, import.meta.url);
      return `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${
        idx + 1
      } <img src="${image}" alt="${title}"></a></li>`;
    })
    .join('');
  console.log(funds);
  return funds;
}
