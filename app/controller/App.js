Ext.define('Waffle.controller.App', {
    extend: 'Ext.app.Controller',

    config: {
        stores: [
            'Schedules',
            'Lessons'
        ],

        control: {
            '#calendar': {
                eventtap: 'onTapEvent'
            },
            '#locateLesson': {
                tap: 'onTapLocate'
            }
        }
    },

    token: null,

    currentEvent: null,

    setToken: function (token) {
        this.token = token;
    },

    setUser: function (jsonUser) {
        console.log('Welkom ' + jsonUser.name);

        var scheduleStore = Ext.getStore('Schedules');

        jsonUser.schedules.forEach(function (scheduleData) {
            var schedule = new Waffle.model.Schedule(scheduleData);
            schedule.fetchLessons();
            scheduleStore.add(schedule);
        });
    },

    launch: function (a, b) {
        Ext.getStore('Schedules').on({
            addrecords: this.onScheduleStoreChanged,
            removerecords: this.onScheduleStoreChanged,
            updaterecord: this.onScheduleStoreChanged,
            scope: this
        });
    },

    onTapEvent: function (event) {
        this.currentEvent = event.data;

        var detailsView = Ext.create('Waffle.view.Lesson');
        Ext.getCmp('navigation').push(detailsView);
        Ext.getCmp('lessonDetails').setData(this.currentEvent);
    },

    onTapLocate: function () {
        var mapView = Ext.create('Waffle.view.Map');
        Ext.getCmp('navigation').push(mapView);
    },

    onScheduleStoreChanged: function () {
        var lessonsStore = Ext.getStore('Lessons');

        var scheduleStore = Ext.getStore('Schedules');
        scheduleStore.each(function (item, index, length) {
            console.log(item.lessons().data.items);
            lessonsStore.add(item.lessons().data.items);
        });
    }
});
