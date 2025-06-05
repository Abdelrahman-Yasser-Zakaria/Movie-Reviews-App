let API_KEY = MOVIEDB_API_KEY;
const API_LINK = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`;

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

function returnReviews(url) {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data.results); // for debugging
      data.results.forEach((element) => {
        const div_row = document.createElement("div");
        div_row.setAttribute("class", "row");
        const div_column = document.createElement("div");
        div_column.setAttribute("class", "column");
        const div_card = document.createElement("div");
        div_card.setAttribute("class", "card");
        const img = document.createElement("img");
        img.setAttribute("class", "thumbnail");
        img.setAttribute("id", "image");
        const title = document.createElement("h3");
        title.setAttribute("id", "title");

        title.innerHTML = `${element.title}<br><a class="movie-reviews-link" href="movie-reviews.html?id=${element.id}&title=${element.title}">reviews</a>`;
        img.src = IMG_PATH + element.poster_path;
        div_card.appendChild(img);
        div_card.appendChild(title);
        div_column.appendChild(div_card);
        div_row.appendChild(div_column);
        main.appendChild(div_row);
      });
    });
}

returnReviews(API_LINK);

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent defult submit behavior
  main.innerHTML = "";

  const searchItem = search.value;

  if (searchItem) {
    returnReviews(SEARCH_API + searchItem);
    search.value = "";
  }
});

const siteTitle = document.querySelector(".topnav a.site-link");
siteTitle.addEventListener("click", (e) => {
  e.preventDefault(); // prevent defult click behavior
  main.innerHTML = "";
  returnReviews(API_LINK);
});

// Dark/Light mode toggle functionality
const themeToggleBtn = document.getElementById("theme-toggle");
const bodyElement = document.body;
let isDarkMode = true; // Default is dark mode

// Check if user has a saved preference in localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  bodyElement.classList.add("light-mode");
  themeToggleBtn.textContent = "☀️";
  isDarkMode = false;
}

themeToggleBtn.addEventListener("click", () => {
  // Toggle between light and dark mode
  if (isDarkMode) {
    bodyElement.classList.add("light-mode");
    themeToggleBtn.textContent = "☀️"; // Sun emoji for light mode
    localStorage.setItem("theme", "light");
  } else {
    bodyElement.classList.remove("light-mode");
    themeToggleBtn.textContent = "🌙"; // Moon emoji for dark mode
    localStorage.setItem("theme", "dark");
  }
  isDarkMode = !isDarkMode;
});
