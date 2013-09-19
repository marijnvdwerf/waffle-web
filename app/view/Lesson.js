Ext.define('Waffle.view.Lesson', {
    extend: 'Ext.Panel',

    requires: [
        'Waffle.view.Map'
    ],

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
                    '<h1 style="color: {colour}; text-transform: uppercase;">{course}</h1>',
                    '<p>{teacher}</p>',
                    '<p>{room}</p>',
                    '<p>{start:date("j F Y")}</p>',
                    '<p>{start:date("H:i")} - {end:date("H:i")}</p>'
                ],
                margin: "24px"
            },
            {
                xtype: 'button',
                id: 'showMapButton',
                ui: 'action',
                padding: '10px',
                margin: '8px',
                text: 'Locate building'
            }
        ]
    },

    setData: function(event) {
        this.setTitle(event.course);
    }
});
