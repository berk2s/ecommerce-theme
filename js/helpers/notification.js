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

/**
 * Geneartes notification box in order to notify users
 * @param {*} notificationHeader 
 * @param {*} notificationText 
 * @param {*} notificationType 
 * @returns 
 */
export const sezginNotification = (notificationHeader, notificationText, notificationType) => {
    return `<div class="alert ${notificationType} alert-dismissible fade show" role="alert">
    <strong>${notificationHeader}</strong> ${notificationText}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`;
}
