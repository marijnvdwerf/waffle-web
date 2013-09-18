Ext.define('Waffle.view.ScheduleManagement', {
    extend: 'Ext.Panel',
    alias: 'widget.schedulemanagementview',

    config: {

        layout: {
            type: 'vbox'
        },

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Schedules',
                items: [
                    {
                        id: 'closeScheduleManagement',
                        iconCls: 'delete1',
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
                itemTpl: '<b style="color: {color}">{item_id}</b> {item_name}',
                store: 'Schedules'
            }
        ]
    }

});
