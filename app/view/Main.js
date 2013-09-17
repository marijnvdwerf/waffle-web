Ext.define('Waffle.view.Main', {
    extend: 'Ext.navigation.View',
    alias: 'widget.mainview',
    requires: [
        'Waffle.view.Schedule'
    ],
    config: {
        fullscreen: true,
        items: [
            {
                xtype: 'scheduleview'
            }
        ]
    }
});
