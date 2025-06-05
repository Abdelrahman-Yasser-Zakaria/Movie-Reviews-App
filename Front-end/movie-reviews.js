const url = new URL(location.href);
const movieId = url.searchParams.get("id");
console.log(`movieId: ${movieId}`);
const movieTitle = url.searchParams.get("title");

const API_LINK = "http://localhost:8000/api/v1/reviews/";

const main = document.getElementById("section");
const title = document.getElementById("title");
title.innerText = movieTitle;

const div_new_review = document.createElement("div");
div_new_review.innerHTML = `
<div class="row">
  <div class="column">
    <div class="review-card">
      <b>Add New Review</b>
      <p><b>Review: </b>
      <input class="input-box" type="text" id="new_review"></input>
      </p>
      <p><b>User: </b>
      <input class="input-box" type="text" id="new_user"></input>
      </p>
      <p><div class=review-icons><a class=save-review  href="#" onclick="saveReview('new_user','new_review')">💾</div></a>
      </p>
    </div>
  </div>
</div>
`;

main.appendChild(div_new_review);

function returnReviews(url) {
  fetch(url + "movie/" + movieId)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data); // for debugging
      data.forEach((review) => {
        const div_card = document.createElement("div");
        div_card.innerHTML = `
        <div class="row">
          <div class="column">
            <div class="review-card" id =${review._id}>
              <p><b>Review: </b>${review.review}</p>
              <p><b>User: </b>${review.user}</p>
              <p><div class=review-icons><a class="edit-review" href=# onclick="editReview('${review._id}','${review.user}','${review.review}')">✏️</a> <a class="delete-review" href=# onclick="deleteReview('${review._id}')">🗑️</a></div></p>
            </div>
          </div>
        </div>
        `;

        main.appendChild(div_card);
      });
    });
}

function editReview(reviewId, user, review) {
  const reveiwCard = document.getElementById(reviewId);
  const reviewInputId = "review" + reviewId;
  const userInputId = "user" + reviewId;

  reveiwCard.innerHTML = `<p><b>Review: </b>
  <input class="input-box" type="text" id=${reviewInputId} value="${review}"></input>
  </p>
  <p><b>User: </b>
  <input class="input-box" type="text" id=${userInputId} value="${user}"></input>
  </p>
  <p><div class=review-icons><a class=save-review  href="#" onclick="saveReview('${userInputId}','${reviewInputId}','${reviewId}')">💾</div></a>
  </p>`;
}
function saveReview(userInputId, reviewInputId, reviewId = "") {
  const review = document.getElementById(reviewInputId).value;
  const user = document.getElementById(userInputId).value;

  if (reviewId) {
    // reveiwId has value not empty string (PUT option)
    fetch(API_LINK + reviewId, {
      method: "PUT",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: user, review: review }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        location.reload();
      });
  } else {
    // reveiwId is empty string (POST option)
    fetch(API_LINK + "newReview", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movieId: movieId, user: user, review: review }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        location.reload();
      });
  }
}

function deleteReview(reviewId) {
  fetch(API_LINK + reviewId, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      location.reload();
    });
}

returnReviews(API_LINK);

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
