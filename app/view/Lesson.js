Ext.define('Waffle.view.Lesson', {
    extend: 'Ext.Panel',

    config: {
        title: 'Lesson',
        flex: 2,
        scrollable: {
            direction: 'vertical'
        },

        items: [
            {
                xtype: 'component',
                html: 'Lesson details',
            },
            {
                xtype: 'button',
                itemId: 'showMapButton',
                ui: 'action',
                padding: '10px',
                margin: '8px',
                text: 'Locate building'
            }
        ],

        listeners: [
            {
                delegate: '#showMapButton',
                event: 'tap',
                fn: function () {
                    var mapView = Ext.create('Waffle.view.Map');
                    this.up('main').push(mapView)
                }
            }
        ]
    }

});
