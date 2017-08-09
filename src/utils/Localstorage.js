export const LocalStorageAPI = {
    all: function() {
        let arrayCur=[];
        for (let key in localStorage) {
            arrayCur.push(localStorage[key]);
        }
        return arrayCur;
    },

    get: function(name) {
        return localStorage.getItem(name);
    },

    set: function (name) {
        if(localStorage)
        localStorage.setItem(name,name);
    },
    remove: function (name) {
        localStorage.removeItem(name);
    }
};
