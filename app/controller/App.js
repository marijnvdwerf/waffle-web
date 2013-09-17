Ext.define('Waffle.controller.App', {
    extend: 'Ext.app.Controller',

    token: null,

    setToken: function (token) {
        this.token = token;
    },

    setUser: function (jsonUser) {
        console.log('Welkom ' + jsonUser.name);

        var lessonStore = Ext.getStore('Lessons');

        jsonUser.schedules.forEach(function (schedule) {
            Ext.Ajax.request({
                url: 'http://waffle.marijnvdwerf.nl/ical/',
                method: 'GET',
                params: {
                    class: schedule.item_id
                },
                disableCaching: false,
                useDefaultXhrHeader: false,
                success: function (response) {
                    var scheduleData = Ext.JSON.decode(response.responseText);
                    scheduleData.lessons.forEach(function (lessonData) {
                        var lesson = new Waffle.model.Lesson(lessonData);
                        lesson.set('colour', schedule.color);
                        lessonStore.add(lesson);
                    });
                },
                failure: function (response) {
                    console.error(response);
                }
            });
        });
    }
});
