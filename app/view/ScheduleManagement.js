Ext.define('Waffle.view.ScheduleManagement', {
    extend: 'Ext.Panel',
    alias: 'widget.schedulemanagementview',

    requires: [
        'Ext.dataview.List'
    ],

    config: {

        layout: {
            type: 'vbox'
        },

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Roosters',
                items: [
                    {
                        id: 'closeScheduleManagement',
                        iconCls: 'delete',
                        iconMask: true,
                        align: 'left'
                    }
                ]
            },
            {
                id: 'scheduleList',
                xtype: 'list',
                flex: 1,
                disableSelection: true,
                itemTpl: '<b style="color: {color}; text-transform:uppercase;">{item_id}</b> {item_name}',
                store: 'Schedules'
            }
        ]
    }

});
