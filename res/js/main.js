const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");

let numberOfCookies = 0;

cookie.onclick = () => {
  console.log("click");
  numberOfCookies++;
  console.log(numberOfCookies);
  counter.innerHTML = "Cookies: " + numberOfCookies;
};
