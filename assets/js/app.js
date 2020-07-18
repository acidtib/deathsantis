(function() {

  let rons = [
    "EdD3LgPXsAAPjSq.gif",
    "418340_urso_003_disantistampa091918_.jpg",
    "asshole.jpg",
    "maxresdefault.jpg",
    "Ron-DeSantis-Blasts-Media-for-Partisan-Coverage-of-FL-Pandemic-Response.jpg",
    "UJ7X2ITODVGT7LJLSI5KME5DPA.jpg"
  ]

  let winner = "/assets/img/rons/" + rons[Math.floor(Math.random()*rons.length)];

  $('.figure img').attr("src", winner);

  

  let deaths = $(".deaths .card-title")

  $.getJSON("https://floridacovid.com/api/v1/cases", {
    format: "json"
  })
    .done(function(data) {
      deaths.html(data.deaths.residents)
    })
    .fail(function() {
      deaths.html("too many")
    });

})();