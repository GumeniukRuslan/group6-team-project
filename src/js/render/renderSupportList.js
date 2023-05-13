export function renderSupportList(data) {
  const funds = data
    .map(({ title, url, img }, idx) => {
      const image = new URL(
        '../../images/saveTheChildren.png',
        import.meta.url
      );
      return `<li><a class="support-link" href="${url}">${(idx + 1)
        .toString()
        .padStart(
          2,
          '0'
        )} <img class="support-logo" src="${image}" alt="${title}"></a></li>`;
    })
    .join('');
  return funds;
}

// {
//     title: 'Save the Children',
//     url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
//     img: '../../images/saveTheChildren.png',
//   },
