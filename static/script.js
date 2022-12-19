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
