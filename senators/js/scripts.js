
import {allSenators} from '../data/senators.js'
console.log(allSenators)

// photograph path
//const photoPath = "https://unitedstates.github.io/images/congress/225x275/${senator.id}.jpg"
//const photoSize = "-200px.jpeg"

// ref to html
const myNavigation = document.querySelector('nav');
const cardParent = document.querySelector('#allcards');

//event listener for all 
const btnAll = document.createElement('button')
btnAll.textContent = "All Senators"
btnAll.addEventListener('click', () => displayPeople(allSenators))

// create female button with filter 
const btnFemale = document.createElement('button')
btnFemale.textContent = "Female Senators"
btnFemale.addEventListener('click', () =>{
    const arrayFemale = allSenators.filter(person => person.gender === 'F')
    displayPeople(arrayFemale)
} ) //end of button 

// create male button with filter 
const btnMale = document.createElement('button')
btnMale.textContent = "Male Senators"
btnMale.addEventListener('click', () =>{
    const arrayMale = allSenators.filter(person => person.gender === 'M')
    displayPeople(arrayMale)
} ) //end of button 

//create party button with filter
const btnRepublican = document.createElement('button')
btnRepublican.textContent = "Republican"
btnRepublican.addEventListener('click', () =>{
    const arrayRepublican = allSenators.filter(person => person.party === 'R')
    displayPeople(arrayRepublican)
} ) //end of button 

//create party button with filter
const btnDemocrat = document.createElement('button')
btnDemocrat.textContent = "Democrat"
btnDemocrat.addEventListener('click', () =>{
    const arrayDemocrat = allSenators.filter(person => person.party === 'D')
    displayPeople(arrayDemocrat)
} ) //end of button 

// create and people buton 
myNavigation.appendChild(btnAll)
myNavigation.appendChild(btnFemale)
myNavigation.appendChild(btnMale)
myNavigation.appendChild(btnRepublican)
myNavigation.appendChild(btnDemocrat)

// loop through the people 
function displayPeople(peopleArray) {
    cardParent.innerHTML = ''; // Clear previous cards

    peopleArray.forEach(person => {
        const myFigure = document.createElement('figure');

        const myImage = document.createElement('img');
        myImage.src = `https://unitedstates.github.io/images/congress/225x275/${person.id}.jpg`;
        myImage.alt = `${person.first_name} ${person.last_name}`;

        const fullName = `${person.first_name} ${person.middle_name ? person.middle_name + ' ' : ''}${person.last_name}`;
        const myCaption = document.createElement('figcaption');
        myCaption.textContent = fullName;
        myCaption.innerHTML = `Facebook: ${person.facebook_account} <br> Twitter: ${person.twitter_account} <br> YouTube: ${person.youtube_account}`;

        // Gender class
     switch (person.gender) {
            case "F":
                myFigure.classList.add("female");
                break;
            default:
                myFigure.classList.add("male");
        }
        

        // Party class
        switch (person.party) {
            case "R":
                myFigure.classList.add("Republican");
                break;
            default:
                myFigure.classList.add("Democrat");
        }

        // Assemble and append
        myFigure.appendChild(myImage);
        myFigure.appendChild(myCaption);
        cardParent.appendChild(myFigure);
    });
}

 displayPeople(allSenators);