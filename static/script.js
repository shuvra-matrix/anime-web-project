let anime = document.querySelector(".anime-section");
let searchAnimes = document.querySelector(".search-anime-section");
let section = document.querySelector(".main-section");
let sectionNd = document.querySelector(".main-section-nd");
let inpute = document.querySelector("#input");
let search = document.querySelector("button");
let typeOfAction = document.querySelector(".type");
let popularAnimeList = [];

function popularAnime() {
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://gogoanime2.p.rapidapi.com/popular?page=3",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "53db47703bmsh43337a6ff98140ep1d9019jsnfa4b3f6ce92b",
      "X-RapidAPI-Host": "gogoanime2.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    popularAnimeList = response;
    for (let i = 0; i < response.length; i++) {
      $(".anime-section").append(
        `<div class='popular-anime'> 
        
        <div class="anime-image">
        <img src="${response[i].animeImg}"  alt="${response[i].animeTitle} poster">
        </img>
        </div>     
        <div class="anime-title">
        <p>${response[i].animeTitle}</p>
        </div>
        <div class='hidden'>
          <p>"${response[i].animeId}"</p>
        </div>
        
        </div>`
      );
    }
    let popularAnimes = document.querySelectorAll(".popular-anime");
    for (let i = 0; i < popularAnimes.length; i++) {
      popularAnimes[i].addEventListener("click", () => {
        sectionNd.classList.remove("hidden");
        section.classList.add("hidden");
        anime.classList.add("hidden");
        let animeName = popularAnimes[i].lastElementChild.textContent;
        let newAnimeName = animeName.replace(/"/g, "");
        let newAnimeNames = newAnimeName.trim();
        let newAnime = newAnimeNames.replaceAll(" ", "-");
        const settings = {
          async: true,
          crossDomain: true,
          url: "https://gogoanime2.p.rapidapi.com/anime-details/" + newAnime,
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "53db47703bmsh43337a6ff98140ep1d9019jsnfa4b3f6ce92b",
            "X-RapidAPI-Host": "gogoanime2.p.rapidapi.com",
          },
        };
        $.ajax(settings).done(function (res) {
          $(".anime-details-section").append(
            `
            <div class='sub-anime-details'>
              <div class= 'anime-titla'>
              <h1>${res.animeTitle}</h1>
              </div>
              <div class='anime-image-synp'>
             
              <div class='details-anime-image'>
              <img src=${res.animeImg} >
              </div>
              <div class='syns'>
                <p>${res.synopsis}</p>
              </div>
               </div>
               <div class="episod-list-section">
                <ul class='episod-list'>
                </ul>
               </div>
            </div>
            `
          );
          let episodList = res.episodesList;
          for (let i = 0; i < episodList.length; i++) {
            $(".episod-list").append(
              `
              <li class='episod-list-item'>
              <div class='list-main-div'>
              <div class="list-image">
                <img src=${res.animeImg} alt="anime-image">
              </div>
              <div class="eposide-id">
              
              <p>${episodList[i].episodeNum}</p>
              </div>
              </div>
               <div class='hidden'>
              <p>${episodList[i].episodeId}</p>
              </div>
              </li>
              `
            );
          }

          let animeEpisode = document.querySelectorAll(".episod-list-item");
          console.log(animeEpisode);
          for (let i = 0; i < animeEpisode.length; i++) {
            animeEpisode[i].addEventListener("click", () => {
              let animeId = animeEpisode[i].lastElementChild.textContent;
              let newAnimeId = animeId.replace(/"/g, "");
              let newAnimeIds = newAnimeId.trim();
              console.log(newAnimeIds);
              const settings = {
                async: true,
                crossDomain: true,
                url:
                  "https://gogoanime2.p.rapidapi.com/vidcdn/watch/" +
                  newAnimeIds,
                method: "GET",
                headers: {
                  "X-RapidAPI-Key":
                    "53db47703bmsh43337a6ff98140ep1d9019jsnfa4b3f6ce92b",
                  "X-RapidAPI-Host": "gogoanime2.p.rapidapi.com",
                },
              };

              $.ajax(settings).done(function (response) {
                console.log(response);
                window.open(response.Referer);
              });
            });
          }
        });
      });
    }
  });
}

popularAnime();

let grabAnime = (event) => {};

search.addEventListener("click", function searchAnime() {
  let userinput = inpute.value;
  sectionNd.classList.remove("hidden");
  section.classList.add("hidden");
  anime.classList.add("hidden");
  let newText = userinput.replace(" ", "%20");

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
    for (let i = 0; i < responses.length; i++) {
      $(".search-anime-section").append(
        `<div class='popular-anime'> 
        <div class="anime-image">
        <img src="${responses[i].animeImg}"  alt="${responses[i].animeTitle} poster">
        </img>
        </div>     
        <div class="anime-title">
        <p>${responses[i].animeTitle}</p>
        
        </div>
        
        </div>`
      );
    }
    let popularAnimes = document.querySelectorAll(".popular-anime");
    for (let i = 0; i < popularAnimes.length; i++) {
      popularAnimes[i].addEventListener("click", () => {
        sectionNd.classList.remove("hidden");
        section.classList.add("hidden");
        anime.classList.add("hidden");
        searchAnimes.classList.add("hidden");
        let animeName = popularAnimes[i].lastElementChild.textContent;
        let newAnimeName = animeName.replace(/"/g, "");
        let newAnimeNames = newAnimeName.trim();
        let newAnime = newAnimeNames.replaceAll(" ", "-");
        console.log(newAnime);
        const settings = {
          async: true,
          crossDomain: true,
          url: "https://gogoanime2.p.rapidapi.com/anime-details/" + newAnime,
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "53db47703bmsh43337a6ff98140ep1d9019jsnfa4b3f6ce92b",
            "X-RapidAPI-Host": "gogoanime2.p.rapidapi.com",
          },
        };
        $.ajax(settings).done(function (res) {
          console.log(res);
          $(".anime-details-section").append(
            `
            <div class='sub-anime-details'>
              <div class= 'anime-titla'>
              <h1>${res.animeTitle}</h1>
              </div>
              <div class='anime-image-synp'>
             
              <div class='details-anime-image'>
              <img src=${res.animeImg} >
              </div>
              <div class='syns'>
                <p>${res.synopsis}</p>
              </div>
               </div>
               <div class="episod-list-section">
                <ul class='episod-list'>
                </ul>
               </div>
            </div>
            `
          );

          let episodList = res.episodesList;
          for (let i = 0; i < episodList.length; i++) {
            $(".episod-list").append(
              `
              <li class='episod-list-item'>
              <div class='list-main-div'>
              <div class="list-image">
                <img src=${res.animeImg} alt="anime-image">
              </div>
              <div class="eposide-id">

              <p>${episodList[i].episodeNum}</p>
              </div>
              </div>
               <div class='hidden'>
              <p>${episodList[i].episodeId}</p>
              </div>
              </li>
              `
            );
          }
          let animeEpisode = document.querySelectorAll(".episod-list-item");
          console.log(animeEpisode);
          for (let i = 0; i < animeEpisode.length; i++) {
            animeEpisode[i].addEventListener("click", () => {
              let animeId = animeEpisode[i].lastElementChild.textContent;
              let newAnimeId = animeId.replace(/"/g, "");
              let newAnimeIds = newAnimeId.trim();
              console.log(newAnimeIds);
              const settings = {
                async: true,
                crossDomain: true,
                url:
                  "https://gogoanime2.p.rapidapi.com/vidcdn/watch/" +
                  newAnimeIds,
                method: "GET",
                headers: {
                  "X-RapidAPI-Key":
                    "53db47703bmsh43337a6ff98140ep1d9019jsnfa4b3f6ce92b",
                  "X-RapidAPI-Host": "gogoanime2.p.rapidapi.com",
                },
              };

              $.ajax(settings).done(function (response) {
                console.log(response);
                window.open(response.Referer);
              });
            });
          }
        });
      });
    }
  });
});
