
$(document).ready(function(){
$('#SOUTHERN').click(function(){
  $("#oneclick").hide();  
  $("#table1").html(
        "<thead style='font-size: 14px;'>"+
            "<tr>"+
              "<th scope='col'style='width:20%'>Name</th>"+
              "<th scope='col'style='width:30%'>Address</th>"+
              "<th scope='col'style='width:50%'>Type</th>"+
            "</tr>"+
            "<tbody style='font-size: 12px;'>"+
    "<tr>"+
      "<th scope='row'>Aberdeen Sports Centre</th>"+
      "<td>6/F Aberdeen Municipal Services Building, 203 Aberdeen Main Road, Aberdeen</td>"+
      "<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms, D6 Play Rooms</td>"+
  '</tbody>'+
          "</thead>" )
});  
});


$(document).ready(function(){
  $('#EASTERN').click(function(){
      $("#table1").html(
          "<thead style='font-size: 14px;'>"+
              "<tr>"+
                "<th scope='col'style='width:20%'>Name</th>"+
                "<th scope='col'style='width:30%'>Address</th>"+
                "<th scope='col'style='width:50%'>Type</th>"+
              "</tr>"+
              "<tbody style='font-size: 12px;'>"+
      "<tr>"+
        "<th scope='row'>6 Yee Shun Street, Chai Wan</th>"+
        "<td>6 Yee Shun Street, Chai Wan</td>"+
        "<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>"+
      "</tr>"+
      "<tr>"+
        '<th scope="row">Island East Sports Centre</th>'+
        '<td>52 Lei King Road, Sai Wan Ho</td>'+
        '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Dance Rooms, Activity Rooms, Table Tennis Tables, Golf Facilities, Fitness Rooms, Chilren\'s Play Rooms, Bowling Greens, Swimming Pools</td>'+
      '</tr>'+
      '<tr>'+
        '<th scope="row">Quarry Bay Sports Centre</th>'+
        '<td>6/F & 7/F,  Quarry Bay Municipal Services Building,  38 Quarry Bay Street,  Quarry Bay</td>'+
        '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms</td>'+
      '</tr>'+
    '</tbody>'+
            "</thead>" )
  });
  });