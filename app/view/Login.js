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
                    alert('Login button tapped');
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
                        itemId: 'userNameTextField',
                        name: 'userNameTextField',
                        required: true
                    },
                    {
                        xtype: 'passwordfield',
                        placeHolder: 'Password',
                        itemId: 'passwordTextField',
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
                text: 'Log In'
            }
        ]
    }
});
