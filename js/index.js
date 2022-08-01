let buttons = document.querySelectorAll('.controls button');
let dc = document.querySelector('.dynamic-content');



let stock = {
    c1: {
            heading: 'Solar Energy',
            bodyText: 'Solar energy is a powerful source of energy that can be used to heat, cool, and light homes and businesses. The total amount of solar energy incident on Earth is vastly in excess of the world’s current and anticipated energy requirements. If suitably harnessed, this highly diffused source has the potential to satisfy all future energy needs.',
            imageSrc: './img/solar.jpg',
            imageAlt: 'solar'
        },
    c2: {
        heading: 'Wind Energy',
        bodyText: 'Wind energy is one of the fastest-growing renewable energy technologies. Usage is on the rise worldwide, in part because costs are falling. Global installed wind-generation capacity onshore and offshore has increased by a factor of almost 75 in the past two decades.',
        imageSrc: './img/wind.jpg',
        imageAlt: 'wind'
    },
    c3: {
        heading: 'Hydro Energy',
        bodyText: 'Hydroelectric energy, also called hydroelectric power or hydroelectricity, is a form of energy that harnesses the power of water in motion—such as water flowing over a waterfall—to generate electricity. People have used this force for millennia. Over two thousand years ago, people in Greece used flowing water to turn the wheel of their mill to ground wheat into flour.',
        imageSrc: './img/hydro.jpg',
        imageAlt: 'hydro'
    }
}

dc.innerHTML = `<img src="${stock.c1.imageSrc}" alt="${stock.c1.imageAlt}" />
                <div class="dd-content">
                <h2>${stock.c1.heading}</h2>
                <p>${stock.c1.bodyText}</p>
                </div>
                `;



                
function displayContent(ev) {

    
    let currentBtn = ev.target;

    
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].hasAttribute('id')){
              buttons[i].removeAttribute('id');
              
        }
    }

    currentBtn.setAttribute('id','active-button');
    

    if (currentBtn.textContent === 'Solar') {
        dc.innerHTML = `<img src="${stock.c1.imageSrc}" alt="${stock.c1.imageAlt}" />
                <div class="dd-content">
                <h2>${stock.c1.heading}</h2>
                <p>${stock.c1.bodyText}</p>
                </div>
                `;
    } else if (currentBtn.textContent === 'Wind') {
        dc.innerHTML = `<img src="${stock.c2.imageSrc}" alt="${stock.c2.imageAlt}" />
                <div class="dd-content">
                <h2>${stock.c2.heading}</h2>
                <p>${stock.c2.bodyText}</p>
                </div>
                `;
    } else {
        dc.innerHTML = `<img src="${stock.c3.imageSrc}" alt="${stock.c3.imageAlt}" />
                <div class="dd-content">
                <h2>${stock.c3.heading}</h2>
                <p>${stock.c3.bodyText}</p>
                </div>
                `;
    }
}


for (let button of buttons) {
    button.addEventListener('click', displayContent);
}
