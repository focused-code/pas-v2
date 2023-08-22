
export const filterNotifications = (list, type) => {
    return list.filter(e => e.type === type);
}

export const checkStatus = (list, id) => {
    if (list.length === 0) {
        return false;
    } else {
        return list.includes(id);
    }
};