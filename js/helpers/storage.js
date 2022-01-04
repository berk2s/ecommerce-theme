/**
 * Saves item with given key-value pair
 * @param {*} key name of item
 * @param {*} value content of item
 */
export const saveItem = (key, value) => {
    if (!key || !value) {
        throw new Error("Invalid arguments.")
    }

    if (localStorage.getItem(key)) {
        localStorage.removeItem(key)
    }

    localStorage.setItem(key, value);
}

/**
 * Gets item from storage
 * @param {*} key name that item
 * @returns Item
 * @throws If there is no item
 */
export const getItem = (key) => {
    const item = localStorage.getItem(key);

    if (!item || item.trim() == '') {
        throw new Error("There is no any item");
    }

    return item;
}

/**
 * Clears all storage;
 */
export const clearAll = () => {
    localStorage.clear();
}