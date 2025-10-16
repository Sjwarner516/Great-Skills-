import {people} from '../data/people.js'
console.log(people)

// tag the html elements 

const myNavigation = document.querySelector('nav')
const myParent = document.querySelector('#peopleHere')


const btnAll = document.createElement('button')
btnAll.textContent = "All People"
btnAll.addEventListener('click', () => displayPeople(people))

// create female button with filter 
const btnFemale = document.createElement('button')
btnFemale.textContent = "Female People"
btnFemale.addEventListener('click', () =>{
    const arrayFemale = people.filter(person => person.gender === 'female')
    displayPeople(arrayFemale)
} ) //end of button 

// create male button with filter 
const btnMale = document.createElement('button')
btnMale.textContent = "Male People"
btnMale.addEventListener('click', () =>{
    const arrayMale = people.filter(person => person.gender === 'male')
    displayPeople(arrayMale)
} ) //end of button 

// create other button with filter 
const btnOther = document.createElement('button')
btnOther.textContent = "Other"
btnOther.addEventListener('click', () =>{
    const arrayOther = people.filter(person => person.gender != 'male' && person.gender != 'female')
    displayPeople(arrayOther)
} ) //end of button 


//add buttons to page 

// create and all people buton 
myNavigation.appendChild(btnAll)
myNavigation.appendChild(btnFemale)
myNavigation.appendChild(btnMale)
myNavigation.appendChild(btnOther)



// loop through the people 
function displayPeople(x) {
    myParent.textContent = ""
    x.forEach(person => {
     const myFigure = document.createElement('figure')

     const myImage = document.createElement('img')
     //console.log(person.url)
     const explodedArray = person.url.split('/')

     const charNumber = explodedArray[5]
     myImage.src= `https://starwars.dgmuvu.com/characters/${charNumber}.jpg`
     myImage.alt = person.name

     const myCaption = document.createElement('figcaption')
     myCaption.textContent = person.name
        //assign gender class
    console.log(person.gender)
    switch (person.gender) {
        case "female":
             myFigure.className = "female"
            break;
        case "male":
             myFigure.className = "male"
            break;
        default: 
            myFigure.className = "other"
    }    //end of switch




     // assemble the parts
     myFigure.appendChild(myImage)
     myFigure.appendChild(myCaption)

     myParent.appendChild(myFigure)

    
    
    } // end of fat arrow
    ) //end of loop 
} // end of function 
 displayPeople(people);