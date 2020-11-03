const card = document.querySelector('.card');
const container = document.querySelector('.container');
// Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

// Mouse movement animation trigger
container.addEventListener('mousemove', e => {
    // (window.innerWidth / 2) Gets the whole monitor width then
    //  cuts it in half to arrive straight into the center
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

// Animate In
container.addEventListener('mouseenter', e => {
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
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';

    // Popout back
    title.style.transform = 'translateZ(0)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
});