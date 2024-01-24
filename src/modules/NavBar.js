export function NavBar(){
    //Button 1
    let homeButton = document.createElement('button');
    //Button2
    let menuButton = document.createElement('button');
    //Button 3
    let contactButton = document.createElement('button');

    let navRight = document.createElement('div');
    navRight.setAttribute('class', 'nav-right');
    navRight.appendChild(homeButton);
    navRight.appendChild(menuButton);
    navRight.appendChild(contactButton);


    let NavBar = document.createElement('div');
    NavBar.textContent = "Pal Cafe";
    NavBar.appendChild(navRight);
    NavBar.setAttribute('class', 'NavBar');
    return NavBar;
}