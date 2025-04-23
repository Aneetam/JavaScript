let reviewContainerE1 = document.getElementById("reviewsContainer");
let titleInputE1 = document.getElementById("titleInput");
let reviewTextAreaE1 = document.getElementById("reviewTextarea");

function onAddToReview() {
    let movieTitle = titleInputE1.value;
    let movieReview = reviewTextAreaE1.value;

    if (movieTitle === "") {
        alert("Please enter a movie title");
        return;
    }


    let movieTitleE1 = document.createElement("h1");
    movieTitleE1.textContent = "Movie Title" + movieTitle;
    movieTitleE1.classList.add("movie-title");
    reviewContainerE1.appendChild(movieTitleE1);

    let movieReviewE1 = document.createElement("p");
    movieReviewE1.textContent = "Review :" + movieReview;
    reviewContainerE1.appendChild(movieReviewE1);

    let horizontallineE1 = document.createElement("hr");
    reviewContainerE1.appendChild(horizontallineE1);

    titleInputE1.value = "";
    reviewTextAreaE1.value = "";

}