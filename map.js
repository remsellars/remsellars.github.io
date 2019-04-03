var mymap = L.map('mapid').setView([53.505, -0.09], 4);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 12,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicmVtc2VsbGFycyIsImEiOiJjanUxcW5qbWswNDRpNDRtbjFxejJvdm94In0.XfKCrjsup1mWVoS5Lo6sOw'
}).addTo(mymap);

var london = L.circle([51.501, -0.122], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5000
}).addTo(mymap);

var zadar = L.circle([44.111, 15.227], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5000
}).addTo(mymap);

var nuremberg = L.circle([49.452, 11.077], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5000
}).addTo(mymap);