/**
 * Waffle.store.Lessons
 */
Ext.define('Waffle.store.Lessons', {

    extend: 'Ext.data.Store',

    config: {
        storeId: 'Lessons',
        model: 'Waffle.model.Lesson',
        proxy: {
            type: 'ajax',
            url: 'data/lessons.json',
            reader: {
                type: 'json',
                rootProperty: 'lessons'
            }
        },
        autoLoad: true
    }

});
