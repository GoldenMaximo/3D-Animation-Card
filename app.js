const card = document.querySelector('.card');
const container = document.querySelector('.container');
// Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

// Multiple event listener function for mobile + desktop events
const addMultipleEventListeners = (element, events, handler) => {
    events.forEach(e => element.addEventListener(e, handler))
}

// Mouse movement animation trigger
addMultipleEventListeners(container, ['mousemove', 'touchmove'], e => {
    // (window.innerWidth / 2) Gets the whole monitor width then
    //  cuts it in half to arrive straight into the center

    let touch;
    if (e.changedTouches) {
        touch = e.changedTouches[0];
    }

    const xAxis = (window.innerWidth / 2 - (e.pageX || touch.pageX)) / 25;
    const yAxis = (window.innerHeight / 2 - (e.pageY || touch.pageY)) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
addMultipleEventListeners(container, ['mouseenter', 'touchstart'], () => {
    // If the transition was straight up added to the css file
    //  it would result in the mouse movement transform animation
    //   getting "transitioned" as well
    card.style.transition = 'none';

    // Popout effect
    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    description.style.transform = 'translateZ(125px)';
    sizes.style.transform = 'translateZ(100px)';
    purchase.style.transform = 'translateZ(75px)';
});

// Animate Out
addMultipleEventListeners(container, ['mouseleave', 'touchend'], () => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';

    // Popout back
    title.style.transform = 'translateZ(0)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
});