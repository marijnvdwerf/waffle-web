Ext.define('Waffle.view.Schedule', {
    extend: 'Ext.Panel',
    alias: 'widget.scheduleview',

    config: {
        title: 'Events List',
        layout: 'fit',

        items: [
            {
                xtype: 'toolbar',
                docked: 'top'
            },
            {
                xclass: 'Ext.ux.TouchCalendarView',
                itemId: 'calendarView',
                minDate: Ext.Date.add(new Date(), Ext.Date.DAY, 0),
                maxDate: Ext.Date.add(new Date(), Ext.Date.DAY, 60),
                viewMode: 'day',
                value: new Date()
            }
        ]
    }


});
