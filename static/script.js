let anime = document.querySelector(".anime-section");
let searchAnime = document.querySelector(".search-anime-section");
let section = document.querySelector(".main-section");
let sectionNd = document.querySelector(".main-section-nd");
let inpute = document.querySelector("#input");
let search = document.querySelector("button");

function popularAnime() {
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://gogoanime2.p.rapidapi.com/popular?page=1",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "53db47703bmsh43337a6ff98140ep1d9019jsnfa4b3f6ce92b",
      "X-RapidAPI-Host": "gogoanime2.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
    for (let i = 0; i < response.length; i++) {
      $(".anime-section").append(
        `<div class='popular-anime'> 
        
        <div class="anime-image">
        <img src="${response[i].animeImg}"  alt"${response[i].animeTitle} poster">
        </img>
        </div>     
        <div class="anime-title">
        <p>${response[i].animeTitle}</p>
        
        </div>
        
        </div>`
      );
    }
  });
}

popularAnime();

let grabAnime = (event) => {};

search.addEventListener("click", function searchAnime() {
  let userinput = inpute.value;
  console.log(userinput);
  sectionNd.classList.remove("hidden");
  section.classList.add("hidden");
  anime.classList.add("hidden");
  let newText = userinput.replace(" ", "%20");
  console.log(newText);

  const settings = {
    async: true,
    crossDomain: true,
    url: "https://gogoanime2.p.rapidapi.com/search?keyw=" + newText + "&page=1",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "53db47703bmsh43337a6ff98140ep1d9019jsnfa4b3f6ce92b",
      "X-RapidAPI-Host": "gogoanime2.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (responses) {
    console.log(responses);
    for (let i = 0; i < responses.length; i++) {
      $(".search-anime-section").append(
        `<div class='popular-anime'> 
        <div class="anime-image">
        <img src="${responses[i].animeImg}"  alt"${responses[i].animeTitle} poster">
        </img>
        </div>     
        <div class="anime-title">
        <p>${responses[i].animeTitle}</p>
        
        </div>
        
        </div>`
      );
    }
  });
});
