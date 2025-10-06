

import { films } from '../data/films.js'

const pathStart = "//starwars.dgmuvu.com/films/"
const myTarget = document.querySelector('#filmInfo')
const btnGrid = document.querySelector("#grid")
const btnList = document.querySelector("#list")

btnGrid.addEventListener('click', () => {
  myTarget.classList.remove('makeList')
  myTarget.classList.add('makeGrid')
})

btnList.addEventListener('click', () => {
  myTarget.classList.remove('makeGrid')
  myTarget.classList.add('makeList')
})

for (let x = 0; x < films.length; x++) {
  let barDiv = document.createElement('div')
  barDiv.innerHTML = `<p>${films[x].title}</p>`;

  let myImage = document.createElement('img');
  myImage.setAttribute("src", `${pathStart}${films[x].episode_id}.webp`);
  myImage.setAttribute("alt", films[x].title);

  let myCaption = document.createElement('figcaption');
  myCaption.innerHTML = `Director: ${films[x].director}<br>Producer: ${films[x].producer}<br>Released: ${films[x].release_date}`;

  let myFigure = document.createElement('figure');
  myFigure.appendChild(barDiv);
  myFigure.appendChild(myImage);
  myFigure.appendChild(myCaption);

  myTarget.appendChild(myFigure);
}
