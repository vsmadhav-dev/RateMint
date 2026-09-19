const BASE_URL = 'https://api.frankfurter.app/latest';
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
 const getAmountValue = () => {
    let amount = document.querySelector('.amount input');
    let amountValue = Number(amount.value);
    if(!Number.isFinite(amountValue) || amountValue < 1){
        amountValue = 1;
        amount.value = amountValue;
    }
    return amountValue;
 }

 const exchangeUpdateRate = async () => {
    const amountValue = getAmountValue();
    const fromValue = fromCurr.value;
    const toValue = toCurr.value;

    if(fromValue === toValue){
        msg.innerText = `${amountValue} ${fromValue} = ${amountValue} ${toValue}`;
        return;
    }

    const URL = `${BASE_URL}?from=${fromValue}&to=${toValue}`;

    try {
        let response = await fetch(URL);
        if(!response.ok){
            throw new Error('Unsupported currency pair');
        }

        let data = await response.json();
        let rate = data?.rates?.[toValue];

        if(!Number.isFinite(rate)){
            throw new Error('Rate not found');
        }

        let final = amountValue * rate;
        msg.innerText = `${amountValue} ${fromValue} = ${final} ${toValue}`;
    } catch (error) {
        msg.innerText = 'Unable to convert for selected currencies.';
    }
 }

 btn.addEventListener('click', async (e) => {
    e.preventDefault();
    await exchangeUpdateRate();
 })

 window.addEventListener('load', async () => {
    await exchangeUpdateRate();
 })
