Ext.define('Waffle.view.Lesson', {
    extend: 'Ext.Component',

    config: {
        title: 'Lesson',
        flex: 2,
        scrollable: {
            direction: 'vertical'
        },

        html: '<h1>{[this.getTitle()]}</h1>'
    }

});
