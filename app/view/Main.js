Ext.define('Waffle.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'main',
    config: {
        fullscreen: true,
        items: [
            {
                xtype: 'scheduleview'
            }
        ]
    }
});
