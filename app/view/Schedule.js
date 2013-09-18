Ext.define('Waffle.view.Schedule', {
    extend: 'Ext.Panel',
    alias: 'widget.scheduleview',

    requires: [
        'Ext.ux.TouchCalendarView',
        'Ext.ux.TouchCalendarEvents',
        'Ext.ux.TouchCalendarDayEvents'
    ],

    config: {
        title: 'Events List',
        layout: 'fit'
    },

    initialize: function () {
        this.callParent(arguments);

        var lessonsStore = Ext.getStore('Lessons');
        this.setItems([
            {
                xclass: 'Ext.ux.TouchCalendarView',
                itemId: 'calendarView',
                id: 'calendar',
                minDate: Ext.Date.add(new Date(), Ext.Date.DAY, 0),
                maxDate: Ext.Date.add(new Date(), Ext.Date.DAY, 60),
                viewMode: 'day',
                value: new Date(),
                eventStore: lessonsStore,

                plugins: [Ext.create('Ext.ux.TouchCalendarEvents', {
                    eventBarTpl: '<b>{course}</b> {teacher}<br/>{room}'
                })]
            }
        ]);
    }


});
