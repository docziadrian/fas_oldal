//Egységes menü rendszer kialakítása:
const nav = document.querySelector('.navbar') //osztály alapján kiválasztja a menüt
fetch('https://raw.githubusercontent.com/docziadrian/fas_oldal/main/docs/assets/menu-rendszer/navbar.html') //Egy template -re hivatkozik, amiben a menü van
.then(res=>res.text()) //=> function
.then(data=>{
    nav.innerHTML=data
    const parser = new DOMParser() //HTML -> DOM
    const doc = parser.parseFromString(data, 'text/html') //aktiválja a text/html parsert
    eval(doc.querySelector('script').textContent)
})

document.getElementById("myFrame").addEventListener("load", myFunction);

function myFunction() {
  aktiv_oldal = document.getElementById("")
}

function ugras_a_kosar_oldalra() {
  window.location = "";
}