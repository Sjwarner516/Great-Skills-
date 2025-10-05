
import {presidents} from '../data/presidents.js'
const presidentData = [{"name":"curly","born":1903},{"died":1911,"took_office":1945},{"left_office":1955,"Party":"republican"},{"photo":"image"}];
console.log(presidentData)

const myTarget = document.querySelector('#cards')
const pathStart = "//www.loc.gov/static/portals/free-to-use/public-domain/presidential-portraits/"


// function presidentss(x) {
    //let theName = document.createElement('h2');
    //let theBorn = document.createElement('p')

   // theName.textContent = presidentData[x].name;
   // theBorn.textContent = presidentData[x].born;

   // presiPointer.appendChild(theName);
   // presiPointer.appendChild(theBorn);
//} 


//presidentss(0);
//presidentss(1);

for (let x = 0; x < presidents.length; x++) {
let barDiv = document.createElement('div')
barDiv.innerHTML = `<p>${presidents[x].name}<p>`;

let myImage = document.createElement('img');
myImage.setAttribute("src", pathStart+presidents[x].photo)
myImage.setAttribute("alt", presidents[x].name)

let myCaption = document.createElement('figcaption')
myCaption.innerHTML = `Served ${presidents[x].took_office} to ${presidents[x].left_office}<br> Lived from ${presidents[x].born} - ${presidents[x].died} <br> Party: ${presidents[x].party}`


let myFigure = document.createElement('figure');

myFigure.appendChild(barDiv);
myFigure.appendChild(myImage);
myFigure.appendChild(myCaption);

myTarget.appendChild(myFigure);
}