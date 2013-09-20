Ext.define('Waffle.view.Login', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginview',
    requires: [
        'Ext.Label',
        'Ext.form.FieldSet',
        'Ext.field.Password'
    ],
    config: {
        title: 'Inloggen',

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
                html: 'Inloggen mislukt. Controleer je PCN en wachtwoord.',
                itemId: 'signInFailedLabel',
                hidden: true,
                hideAnimation: 'fadeOut',
                showAnimation: 'fadeIn',
                style: 'background-color:#ff4444;color:#fff;margin:15px 0px;padding:5px 15px'
            },
            {
                xtype: 'fieldset',
                title: 'Aanmelden',
                items: [
                    {
                        xtype: 'textfield',
                        placeHolder: 'PCN',
                        id: 'userNameTextField',
                        name: 'userNameTextField',
                        required: true
                    },
                    {
                        xtype: 'passwordfield',
                        placeHolder: 'Wachtwoord',
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
                text: 'Inloggen'
            }
        ]
    },
    onSignInFail: function() {
        var label = this.down('#signInFailedLabel');
        label.show();
    }
});
