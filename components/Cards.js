// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardsContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));

//Const: mark class content append return
function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("card");
  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = data.headline;
  const author = document.createElement("div");
  author.classList.add("author");
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  const img = document.createElement("img");
  img.src = data.authorPhoto;
  const authorName = document.createElement("span");
  authorName.textContent = `By ${data.authorName}`;

  imgContainer.appendChild(img);
  author.appendChild(imgContainer);
  author.appendChild(authorName);

  card.appendChild(headline);
  card.appendChild(author);

  return card;
}
