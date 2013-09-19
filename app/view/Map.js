Ext.define('Waffle.view.Map', {
    extend: 'Ext.Panel',
    id: 'mapView',
    alias: 'widget.mapview',

    requires: [
        'Ext.Map'
    ],

    currentPosition: null,
    meCircle: null,

    config: {
        title: 'Map',
        layout: 'fit',
        items: [
            {
                id: 'map',
                xtype: 'map',
                mapOptions: {
                    center: new google.maps.LatLng(51.452031, 5.480751),  // Rachelsmolen 1
                    zoom: 17,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    navigationControl: true,
                    navigationControlOptions: {
                        style: google.maps.NavigationControlStyle.DEFAULT
                    }
                },

                setPosition: function (position) {
                    var mapView = Ext.getCmp('mapView');

                    mapView.currentPosition = position;

                    if (mapView.meCircle !== null) {
                        mapView.meCircle.setRadius(position.accuracy);
                        mapView.meCircle.setCenter(new google.maps.LatLng(position.latitude, position.longitude));
                    }
                },

                listeners: {
                    maprender: function (comp) {
                        var mapView = Ext.getCmp('mapView');
                        var map = this.getMap();

                        // Construct the polygon
                        // Note that we don't specify an array or arrays, but instead just
                        // a simple array of LatLngs in the paths property
                        new google.maps.Polygon({
                            paths: [
                                new google.maps.LatLng(51.452031, 5.480751),
                                new google.maps.LatLng(51.451871, 5.48074),
                                new google.maps.LatLng(51.451864, 5.481421),
                                new google.maps.LatLng(51.451526, 5.481529),
                                new google.maps.LatLng(51.451523, 5.482097),
                                new google.maps.LatLng(51.45166, 5.482129),
                                new google.maps.LatLng(51.45167, 5.482891),
                                new google.maps.LatLng(51.451847, 5.482993),
                                new google.maps.LatLng(51.451844, 5.482038),
                                new google.maps.LatLng(51.452018, 5.482033),
                                new google.maps.LatLng(51.451961, 5.483326),
                                new google.maps.LatLng(51.452342, 5.483154),
                                new google.maps.LatLng(51.452439, 5.481529),
                                new google.maps.LatLng(51.452553, 5.481529),
                                new google.maps.LatLng(51.452559, 5.480842),
                                new google.maps.LatLng(51.452222, 5.480917),
                                new google.maps.LatLng(51.452155, 5.481883),
                                new google.maps.LatLng(51.452048, 5.481904),
                                new google.maps.LatLng(51.452025, 5.480804)
                            ],
                            strokeColor: "#FF0000",
                            strokeOpacity: 0.8,
                            strokeWeight: 2,
                            fillColor: "#FF0000",
                            fillOpacity: 0.35,
                            map: map
                        });

                        mapView.meCircle = new google.maps.Circle({
                            strokeColor: '#33b5e5',
                            strokeOpacity: 0.8,
                            strokeWeight: 2,
                            fillColor: '#33b5e5',
                            fillOpacity: 0.35,
                            map: map
                        });

                        if (mapView.currentPosition !== null) {
                            var pos = mapView.currentPosition;
                            mapView.meCircle.setRadius(pos.accuracy);
                            mapView.meCircle.setCenter(new google.maps.LatLng(pos.latitude, pos.longitude));
                        }
                    }
                }
            }
        ]

    }
});
