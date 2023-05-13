import { funds } from "../components/support-funds";

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