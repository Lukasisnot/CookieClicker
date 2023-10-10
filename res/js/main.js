//============================ Core ================================//
const CatImg = document.getElementById("cat-Img");
const FleshCountTxt = document.getElementById("fleshCountNum-Txt");

let FleshCount = 0;
let FleshAddValue = 1;

//============================ Click Upgrade =======================//
const ClickUpgBtn = document.getElementById("clickUpg-Btn");
const ClickUpgBtnTxt = document.getElementById("clickUpg-Price");

let ClickUpgPrice = 50;
let ClickUpgPriceMultiplier = 2;
let ClickUpgClickMultiplier = 2;

//============================ Click Upgrade =======================//
const AutoclickUpgBtn = document.getElementById("autoclickUpg-Btn");
const AutoclickUpgBtnTxt = document.getElementById("autoclickUpg-Price");

let AutoclickUpgPrice = 100;
let AutoclickUpgPriceMultiplier = 2;
let AutoclickUpgAddValue = 0;
let AutoclickUpgIntervalTime = 750;
let AutoclickInterval;

//============================ Core ================================//
setInterval(() => {
  FleshCountTxt.innerText = parseInt(FleshCount);
}, 100);

CatImg.onmousedown = () => {
  AddFleshCount(FleshAddValue);
  CatImg.setAttribute("src", "./res/img/catBite.png");
  CatImg.style.transform = "scale(.9)";
};

CatImg.onmouseup = () => {
  CatImg.setAttribute("src", "./res/img/catWait.png");
  CatImg.style.transform = "scale(1)";
}

function AddFleshCount(value) {
  FleshCount += value;
}

//============================ Click Upgrade =======================//
ClickUpgBtn.onmousedown = () => {
  if (FleshCount < ClickUpgPrice) return;
  AddFleshCount(-ClickUpgPrice);
  ClickUpgPrice *= ClickUpgPriceMultiplier;
  FleshAddValue *= ClickUpgClickMultiplier;
  ClickUpgBtnTxt.innerText = ClickUpgPrice;
}

//============================ Autoclick Upgrade =======================//
AutoclickUpgBtn.onmousedown = () => {
  if (FleshCount < AutoclickUpgPrice) return;
  AddFleshCount(-AutoclickUpgPrice);
  AutoclickUpgPrice *= AutoclickUpgPriceMultiplier;
  AutoclickUpgBtnTxt.innerText = AutoclickUpgPrice;
  AutoclickUpgAddValue = AutoclickUpgAddValue == 0 ? 1 : AutoclickUpgAddValue * 1.5;
  if (AutoclickUpgIntervalTime > 10) AutoclickUpgIntervalTime *= .9;
  console.log(AutoclickUpgIntervalTime);

  clearInterval(AutoclickInterval);
  AutoclickInterval = setInterval(() => {
    AddFleshCount(AutoclickUpgAddValue);
  }, AutoclickUpgIntervalTime);
}