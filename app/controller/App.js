Ext.define('Waffle.controller.App', {
    extend: 'Ext.app.Controller',

    config: {
        stores: [
            'Schedules',
            'Lessons'
        ],

        refs: {
            mainView: 'mainview',
            managementView: 'schedulemanagementview'
        },

        control: {
            '#navigationView': {
                push: 'onNavigationChange',
                pop: 'onNavigationChange'
            },
            '#openScheduleManagement': {
                tap: 'onTapManage'
            },
            '#scheduleList': {
                itemtap: 'onTapSchedule'
            },
            '#closeScheduleManagement': {
                tap: 'onTapCloseManage'
            },
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

    onNavigationChange: function (navigationView) {
        if (navigationView.getItems().length === 2) {
            // Schedule
            Ext.getCmp('manageSchedulesButton').setHidden(false);
        } else {
            Ext.getCmp('manageSchedulesButton').setHidden(true);
        }
    },

    onTapManage: function () {
        Ext.Viewport.animateActiveItem(this.getManagementView(), { type: 'cover', direction: 'up' });
    },

    onTapSchedule: function (list, index, target, schedule, e, eOpts) {
        schedule.updateColor();
    },

    onTapCloseManage: function () {
        Ext.Viewport.animateActiveItem(this.getMainView(), { type: 'reveal', direction: 'down' });
    },

    onTapEvent: function (event) {
        this.currentEvent = event.data;

        var detailsView = Ext.create('Waffle.view.Lesson');
        detailsView.setData(this.currentEvent);
        Ext.getCmp('navigationView').push(detailsView);
        Ext.getCmp('lessonDetails').setData(this.currentEvent);
    },

    onTapLocate: function () {
        var mapView = Ext.create('Waffle.view.Map');
        Ext.getCmp('navigationView').push(mapView);
    },

    onScheduleStoreChanged: function () {
        var lessonsStore = Ext.getStore('Lessons');

        var scheduleStore = Ext.getStore('Schedules');
        scheduleStore.each(function (item, index, length) {
            lessonsStore.add(item.lessons().data.items);
        });
    }
});
