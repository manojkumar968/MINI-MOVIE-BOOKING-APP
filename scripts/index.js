// Store the wallet amount to your local storage with key "amount"
console.log('a')
let show_amount=document.getElementById('wallet');
let Amount_get=Number(JSON.parse(localStorage.getItem('amount')))||0;
  show_amount.innerText=Amount_get;


let add_to_wallet=()=>{
  let amount_input=document.getElementById('amount');
  let walletAmount=Number(JSON.parse(localStorage.getItem('amount')))||0;

  let amount=walletAmount+Number(amount_input.value)
  localStorage.setItem('amount',JSON.stringify(amount))
  amount_input.value=null;
  let show_amount=document.getElementById('wallet');
  let Amount_get=Number(JSON.parse(localStorage.getItem('amount')))||0;
  show_amount.innerText=Amount_get;
  console.log(amount)

  

}


let gotomoviespage=()=>{
  window.location.href='movies.html'
}