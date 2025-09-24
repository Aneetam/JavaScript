let searchInputE1 = document.getElementById("searchInput");
let searchResultsE1 = document.getElementById("searchResults");
let spinnerE1 = document.getElementById("spinner");
let headingE1 = document.createElement("h1");
let message = document.createElement("message");



function appendSearchResults(search_results) {

    if (search_results.length < 1) {
        message.textContent = "No results found";
        searchResultsE1.textContent = "";
        headingE1.textContent = "";
    } else {
        message.textContent = "";
        searchResultsE1.textContent = "";
        headingE1.textContent = "Popular Books";
        searchResultsE1.appendChild(headingE1);
        for (let eachItem of search_results) {
            let title = eachItem.title;
            let imageLink = eachItem.imageLink;
            let author = eachItem.author;
            let imageE1 = document.createElement("img");
            let textE1 = document.createElement("p");
            imageE1.setAttribute("src", imageLink);
            textE1.textContent = author;
            searchResultsE1.appendChild(imageE1);
            searchResultsE1.appendChild(textE1);





        }
    }

}

searchInputE1.addEventListener("keydown", function(event) {
    let searchInputValue = event.target.value;
    searchResultsE1.textContent = "";
    if (event.key === "Enter") {
        spinnerE1.classList.remove("d-none");
        let url = "https://apis.ccbp.in/book-store?title=" + searchInputValue;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData
                ;

                appendSearchResults(search_results);
                spinnerE1.classList.toggle("d-none");
            });
    }


})