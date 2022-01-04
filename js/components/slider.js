/**
 * Initializes slider while page is loading
 */
export function initializeSlider() {
    showSlideImage(0);

    document.querySelector('.js-slider-action-prev-btn').addEventListener('click', btnClick)
    document.querySelector('.js-slider-action-next-btn').addEventListener('click', btnClick)

}

/**
 * Handles and subscribes to event
 * @param {*} event DOM event
 */
function btnClick(event) {
    const index = findAttribute(event, 'data-actionable-index');
    showSlideImage(index)
}

/**
 * Finds attributes and returns value of attribute
 * @param {*} event DOM object
 * @param {*} attrName name of attribute
 * @returns value of attribute
 */
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

/**
 * Shows slider image with given index
 * @param {*} index indicates of image that will be shown
 */
function showSlideImage(index) {
    const sliderElements = getJsSliderElements();

    if (sliderElements.length === 0) {
        throw new Error("There is no any slider image, please add images into slider");
    }

    for (let i = 0; i < sliderElements.length; i++) {
        sliderElements[i].style.display = 'none';
    }

    sliderElements[index].style.display = 'block';
    updateSliderButtonAttrs(index)
}

/**
 * Updates slider button attributes
 * @param {*} _index 
 */
function updateSliderButtonAttrs(_index) {
    const index = parseInt(_index);
    const imagesLength = (getJsSliderElements().length - 1);

    const prevBtn = document.querySelector('.js-slider-action-prev-btn');
    const nextBtn = document.querySelector('.js-slider-action-next-btn');

    prevBtn.setAttribute('data-actionable-index', index === 0 ? imagesLength : (index - 1))
    nextBtn.setAttribute('data-actionable-index', index === imagesLength ? 0 : (index + 1))
}

/**
 * @returns DOM object of slider
 */
function getJsSliderElements() {
    return document.getElementsByClassName('js-slider-image')
}