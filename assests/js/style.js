/*------------------ SHOW MENU ------------------*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    /*Valida se existe as variaveis*/
    if(toggle && nav){
        /*Adiciona a class show-menu na div com a class nav-menu*/
        toggle.addEventListener('click', () => {
            /*Adiciona a class show-menu na div que tem o id nav-menu*/
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav')

/*------------------ REMOVE MENU MOBILE ------------------*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav')
    //Quando clicar em cada nav__link, remove a class show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=================DEIXA O LINK CLICADO COM A CLASSE ACTIVE =================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(l => l.classList.remove('active-link'))
        this.classList.add('active-link')
    }
}

linkColor.forEach(l => l.addEventListener('click', colorLink))