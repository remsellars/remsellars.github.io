var myGeoJSONPath = '/custom.geo.json';
var myCustomStyle = {
    stroke: false,
    fill: true,
    fillColor: '#ff7700',
    fillOpacity: 0.15
}

var mymap = L.map('mapid').setView([53.505, -0.09], 4);

$.getJSON(myGeoJSONPath, function (data) {
    L.geoJson(data, {
        clickable: false,
        style: myCustomStyle
    }).addTo(mymap);
})

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 12,
    id: 'mapbox.light',
    accessToken: 'pk.eyJ1IjoicmVtc2VsbGFycyIsImEiOiJjanUxcW5qbWswNDRpNDRtbjFxejJvdm94In0.XfKCrjsup1mWVoS5Lo6sOw'
}).addTo(mymap);

const cityStyle = {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5000
};

// UK
const london = L.circle([51.501, -0.122], cityStyle).addTo(mymap);
const edinbrugh = L.circle([55.9533, -3.1883], cityStyle).addTo(mymap);

//Spanish
const barcelona = L.circle([41.3851, 2.1734], cityStyle).addTo(mymap);
const laPalma = L.circle([28.7573, -17.8850], cityStyle).addTo(mymap);

//France / Swiss
const annecy = L.circle([45.8992, 6.1294], cityStyle).addTo(mymap);
const grenoble = L.circle([45.1885, 5.7245], cityStyle).addTo(mymap);
const geneva = L.circle([46.2044, 6.1432], cityStyle).addTo(mymap);

//Croatia
const zadar = L.circle([44.111, 15.227], cityStyle).addTo(mymap);
const zagreb = L.circle([45.8150, 15.9819], cityStyle).addTo(mymap);

//Scandi
const copenhagen = L.circle([55.6761, 12.5683], cityStyle).addTo(mymap);
const oslo = L.circle([59.9139, 10.7522], cityStyle).addTo(mymap);
const helsinki = L.circle([60.1699, 24.9384], cityStyle).addTo(mymap);
const lapland = L.circle([69.0349, 27.0044], cityStyle).addTo(mymap);

//Germany
const nuremberg = L.circle([49.452, 11.077], cityStyle).addTo(mymap);

//Egypt
const sharmElSheikh = L.circle([27.9158, 34.3300], cityStyle).addTo(mymap);


