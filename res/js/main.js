const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgradeButton = document.getElementById("upgradeButton");

let numberOfCookies = 0;
let cookieAdder = 1;
let upgradeCost = 50;

cookie.onclick = () => {
  console.log("click");
  numberOfCookies += cookieAdder;
  console.log(numberOfCookies);
  counter.innerHTML = "Cookies: " + numberOfCookies;
};

upgradeButton.onclick = () => {
  if (numberOfCookies >= 50) {
    numberOfCookies -= 50;
    cookieAdder *= 2;
    upgradeButton.ariaDisabled = true;
    counter.innerHTML = "Cookies: " + numberOfCookies;

    upgradeCost *= 3;
    upgradeButton.innerHTML = "Upgrade: " + upgradeCost;
}
};
