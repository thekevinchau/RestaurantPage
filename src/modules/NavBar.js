function createButtons(){
        //Button 1
        let homeButton = document.createElement('button');
        homeButton.textContent = 'Home';
        homeButton.setAttribute('class', 'nav-buttons')
        //Button2
        let menuButton = document.createElement('button');
        menuButton.textContent = 'Menu'
        menuButton.setAttribute('class', 'nav-buttons')
        //Button 3
        let contactButton = document.createElement('button');
        contactButton.textContent = 'Contact';
        contactButton.setAttribute('class', 'nav-buttons')

        let navRight = document.createElement('div');
        navRight.setAttribute('class', 'nav-right');
        navRight.appendChild(homeButton);
        navRight.appendChild(menuButton);
        navRight.appendChild(contactButton);

        return navRight;
}

export function NavBar(){
    let NavBar = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.textContent = "Pal Cafe";
    NavBar.appendChild(h1);
    NavBar.appendChild(createButtons());
    NavBar.setAttribute('class', 'NavBar');
    return NavBar;
}