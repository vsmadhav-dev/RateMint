const BASE_URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json';

const dropdowns = document.querySelectorAll('.dropdown select');

 for(let select of dropdowns) {
     for (let code in countryList) {
  let newOption = document.createElement('option');
  newOption.innerText = code;
  newOption.value = code;
  if(select.name === 'from' && code === 'USD')
  {
      newOption.selected = 'selected';
  }else if(select.name === 'to' && code === 'INR'){
      newOption.selected = 'selected';
  }

  select.append(newOption);
     }
 select.addEventListener('change', (e) => {
     updateflag(e.target)
 })
 }
 const updateflag = () => {

 }