Ext.define('Waffle.view.Login', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginview',
    config: {
        title: 'Login',

        listeners: [
            {
                delegate: '#logInButton',
                event: 'tap',
                fn: function () {
                    var userNameText = Ext.getCmp('userNameTextField').getValue();
                    var passwordText = Ext.getCmp('passwordTextField').getValue();
                    this.fireEvent('attemptLogin', userNameText, passwordText);
                }
            }
        ],

        items: [
            {
                xtype: 'label',
                html: 'Login failed. Please enter the correct credentials.',
                itemId: 'signInFailedLabel',
                hidden: true,
                hideAnimation: 'fadeOut',
                showAnimation: 'fadeIn',
                style: 'color:#990000;margin:5px 0px;'
            },
            {
                xtype: 'fieldset',
                title: 'Login Example',
                items: [
                    {
                        xtype: 'textfield',
                        placeHolder: 'Username',
                        id: 'userNameTextField',
                        name: 'userNameTextField',
                        required: true
                    },
                    {
                        xtype: 'passwordfield',
                        placeHolder: 'Password',
                        id: 'passwordTextField',
                        name: 'passwordTextField',
                        required: true
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'logInButton',
                ui: 'action',
                padding: '10px',
                margin: '8px',
                text: 'Log In'
            }
        ]
    }
});
