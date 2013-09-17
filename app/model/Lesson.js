Ext.define('Waffle.model.Lesson', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'course',
                type: 'string'
            },
            {
                name: 'teacher',
                type: 'string',
                defaultValue: '-'
            },
            {
                name: 'room',
                type: 'string'
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
            }
        ]
    }
});

