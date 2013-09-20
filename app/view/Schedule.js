Ext.define('Waffle.view.Schedule', {
    extend: 'Ext.Panel',
    alias: 'widget.scheduleview',

    requires: [
        'Waffle.libs.tc.TouchCalendarView',
        'Waffle.libs.tc.TouchCalendarEvents',
        'Waffle.libs.tc.TouchCalendarDayEvents',
        'Waffle.view.Lesson'
    ],

    config: {
        title: 'Rooster',
        layout: 'fit'
    },

    initialize: function () {
        this.callParent(arguments);

        var lessonsStore = Ext.getStore('Lessons');
        this.setItems([
            {
                xclass: 'Waffle.libs.tc.TouchCalendarView',
                itemId: 'calendarView',
                id: 'calendar',
                minDate: Ext.Date.add(new Date(), Ext.Date.DAY, 0),
                maxDate: Ext.Date.add(new Date(), Ext.Date.DAY, 60),
                viewMode: 'day',
                value: new Date(),
                eventStore: lessonsStore,

                plugins: [Ext.create('Waffle.libs.tc.TouchCalendarEvents', {
                    eventBarTpl: '<b>{course}</b> {teacher}<br/>{room}'
                })]
            }
        ]);
    }


});
