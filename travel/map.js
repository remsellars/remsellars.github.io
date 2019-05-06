const areaPath = './custom.geo.json';

const areaStyle = {
    stroke: false,
    fill: true,
    fillColor: 'purple',
    fillOpacity: 0.1
};

const cityStyle = {
    color: 'purple',
    fillColor: '#purple',
    fillOpacity: 0.5,
    radius: 5000
};

let map = L.map('mapid').setView([53.505, -0.09], 4);
let geoJson;

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 12,
    id: 'mapbox.light',
    accessToken: 'pk.eyJ1IjoicmVtc2VsbGFycyIsImEiOiJjanUxcW5qbWswNDRpNDRtbjFxejJvdm94In0.XfKCrjsup1mWVoS5Lo6sOw'
}).addTo(map);

fetch(areaPath)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        geoJson = L.geoJson(data, {
            style: areaStyle,
            onEachFeature: onEachFeature
        }).addTo(map);
    });

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        fillOpacity: 0.5
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    geoJson.resetStyle(e.target);
}

// UK
const london = L.circle([51.501, -0.122], cityStyle).addTo(map);
const edinbrugh = L.circle([55.9533, -3.1883], cityStyle).addTo(map);
const sheffield = L.circle([53.3811, -1.4701], cityStyle).addTo(map);
const jersey = L.circle([49.1805, -2.1032], cityStyle).addTo(map);

//Spanish
const barcelona = L.circle([41.3851, 2.1734], cityStyle).addTo(map);
const laPalma = L.circle([28.7573, -17.8850], cityStyle).addTo(map);

//France / Swiss
const annecy = L.circle([45.8992, 6.1294], cityStyle).addTo(map);
const grenoble = L.circle([45.1885, 5.7245], cityStyle).addTo(map);
const geneva = L.circle([46.2044, 6.1432], cityStyle).addTo(map);

//Croatia
const zadar = L.circle([44.111, 15.227], cityStyle).addTo(map);
const zagreb = L.circle([45.8150, 15.9819], cityStyle).addTo(map);

//Scandi
const copenhagen = L.circle([55.6761, 12.5683], cityStyle).addTo(map);
const oslo = L.circle([59.9139, 10.7522], cityStyle).addTo(map);
const helsinki = L.circle([60.1699, 24.9384], cityStyle).addTo(map);
const lapland = L.circle([69.0349, 27.0044], cityStyle).addTo(map);

//Germany
const nuremberg = L.circle([49.452, 11.077], cityStyle).addTo(map);

//Egypt
const sharmElSheikh = L.circle([27.9158, 34.3300], cityStyle).addTo(map);