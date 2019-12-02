var mapboxTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>', maxZoom: 18,});

var map = L.map('map')
      .addLayer(mapboxTiles)
      .setView([22.287111, 114.191667], 10);

var items = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appDl5SHlWhxMMLrB/Imported%20table%202?api_key=keyAWB8coCDESNvtz";

var data = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items = {};
               items["Name"] = value.fields.FacilityName;
               items["Address"] = value.fields.Address;
               //items["image_url"] = value.fields.img_url;
               items["latitud"] = value.fields.Lat;
               items["longitud"] = value.fields.Lng;
               data.push(items);
               console.log(items);
        }); // end .each
}); // end getJSON

function show_districts(){

  for (var i in data) {
      var latlng = L.latLng({ lat: data[i].latitud, lng: data[i].longitud });
      L.marker( latlng )
          .bindPopup( '<a href="' + data[i].url + '" target="_blank">' + '<img src="' + data[i].image_url+'" width = "80px"><br>'+data[i].name + '</a>' )
          .addTo(map);
  }

}