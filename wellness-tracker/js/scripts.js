const saveBtn = document.querySelector('#saveProfile');

saveBtn.addEventListener('click', () => {
    let fn = document.querySelector('input[name="first"]');
    localStorage.setItem('animal-first', fn.value)
     let ln = document.querySelector('input[name="last"]');
    localStorage.setItem('animal-last', ln.value)
    let select = document.querySelector('#physical');
    let ev = select.options[select.selectedIndex].value; 
    localStorage.setItem('animal-emoji', ev) 
    let et = select.options[select.selectedIndex].text; 
    localStorage.setItem('animal-text', et) 

})

const deleteBtn = document.querySelector('#delProfile')
deleteBtn.addEventListener('click', () => {
    localStorage.removeItem('animal-first');
    localStorage.removeItem('animal-last');
    localStorage.removeItem('animal-emoji');
    localStorage.removeItem('animal-text');
    location.reload();
})

const check = localStorage.getItem('animal-first')
if (check === null) {
    document.querySelector('#newProfile').className = 'showMe'
    document.querySelector('#myProfile').className = 'hideMe'

    //do nothing
} else {
document.querySelector('#newProfile').className = 'hideMe'
document.querySelector('#myProfile').className = 'showMe'

document.querySelector('#first').textContent = localStorage.getItem('animal-first');
document.querySelector('#last').textContent = localStorage.getItem('animal-last');
document.querySelector('#emotion').textContent = localStorage.getItem('animal-text');

document.querySelector('#emoji').src = localStorage.getItem('animal-emoji');
}