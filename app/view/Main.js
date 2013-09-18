Ext.define('Waffle.view.Main', {
    extend: 'Ext.navigation.View',
    alias: 'widget.mainview',
    id: 'navigationView',
    requires: [
        'Waffle.view.Schedule'
    ],
    config: {
        fullscreen: true,

        navigationBar: {
            items: [
                {
                    xtype: 'button',
                    id: 'openScheduleManagement',
                    text: 'Edit',
                    align: 'right',
                    hideAnimation: {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: {
                        type: 'fadeIn',
                        duration: 200
                    }
                }
            ]
        },

        items: [
            {
                xtype: 'scheduleview'
            }
        ]
    }
});
