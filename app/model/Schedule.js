Ext.define('Waffle.model.Schedule', {
    extend: 'Ext.data.Model',

    requires: ['Waffle.model.Lesson'],

    config: {
        fields: [
            {
                name: 'item_type',
                type: 'string'
            },
            {
                name: 'item_id',
                type: 'string'
            },
            {
                name: 'item_name',
                type: 'string'
            },
            {
                name: 'color',
                type: 'string',
                convert: function (value, record) {
                    record.lessons().each(function (lesson) {
                        lesson.set('colour', value);
                    });

                    return value;
                }
            },
            {
                name: 'updateTrigger',
                type: 'boolean'
            }
        ],

        hasMany: [
            {
                model: 'Waffle.model.Lesson',
                name: 'lessons'
            }
        ]
    },

    fetchLessons: function () {
        var schedule = this;

        Ext.Ajax.request({
            url: 'http://waffle.marijnvdwerf.nl/ical/',
            method: 'GET',
            params: {
                class: this.get('item_id')
            },
            disableCaching: false,
            useDefaultXhrHeader: false,
            success: function (response) {
                var scheduleData = Ext.JSON.decode(response.responseText);
                scheduleData.lessons.forEach(function (lessonData) {
                    lessonData.colour = schedule.get('color');
                    schedule.lessons().add(lessonData);
                });

                // dirty way to trigger Schedule Store update
                schedule.set('updateTrigger', !schedule.get('updateTrigger'));
            },
            failure: function (response) {
                console.error(response);
            }
        });
    }
});
