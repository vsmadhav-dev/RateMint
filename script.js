const BASE_URL = 'https://api.frankfurter.dev/v2/rate';
const fromCurr = document.querySelector('.from select')
const toCurr = document.querySelector('.to select')
const dropdowns = document.querySelectorAll('.dropdown select');
const btn = document.querySelector('.submit');
const msg = document.querySelector('.msg');



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
 const updateflag = (element) => {
let currCode  = element.value;
let countryCode = countryList[currCode];
let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
 let img = element.parentElement.querySelector('img');
img.src = newSrc;
 }
 btn.addEventListener('click', async (e) => {
     e.preventDefault();
     let amount = document.querySelector('.amount input');
     let amountValue = amount.value;
     if(amountValue === '' || amountValue === '' || amountValue < 1){
         amountValue = 1;
         amount.value = amountValue;
     }

// console.log(fromCurr.value , toCurr.value)
const URL = `${BASE_URL}/${fromCurr.value}/${toCurr.value}`
 let response = await fetch(URL);
 console.log(response);
 let data = await response.json();
 let rate = data[toCurr.value];
 console.log(data);

 let final = amountValue * rate;
 msg.innerText = `${amountValue} ${fromCurr.value} = ${final} ${toCurr.value}`;

 })
  const exchangeUpdateRate = async () => {
    let amount = document.querySelector('.amount input');
    let amountValue = amount.value;
    if(amountValue === '' || amountValue === '' || amountValue < 1){
        amountValue = 1;
        amount.value = amountValue;
    }

// console.log(fromCurr.value , toCurr.value)
    const URL = `${BASE_URL}/${fromCurr.value}/${toCurr.value}`
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    let rate = data[toCurr.value];
    console.log(data);

    let final = amountValue * rate;
    msg.innerText = `${amountValue} ${fromCurr.value} = ${final} ${toCurr.value}`;
}
window.addEventListener('load', async () => {
    let amount = document.querySelector('.amount input');
    let amountValue = amount.value;
    if(amountValue === '' || amountValue === '' || amountValue < 1){
        amountValue = 1;
        amount.value = amountValue;
    }

// console.log(fromCurr.value , toCurr.value)
    const URL = `${BASE_URL}/${fromCurr.value}/${toCurr.value}`
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    let rate = data[toCurr.value];
    console.log(data);

    let final = amountValue * rate;
    msg.innerText = `${amountValue} ${fromCurr.value} = ${final} ${toCurr.value}`;
})
