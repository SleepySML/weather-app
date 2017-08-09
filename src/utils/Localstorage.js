export const LocalStorageAPI = {
    all: function() {
        let arrayCur=[];
        for(let key in localStorage) {
            arrayCur.push({number: key, name: localStorage[key]});
        }
        console.log(arrayCur);
        return arrayCur;
    },

    get: function(id) {
        return localStorage.getItem(id);
    },

    set: function (number, name) {
        if(localStorage)
        localStorage.setItem(number,name);
    },
    remove: function (id) {
        localStorage.removeItem(id);
    }
};
