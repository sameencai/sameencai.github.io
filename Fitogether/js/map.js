var mapboxTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>', maxZoom: 18,});

var map = L.map('map')
      .addLayer(mapboxTiles)
      .setView([22.287111, 114.191667], 10);

//1. Southern      
var items1 = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/app6UsN0T63GcZ1DL/Table%201?api_key=keyAWB8coCDESNvtz";
var data1 = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items1 = {};
               items1["Name"] = value.fields.FacilityName;
               items1["Address"] = value.fields.Address;
               //items["image_url"] = value.fields.img_url;
               items1["latitud"] = value.fields.Lat;
               items1["longitud"] = value.fields.Lng;
               data1.push(items1);
               console.log(items1);
        }); // end .each
}); // end getJSON

function show_districts1(){

  for (var i in data1) {
      var latlng = L.latLng({ lat: data1[i].latitud, lng: data1[i].longitud });
      L.marker( latlng )
          .bindPopup( '<h1 style="font-size: 20px;">'+data1[i].Name+ '</h1>'+ '<p>'+data1[i].Address +'</p>'  )
          .addTo(map);
  }

}

//2. Eastern      
var items2 = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appaDBZtbVtTD2NVe/Table%201?api_key=keyAWB8coCDESNvtz";
var data2 = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items2 = {};
               items2["Name"] = value.fields.FacilityName;
               items2["Address"] = value.fields.Address;
               //items["image_url"] = value.fields.img_url;
               items2["latitud"] = value.fields.Lat;
               items2["longitud"] = value.fields.Lng;
               data2.push(items2);
               console.log(items2);
        }); // end .each
}); // end getJSON

function show_districts2(){

  for (var i in data2) {
      var latlng = L.latLng({ lat: data2[i].latitud, lng: data2[i].longitud });
      L.marker( latlng )
          .bindPopup( '<h1 style="font-size: 20px;">'+data2[i].Name+ '</h1>'+ '<p>'+data2[i].Address +'</p>'  )
          .addTo(map);
  }

}

//3. CENTRAL AND WESTERN      
var items3 = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appBofc9SN3m9txsj/Table%201?api_key=keyAWB8coCDESNvtz";
var data3 = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items3 = {};
               items3["Name"] = value.fields.FacilityName;
               items3["Address"] = value.fields.Address;
               //items["image_url"] = value.fields.img_url;
               items3["latitud"] = value.fields.Lat;
               items3["longitud"] = value.fields.Lng;
               data3.push(items3);
               console.log(items3);
        }); // end .each
}); // end getJSON

function show_districts3(){

  for (var i in data3) {
      var latlng = L.latLng({ lat: data3[i].latitud, lng: data3[i].longitud });
      L.marker( latlng )
          .bindPopup( '<h1 style="font-size: 20px;">'+data3[i].Name+ '</h1>'+ '<p>'+data3[i].Address +'</p>'  )
          .addTo(map);
  }

}
//4. TUEN MUN      
var items4 = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appaDBZtbVtTD2NVe/Table%201?api_key=keyAWB8coCDESNvtz";
var data4 = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items4 = {};
               items4["Name"] = value.fields.FacilityName;
               items4["Address"] = value.fields.Address;
               //items["image_url"] = value.fields.img_url;
               items4["latitud"] = value.fields.Lat;
               items4["longitud"] = value.fields.Lng;
               data4.push(items4);
               console.log(items4);
        }); // end .each
}); // end getJSON

function show_districts4(){

  for (var i in data4) {
      var latlng = L.latLng({ lat: data4[i].latitud, lng: data4[i].longitud });
      L.marker( latlng )
          .bindPopup( '<h1 style="font-size: 20px;">'+data4[i].Name+ '</h1>'+ '<p>'+data4[i].Address +'</p>'  )
          .addTo(map);
  }

}//5. KOWLOON CITY     
var items5 = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/app2PQd42ycM3bPF2/Table%201?api_key=keyAWB8coCDESNvtz";
var data5 = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items5 = {};
               items5["Name"] = value.fields.FacilityName;
               items5["Address"] = value.fields.Address;
               //items["image_url"] = value.fields.img_url;
               items5["latitud"] = value.fields.Lat;
               items5["longitud"] = value.fields.Lng;
               data5.push(items5);
               console.log(items5);
        }); // end .each
}); // end getJSON

function show_districts5(){

  for (var i in data5) {
      var latlng = L.latLng({ lat: data5[i].latitud, lng: data5[i].longitud });
      L.marker( latlng )
          .bindPopup( '<h1 style="font-size: 20px;">'+data5[i].Name+ '</h1>'+ '<p>'+data5[i].Address +'</p>'  )
          .addTo(map);
  }

}//6. KWUN TONG    
var items6 = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/app9J0mwRkOt5AzHm/Table%201?";
var data6 = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items6 = {};
               items6["Name"] = value.fields.FacilityName;
               items6["Address"] = value.fields.Address;
               //items["image_url"] = value.fields.img_url;
               items6["latitud"] = value.fields.Lat;
               items6["longitud"] = value.fields.Lng;
               data6.push(items6);
               console.log(items6);
        }); // end .each
}); // end getJSON

function show_districts6(){

  for (var i in data6) {
      var latlng = L.latLng({ lat: data6[i].latitud, lng: data6[i].longitud });
      L.marker( latlng )
          .bindPopup( '<h1 style="font-size: 20px;">'+data6[i].Name+ '</h1>'+ '<p>'+data6[i].Address +'</p>'  )
          .addTo(map);
  }

}//7. SHAM SHUI PO   
var items7 = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appakh7XKrlUnuLi2/Table%201?";
var data7 = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items7 = {};
               items7["Name"] = value.fields.FacilityName;
               items7["Address"] = value.fields.Address;
               //items["image_url"] = value.fields.img_url;
               items7["latitud"] = value.fields.Lat;
               items7["longitud"] = value.fields.Lng;
               data7.push(items7);
               console.log(items7);
        }); // end .each
}); // end getJSON

function show_districts7(){

  for (var i in data7) {
      var latlng = L.latLng({ lat: data7[i].latitud, lng: data7[i].longitud });
      L.marker( latlng )
          .bindPopup( '<h1 style="font-size: 20px;">'+data7[i].Name+ '</h1>'+ '<p>'+data7[i].Address +'</p>'  )
          .addTo(map);
  }

}//8. WONG TAI SIN      
var items8 = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appaH2IwiFUHjKUfh/Table%201?api_key=keyAWB8coCDESNvtz";
var data8 = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items8 = {};
               items8["Name"] = value.fields.FacilityName;
               items8["Address"] = value.fields.Address;
               //items["image_url"] = value.fields.img_url;
               items8["latitud"] = value.fields.Lat;
               items8["longitud"] = value.fields.Lng;
               data8.push(items8);
               console.log(items8);
        }); // end .each
}); // end getJSON

function show_districts8(){

  for (var i in data8) {
      var latlng = L.latLng({ lat: data8[i].latitud, lng: data8[i].longitud });
      L.marker( latlng )
          .bindPopup( '<h1 style="font-size: 20px;">'+data8[i].Name+ '</h1>'+ '<p>'+data8[i].Address +'</p>'  )
          .addTo(map);
  }

}//9. YAU TSIM MONG     
var items9 = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appy5Af4QM9VA0Ww1/Table%201?api_key=keyAWB8coCDESNvtz";
var data9 = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items9 = {};
               items9["Name"] = value.fields.FacilityName;
               items9["Address"] = value.fields.Address;
               //items["image_url"] = value.fields.img_url;
               items9["latitud"] = value.fields.Lat;
               items9["longitud"] = value.fields.Lng;
               data9.push(items9);
               console.log(items9);
        }); // end .each
}); // end getJSON

function show_districts9(){

  for (var i in data9) {
      var latlng = L.latLng({ lat: data9[i].latitud, lng: data9[i].longitud });
      L.marker( latlng )
          .bindPopup( '<h1 style="font-size: 20px;">'+data9[i].Name+ '</h1>'+ '<p>'+data9[i].Address +'</p>'  )
          .addTo(map);
  }

}//10. ISLANDS      
var items10 = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/apphqfEY1NJHpgea5/Table%201?api_key=keyAWB8coCDESNvtz";
var data10 = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items10 = {};
               items10["Name"] = value.fields.FacilityName;
               items10["Address"] = value.fields.Address;
               //items["image_url"] = value.fields.img_url;
               items10["latitud"] = value.fields.Lat;
               items10["longitud"] = value.fields.Lng;
               data10.push(items10);
               console.log(items10);
        }); // end .each
}); // end getJSON

function show_districts10(){

  for (var i in data10) {
      var latlng = L.latLng({ lat: data10[i].latitud, lng: data10[i].longitud });
      L.marker( latlng )
          .bindPopup( '<h1 style="font-size: 20px;">'+data10[i].Name+ '</h1>'+ '<p>'+data10[i].Address +'</p>'  )
          .addTo(map);
  }

}//11. KWAI TSING      
var items11 = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appVoKEyAyP9PBCZD/Table%201?";
var data11 = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items11 = {};
               items11["Name"] = value.fields.FacilityName;
               items11["Address"] = value.fields.Address;
               //items["image_url"] = value.fields.img_url;
               items11["latitud"] = value.fields.Lat;
               items11["longitud"] = value.fields.Lng;
               data11.push(items11);
               console.log(items11);
        }); // end .each
}); // end getJSON

function show_districts11(){

  for (var i in data11) {
      var latlng = L.latLng({ lat: data11[i].latitud, lng: data11[i].longitud });
      L.marker( latlng )
          .bindPopup( '<h1 style="font-size: 20px;">'+data11[i].Name+ '</h1>'+ '<p>'+data11[i].Address +'</p>'  )
          .addTo(map);
  }

}//12. NORTH      
var items12 = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appaDBZtbVtTD2NVe/Table%201?api_key=keyAWB8coCDESNvtz";
var data12 = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items12 = {};
               items12["Name"] = value.fields.FacilityName;
               items12["Address"] = value.fields.Address;
               //items["image_url"] = value.fields.img_url;
               items12["latitud"] = value.fields.Lat;
               items12["longitud"] = value.fields.Lng;
               data12.push(items12);
               console.log(items12);
        }); // end .each
}); // end getJSON

function show_districts12(){

  for (var i in data12) {
      var latlng = L.latLng({ lat: data12[i].latitud, lng: data12[i].longitud });
      L.marker( latlng )
          .bindPopup( '<h1 style="font-size: 20px;">'+data12[i].Name+ '</h1>'+ '<p>'+data12[i].Address +'</p>'  )
          .addTo(map);
  }

}//13. SAI KUNG      
var items13 = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appML08djAtuLmLSe/Table%201?api_key=keyAWB8coCDESNvtz";
var data13 = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items13 = {};
               items13["Name"] = value.fields.FacilityName;
               items13["Address"] = value.fields.Address;
               //items["image_url"] = value.fields.img_url;
               items13["latitud"] = value.fields.Lat;
               items13["longitud"] = value.fields.Lng;
               data13.push(items13);
               console.log(items13);
        }); // end .each
}); // end getJSON

function show_districts13(){

  for (var i in data13) {
      var latlng = L.latLng({ lat: data13[i].latitud, lng: data13[i].longitud });
      L.marker( latlng )
          .bindPopup( '<h1 style="font-size: 20px;">'+data13[i].Name+ '</h1>'+ '<p>'+data13[i].Address +'</p>'  )
          .addTo(map);
  }

}//14. SHA TIN      
var items14 = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/apptnf2VJR3Am7T8z/Table%201?api_key=keyAWB8coCDESNvtz";
var data14 = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items14 = {};
               items14["Name"] = value.fields.FacilityName;
               items14["Address"] = value.fields.Address;
               //items["image_url"] = value.fields.img_url;
               items14["latitud"] = value.fields.Lat;
               items14["longitud"] = value.fields.Lng;
               data14.push(items14);
               console.log(items14);
        }); // end .each
}); // end getJSON

function show_districts14(){

  for (var i in data14) {
      var latlng = L.latLng({ lat: data14[i].latitud, lng: data14[i].longitud });
      L.marker( latlng )
          .bindPopup( '<h1 style="font-size: 20px;">'+data14[i].Name+ '</h1>'+ '<p>'+data14[i].Address +'</p>'  )
          .addTo(map);
  }

}//15. TAI PO      
var items15 = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appm0yhS547S2jPtQ/Table%201?api_key=keyAWB8coCDESNvtz";
var data15 = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items15 = {};
               items15["Name"] = value.fields.FacilityName;
               items15["Address"] = value.fields.Address;
               //items["image_url"] = value.fields.img_url;
               items15["latitud"] = value.fields.Lat;
               items15["longitud"] = value.fields.Lng;
               data15.push(items15);
               console.log(items15);
        }); // end .each
}); // end getJSON

function show_districts15(){

  for (var i in data15) {
      var latlng = L.latLng({ lat: data15[i].latitud, lng: data15[i].longitud });
      L.marker( latlng )
          .bindPopup( '<h1 style="font-size: 20px;">'+data15[i].Name+ '</h1>'+ '<p>'+data15[i].Address +'</p>'  )
          .addTo(map);
  }

}//16. TSUEN WAN      
var items16 = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/apprDhPiYKbZyH8OI/Table%201?api_key=keyAWB8coCDESNvtz";
var data16 = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items16 = {};
               items16["Name"] = value.fields.FacilityName;
               items16["Address"] = value.fields.Address;
               //items["image_url"] = value.fields.img_url;
               items16["latitud"] = value.fields.Lat;
               items16["longitud"] = value.fields.Lng;
               data16.push(items16);
               console.log(items16);
        }); // end .each
}); // end getJSON

function show_districts16(){

  for (var i in data16) {
      var latlng = L.latLng({ lat: data16[i].latitud, lng: data16[i].longitud });
      L.marker( latlng )
          .bindPopup( '<h1 style="font-size: 20px;">'+data16[i].Name+ '</h1>'+ '<p>'+data16[i].Address +'</p>'  )
          .addTo(map);
  }

}//17. TUEN MUN      
var items17 = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/appg0vu7ULDdlyUsA/Table%201?api_key=keyAWB8coCDESNvtz";
var data17 = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items17 = {};
               items17["Name"] = value.fields.FacilityName;
               items17["Address"] = value.fields.Address;
               //items["image_url"] = value.fields.img_url;
               items17["latitud"] = value.fields.Lat;
               items17["longitud"] = value.fields.Lng;
               data17.push(items17);
               console.log(items17);
        }); // end .each
}); // end getJSON

function show_districts17(){

  for (var i in data17) {
      var latlng = L.latLng({ lat: data17[i].latitud, lng: data17[i].longitud });
      L.marker( latlng )
          .bindPopup( '<h1 style="font-size: 20px;">'+data17[i].Name+ '</h1>'+ '<p>'+data17[i].Address +'</p>'  )
          .addTo(map);
  }

}//18. YUEN LONG     
var items18 = [];
var airtable_read_endpoint = "https://api.airtable.com/v0/app820YQ1tMCLKzR0/Table%201?api_key=keyAWB8coCDESNvtz";
var data18 = [];
$.getJSON(airtable_read_endpoint, function(result) {
       $.each(result.records, function(key,value) {
           items18 = {};
               items18["Name"] = value.fields.FacilityName;
               items18["Address"] = value.fields.Address;
               //items["image_url"] = value.fields.img_url;
               items18["latitud"] = value.fields.Lat;
               items18["longitud"] = value.fields.Lng;
               data18.push(items18);
               console.log(items18);
        }); // end .each
}); // end getJSON

function show_districts18(){

  for (var i in data18) {
      var latlng = L.latLng({ lat: data18[i].latitud, lng: data18[i].longitud });
      L.marker( latlng )
          .bindPopup( '<h1 style="font-size: 20px;">'+data18[i].Name+ '</h1>'+ '<p>'+data18[i].Address +'</p>'  )
          .addTo(map);
  }

}