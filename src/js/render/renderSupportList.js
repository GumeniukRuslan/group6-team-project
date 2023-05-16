export function renderSupportList(data) {
  const funds = data
    .map(({ title, url, img }, idx) => {
      return `<li class="support-item swiper-slide"><a class="support-link" href="${url}" target="_blank"
                  rel="noopener noreferrer">${(idx + 1)
                    .toString()
                    .padStart(
                      2,
                      '0'
                    )} <img class="support-logo" src="${img}" alt="${title}"></a></li>`;
    })
    .join('');
  return funds;
}
