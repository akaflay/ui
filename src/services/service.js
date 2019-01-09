export const get = () => {
    return new Promise((resolve, reject) => {
        resolve([]);
    });
}

export const create = (name, count) => {
    return new Promise((resolve, reject) => {
        resolve([{id: count + 1, firstName: name.firstName, lastName: name.lastName}]);
    });
}
export const remove = (id = undefined) => {
    return new Promise((resolve, reject) => {
        id ? resolve() : resolve([]);
    });
}