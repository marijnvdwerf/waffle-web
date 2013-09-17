Ext.define('Waffle.controller.App', {
    extend: 'Ext.app.Controller',

    token: null,

    setToken: function (token) {
        this.token = token;
    },

    setUser: function (jsonUser) {
        console.log('Welkom ' + jsonUser.name);
    }
});
