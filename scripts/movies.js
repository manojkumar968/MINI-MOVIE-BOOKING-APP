// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

console.log('b')

let show_amount = document.getElementById('wallet');
  let Amount_get = Number(JSON.parse(localStorage.getItem('amount'))) || 0;
  show_amount.innerText = Amount_get;

  let id;
  let delayfun = () => {
    if (id) {
      clearTimeout(id)
    }

    id = setTimeout(function () {
      ftechmove()
    }, 2000)
  }

  //http://www.omdbapi.com/?i=tt3896198&apikey=4c3e2a9d&s=

  async function ftechmove() {

    let movieName = document.getElementById('search').value

    try {
      let res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=4c3e2a9d&s=${movieName}`)
      let data = await res.json();
      let { Search } = data
      showmovies(Search)
    } catch (err) {
      console.log(err)
    }
  }

  createfun = (tag) => {
    return document.createElement(tag)
  }



  let showmovies = (Search) => {

    let movies_container = document.getElementById('movies')
    movies_container.innerHTML = null;

    Search.map(function (e, i, arr) {

      let = { Poster, Title } = e
      // console.log(e)

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

      let book_now_button = createfun('button')
      book_now_button.setAttribute('class', 'book_now')
      book_now_button.innerText='Book Now';
      book_now_button.addEventListener('click',function(){
        bookMovieStore(e)
      })

      moviebox.append(book_now_button)


    })


    // console.log(movieposter)

  }

  
  let bookMovieStore=(e)=>{
    let = { Poster, Title } = e
    let arr=[]
    let obj={
      Poster:Poster,
      Title:Title
    }
    arr.push(obj)

    localStorage.setItem('movie',JSON.stringify(arr))

    window.location.href='checkout.html'
  }