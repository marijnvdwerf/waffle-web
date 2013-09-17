Ext.define('Waffle.controller.Login', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            loginView: 'loginview',
            mainView: 'mainview'
        },
        control: {
            loginView: {
                attemptLogin: 'doAttemptLogin'
            }
        }
    },

    doAttemptLogin: function (pcn, password) {
        var loginView = this.getLoginView();
        var loginController = this;
        var appController = Waffle.app.getController('App');

        Ext.Ajax.request({
            url: "http://waffle.marijnvdwerf.nl/api/authenticate",
            method: "POST",
            params: {
                client_id: "TESTING_CLIENT_ID",
                pcn: pcn,
                password: password
            },
            disableCaching: false,
            useDefaultXhrHeader: false,
            success: function (response) {
                var userData = Ext.JSON.decode(response.responseText);
                appController.setToken(userData.access_token);
                appController.setUser(userData.user);
                loginController.onSignInSuccess();
            },
            failure: function (response) {
                loginController.onSignInFail();
            }
        });
    },

    onSignInSuccess: function () {
        var loginView = this.getLoginView();
        var mainView = this.getMainView();

        loginView.setMasked(false);
        Ext.Viewport.animateActiveItem(mainView, { type: 'fade' });
    },

    onSignInFail: function () {
        this.getLoginView().onSignInFail();
    }
});
