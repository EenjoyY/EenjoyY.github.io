function showMenu(toggle, menu){
    const toggleMenu = document.getElementById(toggle);
    const sideMenu = document.getElementById(menu);

    if(toggleMenu && sideMenu){
        toggleMenu.addEventListener('click' , function(){
            sideMenu.classList.toggle('active-menu');
    
        })
    }
}
showMenu("header-toggle", "header-menu");



const swiper = new Swiper(".mainscreen_container", {
    loop: true,
    grabCursor: true,
    effect: 'cube',
    direction: "horizontal",
    keyboard: {
        enable: true,
    },
    autoplay: {
        delay: 3500,
        disableOnInterection: false,
    },
    speed: 1200,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.95,
      },
    navigation: {
        prevEl: ".arrow-left",
        nextEl: ".arrow-right"
    },
});






























