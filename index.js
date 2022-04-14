window.onload = fetchMovieOnLoad();

let btn = document.getElementById('btn')
let movieName = document.getElementById('movie-name')
btn.addEventListener('click', fetchMovie)

function fetchMovie() {
    let row = document.getElementById('details')

    while (row.firstChild) {
        row.removeChild(row.firstChild)
    }

    axios.get('//www.omdbapi.com/?apikey=b186daa5&s=' + movieName.value)
        .then((res) => {
            console.log(res.data.Search)

            let list = res.data.Search

            for (let i = 0; i < list.length - 3; i = i + 3) {

                let link1 = "https://www.imdb.com/title/" + list[i].imdbID
                let link2 = "https://www.imdb.com/title/" + list[i + 1].imdbID
                let link3 = "https://www.imdb.com/title/" + list[i + 2].imdbID
                let details = document.getElementById('details')

                let test1 = `<div class="col-lg-4">
           <div class="row g-0 movie-cards" >
             <div class="col-md-5">
               <img src="${list[i].Poster}" style="height:90%; width:250%; margin-top:10%" class="img-fluid rounded-start" alt="Loading...">
             </div>
             <div class="col-md-7">
               <div class="card-body">
                 <h5 class="card-title">${list[i].Title}</h5>
                 <p class="card-text">Type: ${list[i].Type}</p>
                 <p class="card-text">Year: ${list[i].Year}</p>
                 <a href = "${link1}"><span style="border: none; border-radius: 5%;">Watch</span></a>
               </div>
             </div>
           </div>
         </div>`

                let test2 = `<div class="col-lg-4">
           <div class="row g-0 movie-cards">
             <div class="col-md-5">
               <img src="${list[i+1].Poster}" style="height:90%; width:250%; margin-top:10%" class="img-fluid rounded-start" alt="Loading...">
             </div>
             <div class="col-md-7">
               <div class="card-body">
                 <h5 class="card-title">${list[i+1].Title}</h5>
                 <p class="card-text">Type: ${list[i+1].Type}</p>
                 <p class="card-text">Year: ${list[i+1].Year}</p>
                 <a href ="${link2}"><span style="border: none; border-radius: 5%;">Watch</span></a>
               </div>
             </div>
           </div>
         </div>`

                let test3 = `<div class="col-lg-4">
           <div class="row g-0 movie-cards" style="margin-right:10%">
             <div class="col-md-5">
               <img src="${list[i+2].Poster}" style="height:90%; width:250%; margin-top:10%" class="img-fluid rounded-start" alt="Loading...">
             </div>
             <div class="col-md-7">
               <div class="card-body">
                 <h5 class="card-title">${list[i+2].Title}</h5>
                 <p class="card-text">Type: ${list[i+2].Type}</p>
                 <p class="card-text">Year: ${list[i+2].Year}</p>
                 <a href = "${link3}"><span style="border: none; border-radius: 5%;">Watch</span></a>
               </div>
             </div>
           </div>
         </div>`

                details.innerHTML = details.innerHTML + test1 + test2 + test3

            }
        })
}

/////////////////// on load default movie //////////////////////

function fetchMovieOnLoad() {
  let row = document.getElementById('details')

  while (row.firstChild) {
      row.removeChild(row.firstChild)
  }

  axios.get('//www.omdbapi.com/?apikey=b186daa5&s=india')
      .then((res) => {
          console.log(res.data.Search)

          let list = res.data.Search

          for (let i = 0; i < list.length - 3; i = i + 3) {

              let link1 = "https://www.imdb.com/title/" + list[i].imdbID
              let link2 = "https://www.imdb.com/title/" + list[i + 1].imdbID
              let link3 = "https://www.imdb.com/title/" + list[i + 2].imdbID
              let details = document.getElementById('details')

              let test1 = `<div class="col-lg-4">
         <div class="row g-0 movie-cards" >
           <div class="col-md-5">
             <img src="${list[i].Poster}" style="height:90%; width:250%; margin-top:10%" class="img-fluid rounded-start" alt="Loading...">
           </div>
           <div class="col-md-7">
             <div class="card-body">
               <h5 class="card-title">${list[i].Title}</h5>
               <p class="card-text">Type: ${list[i].Type}</p>
               <p class="card-text">Year: ${list[i].Year}</p>
               <a href = "${link1}"><span style="border: none; border-radius: 5%;">Watch</span></a>
             </div>
           </div>
         </div>
       </div>`

              let test2 = `<div class="col-lg-4">
         <div class="row g-0 movie-cards">
           <div class="col-md-5">
             <img src="${list[i+1].Poster}" style="height:90%; width:250%; margin-top:10%" class="img-fluid rounded-start" alt="Loading...">
           </div>
           <div class="col-md-7">
             <div class="card-body">
               <h5 class="card-title">${list[i+1].Title}</h5>
               <p class="card-text">Type: ${list[i+1].Type}</p>
               <p class="card-text">Year: ${list[i+1].Year}</p>
               <a href ="${link2}"><span style="border: none; border-radius: 5%;">Watch</span></a>
             </div>
           </div>
         </div>
       </div>`

              let test3 = `<div class="col-lg-4">
         <div class="row g-0 movie-cards" style="margin-right:10%">
           <div class="col-md-5">
             <img src="${list[i+2].Poster}" style="height:90%; width:250%; margin-top:10%" class="img-fluid rounded-start" alt="Loading...">
           </div>
           <div class="col-md-7">
             <div class="card-body">
               <h5 class="card-title">${list[i+2].Title}</h5>
               <p class="card-text">Type: ${list[i+2].Type}</p>
               <p class="card-text">Year: ${list[i+2].Year}</p>
               <a href = "${link3}"><span style="border: none; border-radius: 5%;">Watch</span></a>
             </div>
           </div>
         </div>
       </div>`

              details.innerHTML = details.innerHTML + test1 + test2 + test3

          }
      })
}


/////////////////////////////////////////////////////







//////////////////////////////


let dynamicText = document.getElementById("dynamic-text");

window.onload = () => {
    changeText();
    setInterval(changeText, 13000);

    brandValueCounter();
    setInterval(brandValueCounter, 5000);
    creatorCounter();
    setInterval(creatorCounter, 10000)
};
let wordArray = ["Action", "Horror", "Comedy", "Thriller", "Documentary"];

function changeText() {
    wordArray.forEach((word, i) => {
        dynamicText.innerHTML = "";
        setTimeout(() => {
            dynamicText.innerHTML = "";
            let letters = word.split("")
            letters.forEach((letter, j) => {
                setTimeout(() => {
                    dynamicText.innerHTML += letter;
                }, j * 100)

            })

            console.log(word);
        }, i * 2500)
    })
}