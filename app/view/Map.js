Ext.define('Waffle.view.Map', {
    extend: 'Ext.Panel',
    alias: 'widget.mapview',
    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'map',
                useCurrentLocation: true,
                mapOptions: {
                    center: new google.maps.LatLng(37.381592, -122.135672),  //nearby San Fran
                    zoom: 12,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    navigationControl: true,
                    navigationControlOptions: {
                        style: google.maps.NavigationControlStyle.DEFAULT
                    }
                }
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                ui: 'light'
            }
        ]

    }
});
