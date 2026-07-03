
var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
console.log("tabname")
function opentab(tabname) {
    console.log(tabname)
    for(tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function showMorWork() {
    hiddenWork = document.getElementsByClassName('see-more');
    for (work of hiddenWork) {
        work.classList.remove('see-more')
    }
}

var sidemenu = document.getElementById('side-menu');

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
