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
                id: 'lessonDetails',
                xtype: 'component',
                tpl: [
                    '<h1>{course}</h1>',
                    '<p>asdfsadffdsadfsvc;asvj;jn;adfsklnadfns;kn;adfsgkln;sdfgkl;n</p>'
                ]
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
                    Ext.getCmp('navigation').push(mapView)
                }
            }
        ]
    }

});
