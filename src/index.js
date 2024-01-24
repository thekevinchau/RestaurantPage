import loadPage from "./modules/loadPage";
import { NavBar } from "./modules/NavBar.js"
import './style.css';

function component(){
    let display = document.querySelector('.display');
    display.appendChild(NavBar());
}


function initialize(){
    loadPage();
    component();
}

initialize();