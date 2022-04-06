"use strict";

import Sample from "../../lib/Sample.js";
import Layer from "../../lib/Layer.js";
import WayRowsSampleData from "../../lib/SampleData/WayRowsSampleData.js";
import CopyPropertiesTransformation from "../../lib/Transformation/CopyPropertiesTransformation.js";
import RemovePropertiesTransformation from "../../lib/Transformation/RemovePropertiesTransformation.js";

var sample = new Sample(
  'railway-attributes',
  'Railway Attributes',
  'A grid of railways showing possible attribute combinations. (<a href="https://github.com/adamfranco/OpenMapSamples/blob/main/samples/OpenMapTiles/RailwayAttributes.js">source</a>)',
  [0, 0],
  15
);

var sampleData = new WayRowsSampleData(
  [
    { 'name': 'rail', 'class': 'rail' },
    { 'name': 'rail siding', 'class': 'rail', 'service': 'siding'},
    { 'name': 'narrow gauge', 'class': 'narrow_gauge' },
    { 'name': 'narrow gauge siding', 'class': 'narrow_gauge', 'service': 'siding'},
    { 'name': 'preserved', 'class': 'preserved' },
    { 'name': 'preserved siding', 'class': 'preserved', 'service': 'siding'},
    { 'name': 'funicular', 'class': 'funicular' },
    { 'name': 'funicular siding', 'class': 'funicular', 'service': 'siding'},
    { 'name': 'subway', 'class': 'subway' },
    { 'name': 'subway siding', 'class': 'subway', 'service': 'siding'},
    { 'name': 'light rail', 'class': 'light_rail' },
    { 'name': 'light rail siding', 'class': 'light_rail', 'service': 'siding'},
    { 'name': 'monorail', 'class': 'monorail' },
    { 'name': 'monorail siding', 'class': 'monorail', 'service': 'siding'},
    { 'name': 'tram', 'class': 'tram' },
    { 'name': 'tram siding', 'class': 'tram', 'service': 'siding'},
  ],
  [
    {},
    { 'name': 'bridge', 'brunnel': 'bridge', 'layer': 1 },
    { 'name': 'tunnel', 'brunnel': 'tunnel', 'layer': -1 },
  ],
  [0, 0]
);
sample.addLayer(new Layer('transportation')).addSampleData(
  new RemovePropertiesTransformation(sampleData, ['name'])
);
sample.addLayer(new Layer('transportation_name')).addSampleData(
  new CopyPropertiesTransformation(
    new RemovePropertiesTransformation(
      sampleData,
      ['brunnel', 'layer']
    ),
    { 'name': ['name_en', 'name_de', 'name_int', 'name:latin'] }
  )
);

for (var i = 4; i <= 20; i = i + 1) {
  sample.setZoomVariant(i);
}

export { sample as default, sampleData as sampleData};
