export function initializeSlider() {
    showSlideImage(0);

    document.querySelector('.js-slider-action-prev-btn').addEventListener('click', btnClick)
    document.querySelector('.js-slider-action-next-btn').addEventListener('click', btnClick)

}

function btnClick(event) {
    const index = findAttribute(event, 'data-actionable-index');
    console.log(index);
    showSlideImage(index)
}

function findAttribute(event, attrName) {
    for (let i = 0; i < event.path.length; i++) {
        const el = event.path[i];
        if (el.attributes) {
            for (let x = 0; x < el.attributes.length; x++) {
                if (el.attributes[x].name === attrName) {
                    return el.attributes[x].value;
                }
            }
        }
    }
}

function showSlideImage(index) {
    const sliderElements = getJsSliderElements();

    if (sliderElements.length === 0) {
        throw new Error("There is no any slider image, please add images into slider");
        return;
    }

    for (let i = 0; i < sliderElements.length; i++) {
        sliderElements[i].style.display = 'none';
    }

    sliderElements[index].style.display = 'block';
    updateSliderButtonAttrs(index)
}

function updateSliderButtonAttrs(_index) {
    const index = parseInt(_index);
    const imagesLength = (getJsSliderElements().length - 1);

    const prevBtn = document.querySelector('.js-slider-action-prev-btn');
    const nextBtn = document.querySelector('.js-slider-action-next-btn');

    prevBtn.setAttribute('data-actionable-index', index === 0 ? imagesLength : (index - 1))
    nextBtn.setAttribute('data-actionable-index', index === imagesLength ? 0 : (index + 1))
}

function getJsSliderElements() {
    return document.getElementsByClassName('js-slider-image')
}