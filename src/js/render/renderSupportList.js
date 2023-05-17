export function renderSupportList(data) {
  const funds = data
    .map(({ title, url, img, img2x }, idx) => {
      return `<li class="support-item"><a class="support-link" href="${url}" target="_blank"
                  rel="noopener noreferrer">${(idx + 1)
                    .toString()
                    .padStart(
                      2,
                      '0'
        )} <img class="support-logo" 
                    src="${img}" 
                    alt="${title}"
                    srcset="${img} 1x, ${img2x} 2x"> 
                  </a></li>`;
    })
    .join('');
  return funds;
}
