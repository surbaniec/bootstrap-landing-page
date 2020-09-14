const btn = document.querySelector('.header__hamburger');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');

btn.addEventListener('click', function() {
    menu.classList.toggle('active');
    logo.classList.toggle('white-color');
})

const features = [...document.querySelectorAll('.features__item')];

const featuresImg = document.querySelector('.features__img');
const featuresTitle = document.querySelector('.features__subtitle');
const featuresText = document.querySelector('.features__info');

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