// javascript
// document.getElementById("count-el").innerText = 5
let incrementBtn = document.querySelector('#increment-btn')
let saveBtn = document.querySelector('#save-btn')
let saveEl = document.querySelector("#save-el")
let countEL = document.querySelector("#count-el")
let count = 0 

                                      

incrementBtn.onclick = function increment() {
    count += 1 
    countEL.textContent = count
}

 saveBtn.onclick = function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEL.textContent = 0
    count = 0 
}