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
  // console.log("click");
  // console.log(numberOfCookies);
  addCookies(cookieAdder);
  updateCookies();
  updateButtons();
};

upgradeButton.onclick = () => {
  if (numberOfCookies < clickUpgradePrice) return;

  addCookies(-clickUpgradePrice);
  cookieAdder *= 2;
  updateCookies();
  updateButtons();

  clickUpgradePrice *= 2;
  setUpgradeText(upgradeButton, clickUpgradePrice);
};

autoClickButton.onclick = () => {
  if (numberOfCookies < autoClickPrice) return;

  addCookies(-autoClickPrice);
  autoClickPrice *= 2;
  setUpgradeText(autoClickButton, autoClickPrice);
  updateCookies();
  updateButtons();

  autoClickAdder++;
  autoClickerInterval -= autoClickerInterval * 0.2;

  clearInterval(autoClicker);
  autoClicker = setInterval(() => {
    numberOfCookies += autoClickAdder;
    updateCookies();
    updateButtons();
  }, autoClickerInterval);
};

// const cheat1m = () => {
//   numberOfCookies += 1000000;
//   counter.innerHTML = "Cookies: " + numberOfCookies;
// }

// cheat1m();

function addCookies(value) {
  numberOfCookies += value;
}

function updateButtons() {
  setColor(upgradeButton, numberOfCookies < clickUpgradePrice ? "rgb(255, 0, 0)" : "rgb(0, 255, 0)");
  setColor(autoClickButton, numberOfCookies < autoClickPrice ? "rgb(255, 0, 0)" : "rgb(0, 255, 0)");
}

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
