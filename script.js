

let amount = document.getElementById('amount');
let output_value = document.getElementById('output_value');
let select_from = document.getElementById('select_from');
let select_to = document.getElementById('select_to');
let content_area = document.getElementById('content_area');


let value1 = "";


var myHeaders = new Headers();
myHeaders.append("apikey", "NDEiXmN4qB0tA8a0n6AST5GLhDDt3g0b");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

// for symbol
fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
  .then(response => response.json())
  .then((data) => {
    console.log(data.symbols);

    for(let key in data.symbols){
        value1 += `<option value='${key}'> ${key} </option>`
    }
    select_from.innerHTML = value1;
    select_to.innerHTML = value1;
  })
  .catch(error => console.log('error', error));



//   for covertion
function convert () {
    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${select_to.value}&from=${select_from.value}&amount=${amount.value}`, requestOptions)
    .then(response => response.json())
    .then(data => {
        output_value.value = data.result;

    })
    .catch(error => console.log('error', error));
}

