// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const { default: Axios } = require("axios");

// import axios from "axios";

const topics = document.querySelector(".topics");
const tabs = document.querySelector(".tabs");

axios
  .get("https://lambda-times-api.herokuapp.com/topics")
  .then((res) => {
    // console.log(res);
    topicsArray = res.data.topics;
    // console.log(topicsArray);
    topicsArray.forEach((item) => {
      // console.log(item);
      topics.appendChild(Topics(item));
    });
  })
  .catch((error) => {
    console.log("404: No data available", error);
    //Stretch goal: Error message>>>
    let errmsg = "404: No data available";
    alert(errmsg);

    function ErrorMessage(errmsg) {
      const uhoh = document.createElement("div");
      uhoh.classList.add("tab", "headline");
      uhoh.textContent = "404: No data available";
      return uhoh;
    }
    topics.appendChild(ErrorMessage());
  });

//Cont: mark, class, cont, app, ret
function Topics(data) {
  const tab = document.createElement("div");
  tab.classList.add("tab");
  tab.textContent = data;
//   //Stretch: Filter Click Event
//   tab.addEventListener("click", (event) => {
//     // console.log(tabs);
//     console.log(`Input detected ${data}`);
//     // alert(`Click Function for ${data}`);
//     const filters = document.querySelectorAll(".headline");
//     if (data === (contains?) filters) {
//         tab.classList.add("active");
//     } else if (data !== filters) {
//         tab.classList.remove("active");
//     }
  });

  return tab;
}
