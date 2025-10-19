//add links to html
const myNavigation = document.querySelector('nav')
const myViewer = document.querySelector('main')




// grab data then WAIT for result 
fetch("/ships/data/starships.json")
    .then((Response) => Response.json())
    .then((shipArray) => {
        console.log(shipArray)
        populateNav(shipArray)
    })


    //populate nav bar
    function populateNav(allShips) {
        console.log(allShips)
        allShips.forEach(ship => {
          let myBtn = document.createElement('button')
          myBtn.textContent = ship.name   
           myBtn.addEventListener('click',() => showShip(ship)) 
            myNavigation.appendChild(myBtn) 



         
        })  // end of loop
    } // end of nav populate

    //ship viewer 
    function showShip(shipData) {
        console.log(shipData)

     //create figure and its parts
     let myFigure = document.createElement('figure')
     let myImage = document.createElement('img')
     let myCaption = document.createElement('figcaption')

     //assign data to the figure
     let urlArray = shipData.url.split('/')
     
        myImage.src=`https://starwars.dgmuvu.com/ships/${urlArray[5]}.jpg`
        myCaption.textContent = shipData.name
        //error checking for image
        myImage.addEventListener('error', () => {
           myImage.src= "https://starwars.dgmuvu.com/ships/placeholder.jpg"
           myCaption.textContent = `The ${shipData.name } was wrecked by JarJar Binks` 

        } )

     //assemble the figure
     myFigure.appendChild(myImage)
     myFigure.appendChild(myCaption)

     // add figure to HTML 
     myViewer.textContent = ''
     myViewer.appendChild(myFigure)
    } // end viewer 