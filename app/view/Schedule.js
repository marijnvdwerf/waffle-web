Ext.define('Waffle.view.Schedule', {
    extend: 'Ext.Panel',
    alias: 'widget.scheduleview',

    requires: [
        'Ext.ux.TouchCalendarEvents'
    ],

    config: {
        title: 'Events List',
        layout: 'fit'
    },

    initialize: function () {
        this.callParent(arguments);

        this.setItems([
            {
                xtype: 'toolbar',
                docked: 'top'
            },
            {
                xclass: 'Ext.ux.TouchCalendarView',
                itemId: 'calendarView',
                id: 'calendar',
                minDate: Ext.Date.add(new Date(), Ext.Date.DAY, 0),
                maxDate: Ext.Date.add(new Date(), Ext.Date.DAY, 60),
                viewMode: 'day',
                value: new Date(),
                eventStore: Ext.getStore('Lessons'),

                plugins: [Ext.create('Ext.ux.TouchCalendarEvents', {
                    eventBarTpl: '{event} - {location}'
                })]
            }
        ]);

        Ext.Ajax.request({
            url: "http://waffle.marijnvdwerf.nl/api/me",
            method: "GET",
            params:{"X-Authorization":"token "+"li2kmo3o6ugpb3onzecacrqfdx"},
            disableCaching: true,
            useDefaultXhrHeader:false,
            success: function (msg) {
                var response = msg.responseText;
                console.log(response);
            },
            failure: function (msg) {
                console.log(msg);
            }
        })
    }


});
