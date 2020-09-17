const btn = document.querySelector('.header__hamburger');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');

// display menu while clicking hamburger
btn.addEventListener('click', function() {
    menu.classList.toggle('active');
    logo.classList.toggle('white-color');
})

// hide menu while scrolling down
window.addEventListener('scroll', function () {
    menu.classList.remove('active');
    logo.classList.remove('white-color');
})

const features = [...document.querySelectorAll('.features__item')];

const featuresImg = document.querySelector('.features__img');
const featuresTitle = document.querySelector('.features__subtitle');
const featuresText = document.querySelector('.features__info');

// switch between features
features.forEach(feature => {
    feature.addEventListener('click', function() {
        features.forEach(feature => {
            if(feature.classList.contains('features__item--active')) {
                feature.classList.remove('features__item--active');
            }
        })
        feature.classList.toggle('features__item--active');
        if(feature.classList.contains('features__item--second')) {
            featuresImg.src = `./images/illustration-features-tab-2.svg`;
            featuresTitle.textContent = 'Intelligent search';
            featuresText.textContent = 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
        }
        if(feature.classList.contains('features__item--first')) {
            featuresImg.src = `./images/illustration-features-tab-1.svg`;
            featuresTitle.textContent = 'Bookmark in one click';
            featuresText.textContent = 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
        }
        if (feature.classList.contains('features__item--last')) {
            featuresImg.src = `./images/illustration-features-tab-3.svg`;
            featuresTitle.textContent = 'Share your bookmarks';
            featuresText.textContent = '  Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button..'
        }
    })
})

// contact form validation
const form = document.querySelector('.contact__form');
const input = document.querySelector('.contact__input');
const messageDiv = document.querySelector('.contact__form-message');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;

    if (!reg.test(input.value)) {
        messageDiv.style.display = 'block';
        input.style.border = '2px solid hsl(0, 94%, 66%)';
    }
    else {
        e.target.submit();
    }
})