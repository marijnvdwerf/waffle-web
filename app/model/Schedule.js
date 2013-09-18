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

    updateColor: function () {
        var allColors = [
            '#DC4FAD',
            '#AC193D',
            '#D24726',
            '#FF8F32',
            '#82BA00',
            '#008A17',
            '#03B3B2',
            '#008299',
            '#5DB2FF',
            '#0072C6',
            '#4617B4',
            '#8C0095'
        ];
        var index = allColors.indexOf(this.get('color')) + 1;
        if (index >= allColors.length) {
            index = 0;
        }
        this.set('color', allColors[index]);
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
