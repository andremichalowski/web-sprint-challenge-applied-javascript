// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector(".header-container");

function headerCreator(data) {
  const header = document.createElement("div");
  header.classList.add("header");
  const cDate = document.createElement("span");
  cDate.classList.add("date");
  cDate.textContent = "MARCH 28, 2020";
  const cTitle = document.createElement("h1");
  cTitle.textContent = "Lambda Times";
  const cTemp = document.createElement("span");
  cTemp.classList.add("temp");
  cTemp.textContent = "98°";

  header.append(cDate, cTitle, cTemp);

  return header;
}

headerContainer.append(headerCreator());
