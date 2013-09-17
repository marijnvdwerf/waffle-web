Ext.define('Waffle.model.Lesson', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'course',
                type: 'string',
                defaultValue: '-'
            },
            {
                name: 'teacher',
                type: 'string',
                defaultValue: '-'
            },
            {
                name: 'room',
                type: 'string',
                defaultValue: '-'
            },
            {
                name: 'start',
                type: 'date',
                dateFormat: 'c'
            },
            {
                name: 'end',
                type: 'date',
                dateFormat: 'c'
            },
            {
                name: 'colour',
                type: 'string',
                defaultValue: '#abcdef'
            }
        ]
    }
});

