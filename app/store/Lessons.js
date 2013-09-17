/**
 * Waffle.store.Lessons
 */
Ext.define('Waffle.store.Lessons', {

    extend: 'Ext.data.Store',

    config: {
        storeId: 'Lessons',
        model: 'Waffle.model.Lesson'
    }

});
