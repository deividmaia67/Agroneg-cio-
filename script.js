// ======================
// SCROLL SUAVE MENU
// ======================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute('href')
        );

        target.scrollIntoView({
            behavior:'smooth'
        });

    });

});

// ======================
// BOTÃO SAIBA MAIS
// ======================

document.getElementById('learnMoreBtn')
.addEventListener('click', () => {

    document.querySelector('#sobre')
    .scrollIntoView({
        behavior:'smooth'
    });

});

// ======================
// ANIMAÇÃO AO ROLAR
// ======================

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll('.fade-in')
.forEach(el => {

    observer.observe(el);

});

// ======================
// CONTADORES ANIMADOS
// ======================

const counters =
document.querySelectorAll('.counter');

const counterObserver =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            startCounter(entry.target);

            counterObserver.unobserve(
                entry.target
            );

        }

    });

},{
    threshold:0.5
});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

function startCounter(counter){

    const target =
    +counter.dataset.target;

    let current = 0;

    const increment =
    target / 250;

    function updateCounter(){

        current += increment;

        if(current < target){

            counter.innerText =
            Math.floor(current)
            .toLocaleString('pt-BR');

            requestAnimationFrame(
                updateCounter
            );

        }else{

            counter.innerText =
            target.toLocaleString('pt-BR');

        }

    }

    updateCounter();
}

// ======================
// BOTÃO VOLTAR AO TOPO
// ======================

const topButton =
document.getElementById('topButton');

window.addEventListener('scroll', () => {

    if(window.scrollY > 400){

        topButton.classList.add(
            'show-top'
        );

    }else{

        topButton.classList.remove(
            'show-top'
        );

    }

});

topButton.addEventListener('click', () => {

    window.scrollTo({
        top:0,
        behavior:'smooth'
    });

});

// ======================
// CARROSSEL AUTOMÁTICO
// ======================

const slides =
document.querySelectorAll('.slide');

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {

        slide.classList.remove(
            'active-slide'
        );

    });

    slides[index].classList.add(
        'active-slide'
    );

}

setInterval(() => {

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}, 4000);

// ======================
// PARALLAX HERO
// ======================

window.addEventListener('scroll', () => {

    const hero =
    document.querySelector('.hero');

    const scroll =
    window.pageYOffset;

    hero.style.backgroundPositionY =
    scroll * 0.4 + 'px';

});

// ======================
// HEADER DINÂMICO
// ======================

const header =
document.querySelector('header');

window.addEventListener('scroll', () => {

    if(window.scrollY > 80){

        header.style.background =
        'rgba(15,23,42,0.97)';

    }else{

        header.style.background =
        'rgba(15,23,42,.85)';

    }

});

// ======================
// FORMULÁRIO
// ======================

const form =
document.getElementById(
    'contactForm'
);

form.addEventListener(
'submit',
function(e){

    e.preventDefault();

    const nome =
    document.getElementById(
        'name'
    ).value;

    document.getElementById(
        'formMessage'
    ).innerHTML =

    `🌱 Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;

    document.getElementById(
        'formMessage'
    ).style.color =
    '#22C55E';

    this.reset();

});

// ======================
// EFEITO NOS CARDS
// ======================

document.querySelectorAll('.card')
.forEach(card => {

    card.addEventListener(
    'mousemove',
    e => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        const rotateX =
        ((y / rect.height)
        - 0.5) * -10;

        const rotateY =
        ((x / rect.width)
        - 0.5) * 10;

        card.style.transform =
        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)
        `;
    });

    card.addEventListener(
    'mouseleave',
    () => {

        card.style.transform =
        'translateY(0)';

    });

});