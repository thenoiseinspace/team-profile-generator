function generatePage(){
    $.ajax({
      url: todayNewsAPIcors,
      contentType: 'application/json',
      method: "GET",
    }).then(function (response) { 
        console.log(response);
        for (var i = 0; i < 6; i++) {
            var employeeName = response.articles[i].title;
            var articleURL = response.articles[i].url;
            var articleImg = response.articles[i].urlToImage;
  
            var cardContainer = $("<div>").addClass("col-xl-4 col-xs-12 mb-5");
            var card = $("<div>").addClass("card employee-card");
            var cardBody = $("<div>").addClass("card-body");
            var cardTitle = $("<h5>").addClass("card-title").text(articleTitle);
            var cardText = $("<p>").addClass("card-text");
  
            cardBody.append(cardTitle);
            cardBody.append(cardText);
            cardBody.append(cardURL);
            card.append(cardImg);
            card.append(cardBody);
            cardContainer.append(card);
            todaySection.append(cardContainer);
        }
    });
  }