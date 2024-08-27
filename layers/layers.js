var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_NexSat_BB_1962_Footprint_1 = new ol.format.GeoJSON();
var features_NexSat_BB_1962_Footprint_1 = format_NexSat_BB_1962_Footprint_1.readFeatures(json_NexSat_BB_1962_Footprint_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NexSat_BB_1962_Footprint_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NexSat_BB_1962_Footprint_1.addFeatures(features_NexSat_BB_1962_Footprint_1);
var lyr_NexSat_BB_1962_Footprint_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NexSat_BB_1962_Footprint_1, 
                style: style_NexSat_BB_1962_Footprint_1,
                popuplayertitle: "NexSat_BB_1962_Footprint",
                interactive: true,
                title: '<img src="styles/legend/NexSat_BB_1962_Footprint_1.png" /> NexSat_BB_1962_Footprint'
            });
var format_NexSat_BB_1961_Footprint_2 = new ol.format.GeoJSON();
var features_NexSat_BB_1961_Footprint_2 = format_NexSat_BB_1961_Footprint_2.readFeatures(json_NexSat_BB_1961_Footprint_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NexSat_BB_1961_Footprint_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NexSat_BB_1961_Footprint_2.addFeatures(features_NexSat_BB_1961_Footprint_2);
var lyr_NexSat_BB_1961_Footprint_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NexSat_BB_1961_Footprint_2, 
                style: style_NexSat_BB_1961_Footprint_2,
                popuplayertitle: "NexSat_BB_1961_Footprint",
                interactive: true,
                title: '<img src="styles/legend/NexSat_BB_1961_Footprint_2.png" /> NexSat_BB_1961_Footprint'
            });
var format_NexSat_BB_1960_Footprint_3 = new ol.format.GeoJSON();
var features_NexSat_BB_1960_Footprint_3 = format_NexSat_BB_1960_Footprint_3.readFeatures(json_NexSat_BB_1960_Footprint_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NexSat_BB_1960_Footprint_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NexSat_BB_1960_Footprint_3.addFeatures(features_NexSat_BB_1960_Footprint_3);
var lyr_NexSat_BB_1960_Footprint_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NexSat_BB_1960_Footprint_3, 
                style: style_NexSat_BB_1960_Footprint_3,
                popuplayertitle: "NexSat_BB_1960_Footprint",
                interactive: true,
                title: '<img src="styles/legend/NexSat_BB_1960_Footprint_3.png" /> NexSat_BB_1960_Footprint'
            });
var format_NexSat_BB_1959_Footprint_4 = new ol.format.GeoJSON();
var features_NexSat_BB_1959_Footprint_4 = format_NexSat_BB_1959_Footprint_4.readFeatures(json_NexSat_BB_1959_Footprint_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NexSat_BB_1959_Footprint_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NexSat_BB_1959_Footprint_4.addFeatures(features_NexSat_BB_1959_Footprint_4);
var lyr_NexSat_BB_1959_Footprint_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NexSat_BB_1959_Footprint_4, 
                style: style_NexSat_BB_1959_Footprint_4,
                popuplayertitle: "NexSat_BB_1959_Footprint",
                interactive: true,
                title: '<img src="styles/legend/NexSat_BB_1959_Footprint_4.png" /> NexSat_BB_1959_Footprint'
            });
var format_NexSat_BB_1958_Footprint_5 = new ol.format.GeoJSON();
var features_NexSat_BB_1958_Footprint_5 = format_NexSat_BB_1958_Footprint_5.readFeatures(json_NexSat_BB_1958_Footprint_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NexSat_BB_1958_Footprint_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NexSat_BB_1958_Footprint_5.addFeatures(features_NexSat_BB_1958_Footprint_5);
var lyr_NexSat_BB_1958_Footprint_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NexSat_BB_1958_Footprint_5, 
                style: style_NexSat_BB_1958_Footprint_5,
                popuplayertitle: "NexSat_BB_1958_Footprint",
                interactive: true,
                title: '<img src="styles/legend/NexSat_BB_1958_Footprint_5.png" /> NexSat_BB_1958_Footprint'
            });
var format_NexSat_BB_1894_Footprint_6 = new ol.format.GeoJSON();
var features_NexSat_BB_1894_Footprint_6 = format_NexSat_BB_1894_Footprint_6.readFeatures(json_NexSat_BB_1894_Footprint_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NexSat_BB_1894_Footprint_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NexSat_BB_1894_Footprint_6.addFeatures(features_NexSat_BB_1894_Footprint_6);
var lyr_NexSat_BB_1894_Footprint_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NexSat_BB_1894_Footprint_6, 
                style: style_NexSat_BB_1894_Footprint_6,
                popuplayertitle: "NexSat_BB_1894_Footprint",
                interactive: true,
                title: '<img src="styles/legend/NexSat_BB_1894_Footprint_6.png" /> NexSat_BB_1894_Footprint'
            });
var format_NexSat_BB_1893_Footprint_7 = new ol.format.GeoJSON();
var features_NexSat_BB_1893_Footprint_7 = format_NexSat_BB_1893_Footprint_7.readFeatures(json_NexSat_BB_1893_Footprint_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NexSat_BB_1893_Footprint_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NexSat_BB_1893_Footprint_7.addFeatures(features_NexSat_BB_1893_Footprint_7);
var lyr_NexSat_BB_1893_Footprint_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NexSat_BB_1893_Footprint_7, 
                style: style_NexSat_BB_1893_Footprint_7,
                popuplayertitle: "NexSat_BB_1893_Footprint",
                interactive: true,
                title: '<img src="styles/legend/NexSat_BB_1893_Footprint_7.png" /> NexSat_BB_1893_Footprint'
            });
var lyr_NexSat_BB_1962_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "NexSat_BB_1962",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NexSat_BB_1962_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8070061.919936, 2644610.696633, 8070252.194892, 2644821.095626]
                            })
                        });
var lyr_NexSat_BB_1961_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "NexSat_BB_1961",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NexSat_BB_1961_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8070039.675889, 2644602.763857, 8070218.643277, 2644802.066095]
                            })
                        });
var lyr_NexSat_BB_1960_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "NexSat_BB_1960",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NexSat_BB_1960_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8070031.023344, 2644629.807167, 8070231.604513, 2644798.144479]
                            })
                        });
var lyr_NexSat_BB_1959_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "NexSat_BB_1959",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NexSat_BB_1959_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8070025.590301, 2644622.288342, 8070281.207933, 2644841.609822]
                            })
                        });
var lyr_NexSat_BB_1958_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "NexSat_BB_1958",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NexSat_BB_1958_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8070062.161561, 2644633.640692, 8070292.812797, 2644892.106922]
                            })
                        });
var lyr_NexSat_BB_1894_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "NexSat_BB_1894",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NexSat_BB_1894_13.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8070141.094817, 2644956.790809, 8071422.073700, 2646114.690001]
                            })
                        });
var lyr_NexSat_BB_1893_14 = new ol.layer.Image({
                            opacity: 1,
                            title: "NexSat_BB_1893",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NexSat_BB_1893_14.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8069776.632087, 2645275.798193, 8070830.400336, 2646546.225388]
                            })
                        });
var format_flight_datalog_15 = new ol.format.GeoJSON();
var features_flight_datalog_15 = format_flight_datalog_15.readFeatures(json_flight_datalog_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_flight_datalog_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_flight_datalog_15.addFeatures(features_flight_datalog_15);
var lyr_flight_datalog_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_flight_datalog_15, 
                style: style_flight_datalog_15,
                popuplayertitle: "flight_datalog",
                interactive: true,
                title: '<img src="styles/legend/flight_datalog_15.png" /> flight_datalog'
            });
var group_FlightData = new ol.layer.Group({
                                layers: [lyr_flight_datalog_15,],
                                fold: "open",
                                title: "Flight Data"});
var group_ImageSamples = new ol.layer.Group({
                                layers: [lyr_NexSat_BB_1962_8,lyr_NexSat_BB_1961_9,lyr_NexSat_BB_1960_10,lyr_NexSat_BB_1959_11,lyr_NexSat_BB_1958_12,lyr_NexSat_BB_1894_13,lyr_NexSat_BB_1893_14,],
                                fold: "open",
                                title: "Image Samples"});
var group_GroundFootprints = new ol.layer.Group({
                                layers: [lyr_NexSat_BB_1962_Footprint_1,lyr_NexSat_BB_1961_Footprint_2,lyr_NexSat_BB_1960_Footprint_3,lyr_NexSat_BB_1959_Footprint_4,lyr_NexSat_BB_1958_Footprint_5,lyr_NexSat_BB_1894_Footprint_6,lyr_NexSat_BB_1893_Footprint_7,],
                                fold: "open",
                                title: "Ground Footprints"});

lyr_GoogleSatellite_0.setVisible(true);lyr_NexSat_BB_1962_Footprint_1.setVisible(false);lyr_NexSat_BB_1961_Footprint_2.setVisible(false);lyr_NexSat_BB_1960_Footprint_3.setVisible(false);lyr_NexSat_BB_1959_Footprint_4.setVisible(false);lyr_NexSat_BB_1958_Footprint_5.setVisible(false);lyr_NexSat_BB_1894_Footprint_6.setVisible(false);lyr_NexSat_BB_1893_Footprint_7.setVisible(false);lyr_NexSat_BB_1962_8.setVisible(true);lyr_NexSat_BB_1961_9.setVisible(true);lyr_NexSat_BB_1960_10.setVisible(true);lyr_NexSat_BB_1959_11.setVisible(true);lyr_NexSat_BB_1958_12.setVisible(true);lyr_NexSat_BB_1894_13.setVisible(true);lyr_NexSat_BB_1893_14.setVisible(true);lyr_flight_datalog_15.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_GroundFootprints,group_ImageSamples,group_FlightData];
lyr_NexSat_BB_1962_Footprint_1.set('fieldAliases', {'id': 'id', });
lyr_NexSat_BB_1961_Footprint_2.set('fieldAliases', {'id': 'id', });
lyr_NexSat_BB_1960_Footprint_3.set('fieldAliases', {'id': 'id', });
lyr_NexSat_BB_1959_Footprint_4.set('fieldAliases', {'id': 'id', });
lyr_NexSat_BB_1958_Footprint_5.set('fieldAliases', {'id': 'id', });
lyr_NexSat_BB_1894_Footprint_6.set('fieldAliases', {'id': 'id', });
lyr_NexSat_BB_1893_Footprint_7.set('fieldAliases', {'id': 'id', });
lyr_flight_datalog_15.set('fieldAliases', {'index': 'index', 'time': 'time', 'speed': 'speed', 'latitude': 'latitude', 'longitude': 'longitude', 'altitude': 'altitude', 'eulerX': 'eulerX', 'eulerY': 'eulerY', 'eulerZ': 'eulerZ', 'accelX': 'accelX', 'accelY': 'accelY', 'accelZ': 'accelZ', 'gyroX': 'gyroX', 'gyroY': 'gyroY', 'gyroZ': 'gyroZ', 'temperature': 'temperature', 'magX': 'magX', 'magY': 'magY', 'magZ': 'magZ', 'linearAccelX': 'linearAccelX', 'linearAccelY': 'linearAccelY', 'linearAccelZ': 'linearAccelZ', 'gravityX': 'gravityX', 'gravityY': 'gravityY', 'gravityZ': 'gravityZ', 'altitude_difference': 'altitude_difference', 'bmp_pressure': 'bmp_pressure', });
lyr_NexSat_BB_1962_Footprint_1.set('fieldImages', {'id': 'TextEdit', });
lyr_NexSat_BB_1961_Footprint_2.set('fieldImages', {'id': 'TextEdit', });
lyr_NexSat_BB_1960_Footprint_3.set('fieldImages', {'id': 'TextEdit', });
lyr_NexSat_BB_1959_Footprint_4.set('fieldImages', {'id': '', });
lyr_NexSat_BB_1958_Footprint_5.set('fieldImages', {'id': '', });
lyr_NexSat_BB_1894_Footprint_6.set('fieldImages', {'id': 'TextEdit', });
lyr_NexSat_BB_1893_Footprint_7.set('fieldImages', {'id': '', });
lyr_flight_datalog_15.set('fieldImages', {'index': 'Range', 'time': 'Range', 'speed': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'altitude': 'TextEdit', 'eulerX': 'TextEdit', 'eulerY': 'TextEdit', 'eulerZ': 'TextEdit', 'accelX': 'TextEdit', 'accelY': 'TextEdit', 'accelZ': 'TextEdit', 'gyroX': 'TextEdit', 'gyroY': 'TextEdit', 'gyroZ': 'TextEdit', 'temperature': 'TextEdit', 'magX': 'TextEdit', 'magY': 'TextEdit', 'magZ': 'TextEdit', 'linearAccelX': 'TextEdit', 'linearAccelY': 'TextEdit', 'linearAccelZ': 'TextEdit', 'gravityX': 'TextEdit', 'gravityY': 'TextEdit', 'gravityZ': 'TextEdit', 'altitude_difference': 'TextEdit', 'bmp_pressure': 'TextEdit', });
lyr_NexSat_BB_1962_Footprint_1.set('fieldLabels', {'id': 'no label', });
lyr_NexSat_BB_1961_Footprint_2.set('fieldLabels', {'id': 'no label', });
lyr_NexSat_BB_1960_Footprint_3.set('fieldLabels', {'id': 'no label', });
lyr_NexSat_BB_1959_Footprint_4.set('fieldLabels', {'id': 'no label', });
lyr_NexSat_BB_1958_Footprint_5.set('fieldLabels', {'id': 'no label', });
lyr_NexSat_BB_1894_Footprint_6.set('fieldLabels', {'id': 'no label', });
lyr_NexSat_BB_1893_Footprint_7.set('fieldLabels', {'id': 'no label', });
lyr_flight_datalog_15.set('fieldLabels', {'index': 'inline label - visible with data', 'time': 'inline label - visible with data', 'speed': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'altitude': 'inline label - visible with data', 'eulerX': 'inline label - visible with data', 'eulerY': 'inline label - visible with data', 'eulerZ': 'inline label - visible with data', 'accelX': 'inline label - visible with data', 'accelY': 'inline label - visible with data', 'accelZ': 'inline label - visible with data', 'gyroX': 'inline label - visible with data', 'gyroY': 'inline label - visible with data', 'gyroZ': 'inline label - visible with data', 'temperature': 'inline label - visible with data', 'magX': 'inline label - visible with data', 'magY': 'inline label - visible with data', 'magZ': 'inline label - visible with data', 'linearAccelX': 'inline label - visible with data', 'linearAccelY': 'inline label - visible with data', 'linearAccelZ': 'inline label - visible with data', 'gravityX': 'inline label - visible with data', 'gravityY': 'inline label - visible with data', 'gravityZ': 'inline label - visible with data', 'altitude_difference': 'inline label - visible with data', 'bmp_pressure': 'inline label - visible with data', });
lyr_flight_datalog_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});