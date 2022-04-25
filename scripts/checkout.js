// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
console.log('c')

let show_amount = document.getElementById('wallet');
let Amount_get = Number(JSON.parse(localStorage.getItem('amount'))) || 0;
show_amount.innerText = Amount_get;



let bookmovie=()=>{
  let sheet=document.getElementById('number_of_seats');

  let Amount_get=Number(JSON.parse(localStorage.getItem('amount')))||0;

  let tprice=Number(sheet.value)*100

  if(tprice>Amount_get){
    alert('Insufficient Balance!')
  }
  else{
    alert('Booking successful')

    let amountInWallet=Amount_get-tprice;
    localStorage.setItem('amount',JSON.stringify(amountInWallet))
    let Amount_get2=JSON.parse(localStorage.getItem('amount'))||0;
    // console.log(show_amount)
    show_amount.innerText=Amount_get2;
    sheet.value=null;
  }
}




createfun = (tag) => {
  return document.createElement(tag)
}





let getmoviedata=JSON.parse(localStorage.getItem('movie'))||[]

getmoviedata.map(function(e){
  console.log(e)

  let movies_container = document.getElementById('movie')
  // movies_container.innerHTML = null;

  let = { Poster, Title } = e

  let moviebox = createfun('div')
    moviebox.setAttribute('id', 'moviebox')

    movies_container.append(moviebox)

    let movieposter = createfun('img')
    movieposter.setAttribute('id', 'movieposter')
    movieposter.src=Poster;

    moviebox.append(movieposter)

    let moviename = createfun('h4')
    moviename.setAttribute('id', 'moviename')
    moviename.innerText=Title;

    moviebox.append(moviename)

})
