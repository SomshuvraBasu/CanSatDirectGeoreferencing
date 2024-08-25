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
var lyr_NexSat_BB_1893_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "NexSat_BB_1893",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NexSat_BB_1893_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8069776.632087, 2645275.798193, 8070830.400336, 2646546.225388]
                            })
                        });
var lyr_NexSat_BB_1958_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "NexSat_BB_1958",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NexSat_BB_1958_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8070062.161561, 2644633.640692, 8070292.812797, 2644892.106922]
                            })
                        });
var lyr_NexSat_BB_1959_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "NexSat_BB_1959",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NexSat_BB_1959_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8070025.590301, 2644622.288342, 8070281.207933, 2644841.609822]
                            })
                        });
var lyr_NexSat_BB_1960_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "NexSat_BB_1960",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NexSat_BB_1960_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8070031.023344, 2644629.807167, 8070231.604513, 2644798.144479]
                            })
                        });
var lyr_NexSat_BB_1961_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "NexSat_BB_1961",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NexSat_BB_1961_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8070039.675889, 2644602.763857, 8070218.643277, 2644802.066095]
                            })
                        });
var lyr_NexSat_BB_1894_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "NexSat_BB_1894",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NexSat_BB_1894_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8070141.094817, 2644956.790809, 8071422.073700, 2646114.690001]
                            })
                        });
var lyr_NexSat_BB_1962_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "NexSat_BB_1962",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/NexSat_BB_1962_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8070061.919936, 2644610.696633, 8070252.194892, 2644821.095626]
                            })
                        });
var format_flight_datalog_8 = new ol.format.GeoJSON();
var features_flight_datalog_8 = format_flight_datalog_8.readFeatures(json_flight_datalog_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_flight_datalog_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_flight_datalog_8.addFeatures(features_flight_datalog_8);
var lyr_flight_datalog_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_flight_datalog_8, 
                style: style_flight_datalog_8,
                popuplayertitle: "flight_datalog",
                interactive: true,
                title: '<img src="styles/legend/flight_datalog_8.png" /> flight_datalog'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_NexSat_BB_1893_1.setVisible(true);lyr_NexSat_BB_1958_2.setVisible(true);lyr_NexSat_BB_1959_3.setVisible(true);lyr_NexSat_BB_1960_4.setVisible(true);lyr_NexSat_BB_1961_5.setVisible(true);lyr_NexSat_BB_1894_6.setVisible(true);lyr_NexSat_BB_1962_7.setVisible(true);lyr_flight_datalog_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_NexSat_BB_1893_1,lyr_NexSat_BB_1958_2,lyr_NexSat_BB_1959_3,lyr_NexSat_BB_1960_4,lyr_NexSat_BB_1961_5,lyr_NexSat_BB_1894_6,lyr_NexSat_BB_1962_7,lyr_flight_datalog_8];
lyr_flight_datalog_8.set('fieldAliases', {'index': 'index', 'time': 'time', 'speed': 'speed', 'latitude': 'latitude', 'longitude': 'longitude', 'altitude': 'altitude', 'eulerX': 'eulerX', 'eulerY': 'eulerY', 'eulerZ': 'eulerZ', 'accelX': 'accelX', 'accelY': 'accelY', 'accelZ': 'accelZ', 'gyroX': 'gyroX', 'gyroY': 'gyroY', 'gyroZ': 'gyroZ', 'temperature': 'temperature', 'magX': 'magX', 'magY': 'magY', 'magZ': 'magZ', 'linearAccelX': 'linearAccelX', 'linearAccelY': 'linearAccelY', 'linearAccelZ': 'linearAccelZ', 'gravityX': 'gravityX', 'gravityY': 'gravityY', 'gravityZ': 'gravityZ', 'altitude_difference': 'altitude_difference', 'bmp_pressure': 'bmp_pressure', });
lyr_flight_datalog_8.set('fieldImages', {'index': 'Range', 'time': 'Range', 'speed': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'altitude': 'TextEdit', 'eulerX': 'TextEdit', 'eulerY': 'TextEdit', 'eulerZ': 'TextEdit', 'accelX': 'TextEdit', 'accelY': 'TextEdit', 'accelZ': 'TextEdit', 'gyroX': 'TextEdit', 'gyroY': 'TextEdit', 'gyroZ': 'TextEdit', 'temperature': 'TextEdit', 'magX': 'TextEdit', 'magY': 'TextEdit', 'magZ': 'TextEdit', 'linearAccelX': 'TextEdit', 'linearAccelY': 'TextEdit', 'linearAccelZ': 'TextEdit', 'gravityX': 'TextEdit', 'gravityY': 'TextEdit', 'gravityZ': 'TextEdit', 'altitude_difference': 'TextEdit', 'bmp_pressure': 'TextEdit', });
lyr_flight_datalog_8.set('fieldLabels', {'index': 'inline label - visible with data', 'time': 'inline label - visible with data', 'speed': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'altitude': 'inline label - visible with data', 'eulerX': 'inline label - visible with data', 'eulerY': 'inline label - visible with data', 'eulerZ': 'inline label - visible with data', 'accelX': 'inline label - visible with data', 'accelY': 'inline label - visible with data', 'accelZ': 'inline label - visible with data', 'gyroX': 'inline label - visible with data', 'gyroY': 'inline label - visible with data', 'gyroZ': 'inline label - visible with data', 'temperature': 'inline label - visible with data', 'magX': 'inline label - visible with data', 'magY': 'inline label - visible with data', 'magZ': 'inline label - visible with data', 'linearAccelX': 'inline label - visible with data', 'linearAccelY': 'inline label - visible with data', 'linearAccelZ': 'inline label - visible with data', 'gravityX': 'inline label - visible with data', 'gravityY': 'inline label - visible with data', 'gravityZ': 'inline label - visible with data', 'altitude_difference': 'inline label - visible with data', 'bmp_pressure': 'inline label - visible with data', });
lyr_flight_datalog_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});