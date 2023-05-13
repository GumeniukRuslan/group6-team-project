export const funds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
  },
];

const imgSupportUrl = [
  '../../images/saveTheChildren.png',
  './images/projectHope.png',
  './images/united24.png',
  './images/medicalCorps.png',
  './images/msf.png',
  './images/razom.png',
  './images/actionAgainst.png',
  './images/worldVision.png',
  './images/prytula.png',
];

funds.forEach((fund, index) => {
  fund.img = new URL(imgSupportUrl[index], import.meta.url);
});

const fundsListEl = document.getElementById('support-list');

funds.forEach((fund) => {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  const image = document.createElement('img');
  
  link.href = fund.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  image.src = fund.img;


  link.appendChild(image);
  listItem.appendChild(link);

  fundsListEl.appendChild(listItem);

});
console.log(fundsListEl)