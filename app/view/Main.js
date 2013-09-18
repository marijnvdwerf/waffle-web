Ext.define('Waffle.view.Main', {
    extend: 'Ext.navigation.View',
    alias: 'widget.mainview',
    id: 'navigation',
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
