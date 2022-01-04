let errorTemplate = `<div class="alert {0}" role="alert">{1}</div>`

/**
 * Geneartes notification box in order to notify users
 * @param {*} renderEl object that box will be rendered in there
 * @param {*} text content of box
 * @param {*} type type of box
 */
export const generateNotification = (renderEl, text, type = 'success') => {
    if (!renderEl) {
        throw new Error("Cannot find element that notification will be rendered into that");
    }

    renderEl.innerHTML = errorTemplate.format(type, text);
}