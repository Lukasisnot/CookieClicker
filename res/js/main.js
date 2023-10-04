const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const upgradeButton = document.getElementById("upgradeButton");
const autoClickButton = document.getElementById("autoClickButton");

let numberOfCookies = 0;
let cookieAdder = 1;
let clickUpgradePrice = 50;
let autoClickPrice = 100;
let autoClickAdder = 0;
let autoClickerInterval = 1500;
let autoClicker;

cookie.onclick = () => {
  console.log("click");
  numberOfCookies += cookieAdder;
  console.log(numberOfCookies);
  updateCookies();
  upgradeButton.style.backgroundColor =
    numberOfCookies < clickUpgradePrice ? "rgb(255, 0, 0)" : "rgb(0, 255, 0)";
};

upgradeButton.onclick = () => {
  if (numberOfCookies < clickUpgradePrice) return;

  numberOfCookies -= 50;
  cookieAdder *= 2;
  upgradeButton.ariaDisabled = true;
  updateCookies();

  clickUpgradePrice *= 2;
  upgradeButton.innerText = "Upgrade: " + clickUpgradePrice;
};

autoClickButton.onclick = () => {
  if (numberOfCookies < autoClickPrice) return;

  numberOfCookies -= autoClickPrice;
  autoClickPrice *= 2;
  updateCookies();
  setUpgradeText(upgradeButton, autoClickPrice);

  autoClickAdder++;
  autoClickerInterval -= autoClickerInterval * 0.2;

  clearInterval(autoClicker);
  autoClicker = setInterval(() => {
    numberOfCookies += autoClickAdder;
    updateCookies();
  }, autoClickerInterval);
};

// const cheat1m = () => {
//   numberOfCookies += 1000000;
//   counter.innerHTML = "Cookies: " + numberOfCookies;
// }

// cheat1m();

function setUpgradeText(button, value) {
  button.innerText = "Upgrade: " + value;
}

function updateCookies(value) {
  counter.innerHTML = "Cookies: " + numberOfCookies;
}

function setColor(element) {
  element.style.backgroundColor =
    numberOfCookies < autoClickPrice ? "rgb(255, 0, 0)" : "rgb(0, 255, 0)";
}
