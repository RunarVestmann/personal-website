const mainSection = document.getElementById("main-section");

const home = document.getElementById("home");
const projects = document.getElementById("projects");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

let currentDisplay = home;

const description = document.getElementById("logo-description");
const descriptionOptions = [
    "Aspiring Programmer, CS Student & Creator",
    "Just some guy", 
    "Fellow dreamer",
    "Icelander",
    "Soon to be Computer Scientist",
    "Overthinker",
    "Genuine dude"
];

const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu-container");

let isMenuShowing = false;

function generateDescription(){  
    const previousDescription = description.textContent;
    description.textContent = descriptionOptions[Math.floor(Math.random() * descriptionOptions.length)];

    //Generate the description again if the previous one gets generated
    if(description.textContent === previousDescription){
        generateDescription();
    }
}

function toggleMenu(){
    if(!isMenuShowing){
        openMenu();
    }
    else{
        closeMenu();
    }
}

function openMenu(){
    menuButton.classList = "fa fa-times fa-4x"; //Change the hamburger to be an x
    menu.style.display = "flex"; //Show menu
    mainSection.style.opacity = "0.3"; //Lower the opacity of what's behind the menu
    isMenuShowing = true;
}

function closeMenu(){
    menuButton.classList = "fa fa-bars fa-4x"; //Change the x to be a hamburger icon
    menu.style.display = "none"; //Hide menu
    mainSection.style.opacity = "1"; //Set the opacity back to normal
    isMenuShowing = false;
}

function showHomePage(){
    changeDisplay(home);
}

function showProjectsPage(){
    changeDisplay(projects);
}

function showAboutPage(){
    changeDisplay(about);
}

function showContactPage(){
    changeDisplay(contact);
}

function changeDisplay(newDisplay){
    if(currentDisplay === newDisplay){
        closeMenu();
        return;
    }
    currentDisplay.style.display = "none";
    newDisplay.style.display = "block";
    currentDisplay = newDisplay;
    closeMenu();
}
