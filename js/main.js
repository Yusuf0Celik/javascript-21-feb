console.log("main.js loaded");

const gamesList = [{
  name: "Minecraft",
  made: "(2011)"
},
{
  name: "Warzone",
  made: "(2020)"
},
{
  name: "Sifu",
  made: "(2022)"
},
{
  name: "Dying Light 2",
  made: "(2022)"
},
{
  name: "Horizon Forbidden West",
  made: "(2022)"
}
]

const list = document.querySelector(".list");
const listItem = document.querySelector(".list-item");
const listItemMade = document.querySelector(".list-item-made ");

for (let i = 0; i < gamesList.length; i++) {
  console.log(gamesList[i].name, gamesList[i].made);
  const li = document.createElement("li");
  li.innerHTML = gamesList[i].name;
  li.classList.add("list-item");
  list.appendChild(li);
  
  const liMade = document.createElement("div");
  liMade.innerHTML = gamesList[i].made
  liMade.classList.add("list-item-made")
  li.appendChild(liMade)
}