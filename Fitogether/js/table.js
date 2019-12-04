
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
        "<th scope='row'>Chai Wan Sports Centre</th>"+
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

  $(document).ready(function(){
    $('#KWAITSING').click(function(){
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
          "<th scope='row'>Cheung Fat Sports Centre</th>"+
          "<td>4/F,  Cheung Fat Shopping Centre,  Cheung Fat Estate,  Tsing Yi</td>"+
          "<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>"+
        "</tr>"+
        "<tr>"+
          '<th scope="row">Fung Shue Wo Sports Centre</th>'+
          '<td>10 Fung Shue Wo Road,  Tsing Yi Estate,  Phase II,  Tsing Yi</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Activity Rooms, Fitness Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Lai King Sports Centre</th>'+
          '<td>60 Lai Cho Road,  Lai King,  Kwai Chung</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">North Kwai Chung Tang Shiu Kin Sports Centre</th>'+
          '<td>292 Wo Yi Hop Road,  Kwai Chung</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Tennis Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Osman Ramju Sadick Memorial Sports Centre</th>'+
          '<td>176 Hing Fong Road,  Kwai Chung</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Tai Wo Hau Sports Centre</th>'+
          '<td>39 Tai Ha Street,  Tai Wo Hau,  Kwai Chung</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Tsing Yi Sports Centre</th>'+
          '<td>2/F,  Tsing Yi Municipal Services Building,  38 Tsing Luk Street,  Tsing Yi</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms</td>'+
        '</tr>'+
      '</tbody>'+
              "</thead>" )
    });
    });

    $(document).ready(function(){
      $('#ISLANDS').click(function(){
         
        $("#table1").html(
              "<thead style='font-size: 14px;'>"+
                  "<tr>"+
                    "<th scope='col'style='width:20%'>Name</th>"+
                    "<th scope='col'style='width:30%'>Address</th>"+
                    "<th scope='col'style='width:50%'>Type</th>"+
                  "</tr>"+
                  "<tbody style='font-size: 12px;'>"+
          "<tr>"+
            "<th scope='row'>Cheung Chau Sports Centre</th>"+
            "<td>Nam She Tong,  Cheung Chau</td>"+
            "<td>Basketball Courts, Volleyball Courts, Badminton Courts, Gateball Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Chilren's Play Rooms</td>"+
          "</tr>"+
          "<tr>"+
            '<th scope="row">Mui Wo Sports Centre</th>'+
            '<td>1/F,  Mui Wo Municipal Services Building,  9 Ngan Shek Street,  Lantau Island</td>'+
            '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Gateball Courts, Activity Rooms, Fitness Rooms, Squash Courts</td>'+
          '</tr>'+
          '<tr>'+
            '<th scope="row">Peng Chau Sports Centre</th>'+
            '<td>Peng Chau Municipal Services Building,  6 Po Peng Street,  Peng Chau</td>'+
            '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Activity Rooms, Fitness Rooms</td>'+
          '</tr>'+
          '<tr>'+
            '<th scope="row">Tung Chung Man Tung Road Sports Centre</th>'+
            '<td>G/F.,  Tung Chung Municipal Services Building,  39 Man Tung Road,  Tung Chung</td>'+
            '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Chilren\'s Play Roomss</td>'+
          '</tr>'+
        '</tbody>'+
                "</thead>" )
      });
      });

      $(document).ready(function(){
        $('#WONGTAISIN').click(function(){
           
          $("#table1").html(
                "<thead style='font-size: 14px;'>"+
                    "<tr>"+
                      "<th scope='col'style='width:20%'>Name</th>"+
                      "<th scope='col'style='width:30%'>Address</th>"+
                      "<th scope='col'style='width:50%'>Type</th>"+
                    "</tr>"+
                    "<tbody style='font-size: 12px;'>"+
            "<tr>"+
              "<th scope='row'>Choi Hung Road Sports Centre</th>"+
              "<td>Sheung Hei Street,  Wong Tai Sin</td>"+
              "<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>"+
            "</tr>"+
            "<tr>"+
              '<th scope="row">Chuk Yuen Sports Centre</th>'+
              '<td>Chuk Yuen North Estate,  Chuk Yuen Road,  Wong Tai Sin</td>'+
              '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>'+
            '</tr>'+
            '<tr>'+
              '<th scope="row">Po Kong Village Road Sports Centre</th>'+
              '<td>120 Po Kong Village Road,  Wong Tai Sin</td>'+
              '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Chilren\'s Play Rooms</td>'+
            '</tr>'+
          '</tbody>'+
                  "</thead>" )
        });
        });

        $(document).ready(function(){
          $('#YAUTSIMMONG').click(function(){
             
            $("#table1").html(
                  "<thead style='font-size: 14px;'>"+
                      "<tr>"+
                        "<th scope='col'style='width:20%'>Name</th>"+
                        "<th scope='col'style='width:30%'>Address</th>"+
                        "<th scope='col'style='width:50%'>Type</th>"+
                      "</tr>"+
                      "<tbody style='font-size: 12px;'>"+
              "<tr>"+
                "<th scope='row'>Fa Yuen Street Sports Centre</th>"+
                "<td>13/F Fa Yuen Street Municipal Services Building,  123A Fa Yuen Street,  Mong Kok</td>"+
                "<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms</td>"+
              "</tr>"+
              "<tr>"+
                '<th scope="row">Kowloon Park Sports Centre</th>'+
                '<td>22 Austin Road,  Tsim Sha Tsui</td>'+
                '<td>Volleyball Courts, Netball Courts, Badminton Courts, Handball Courts, Squash Courts, Activity Rooms, Fitness Rooms, Dance Rooms, Table Tennis Tables</td>'+
              '</tr>'+
              '<tr>'+
                '<th scope="row">Kwun Chung Sports Centre</th>'+
                '<td>5/F - 7/F,  17 Bowring Street,  Jordon</td>'+
                '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms</td>'+
              '</tr>'+
              '<tr>'+
                '<th scope="row">Tai Kok Tsui Sports Centre</th>'+
                '<td>5-7/F.,  Tai Kok Tsui Municipal Services Building,  63 Fuk Tsun Street,  Tai Kok Tsui</td>'+
                '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Sports Climbing Facilities, Fitness Rooms, Chilren\'s Play Rooms, Table Tennis Tables, Activity Rooms</td>'+
              '</tr>'+
            '</tbody>'+
                    "</thead>" )
          });
          });

          $(document).ready(function(){
            $('#KOWLOONCITY').click(function(){
               
              $("#table1").html(
                    "<thead style='font-size: 14px;'>"+
                        "<tr>"+
                          "<th scope='col'style='width:20%'>Name</th>"+
                          "<th scope='col'style='width:30%'>Address</th>"+
                          "<th scope='col'style='width:50%'>Type</th>"+
                        "</tr>"+
                        "<tbody style='font-size: 12px;'>"+
                "<tr>"+
                  "<th scope='row'>Fat Kwong Street Sports Centre</th>"+
                  "<td>18 Good Shepherd Street,  Ho Man Tin</td>"+
                  "<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>"+
                "</tr>"+
                "<tr>"+
                  '<th scope="row">Ho Man Tin Sports Centre</th>'+
                  '<td>1 Chung Yee street,  Ho Man Tin</td>'+
                  '<td>Table Tennis Tables, American Pool Tables, Activity Rooms, Tennis Courts, Fitness Rooms, Chilren\'s Play Rooms</td>'+
                '</tr>'+
                '<tr>'+
                  '<th scope="row">To Kwa Wan Sports Centre</th>'+
                  '<td>66 Ha Heung Road,  To Kwa Wan</td>'+
                  '<td>Basketball Courts, Volleyball Courts, Netball Courts, Badminton Courts, Activity Rooms, Squash Courts, Table Tennis Tables, Fitness Rooms</td>'+
                '</tr>'+
                '<tr>'+
                  '<th scope="row">Fu Heng Sports Centre</th>'+
                  '<td>1/F,  Fu Heng Shopping Centre,  Fu Heng Estate,  Tai Po</td>'+
                  '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>'+
                '</tr>'+
              '</tbody>'+
                      "</thead>" )
            });
            });

$(document).ready(function(){
$('#TAIPO').click(function(){
 
$("#table1").html(
    "<thead style='font-size: 14px;'>"+
        "<tr>"+
          "<th scope='col'style='width:20%'>Name</th>"+
          "<th scope='col'style='width:30%'>Address</th>"+
          "<th scope='col'style='width:50%'>Type</th>"+
        "</tr>"+
        "<tbody style='font-size: 12px;'>"+
        '<tr>'+
        '<th scope="row">Fu Heng Sports Centre</th>'+
        '<td>1/F,  Fu Heng Shopping Centre,  Fu Heng Estate,  Tai Po</td>'+
        '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>'+
      '</tr>'+
      "<tr>"+
        '<th scope="row">Fu Shin Sports Centre</th>'+
        '<td>Multi Car-Park Building,  Fu Shin Estate,  Tai Po</td>'+
        '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms</td>'+
      '</tr>'+
      '<tr>'+
        '<th scope="row">Tai Po Hui Sports Centre</th>'+
        '<td>6/F Multi Car-Park Building,  Fu Shin Estate,  8 Heung Sze Wui Street,  Tai Po</td>'+
        '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms, Chilren\'s Play Rooms</td>'+
      '</tr>'+
      '<tr>'+
        '<th scope="row">Tai Po Sports Centre</th>'+
        '<td>13 Ting Tai Road,  Tai Po</td>'+
        '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms</td>'+
      '</tr>'+
      '<tr>'+
        '<th scope="row">Tai Wo Sports Centre</th>'+
        '<td>Podium Level,  Tai Wo Shopping Centre,  Tai Wo Estate,  Tai Po</td>'+
        '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>'+
      '</tr>'+
'</tbody>'+
"</thead>" )
      });
      });


$(document).ready(function(){
  $('#YUENLONG').click(function(){
   
  $("#table1").html(
      "<thead style='font-size: 14px;'>"+
          "<tr>"+
            "<th scope='col'style='width:20%'>Name</th>"+
            "<th scope='col'style='width:30%'>Address</th>"+
            "<th scope='col'style='width:50%'>Type</th>"+
          "</tr>"+
          "<tbody style='font-size: 12px;'>"+
          '<tr>'+
          '<th scope="row">Fung Kam Street Sports Centre</th>'+
          '<td>20 Fung Yau Street North,  Yuen Long</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>'+
        '</tr>'+
        "<tr>"+
          '<th scope="row">Long Ping Sports Centre</th>'+
          '<td>Unit 202,  2/F,  Long Ping Commercial Centre,  Long Ping Estate,  Yuen Long</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Tin Fai Road Sports Centre</th>'+
          '<td>No. 63,  Tin Shui Road,  Tin Shui Wai,  Yuen Long,  N.T.</td>'+
          '<td>Badminton Courts, Activity Rooms, Basketball Courts, Volleyball Courts, Fitness Rooms, Table Tennis Tables, Chilren\'s Play Rooms, Sports Climbing Facilities, Indoor Jogging Tracks, Spectator Stands</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Tin Shui Sports Centre</th>'+
          '<td>7 Tin Shui Road,  Tin Shui Wai,  Yuen Long</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Handball Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Chilren\'s Play Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Tin Shui Wai Sports Centre</th>'+
          '<td>1 Tin Pak Road,  Tin Shui Wai,  Yuen Long</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Activity Rooms, Fitness Rooms, Dance Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Yuen Long Sports Centre</th>'+
          '<td>3/F,  Yuen Long Leisure and Cultural Building,  52 Ma Tin Road,  Yuen Long</td>'+
          '<td>Badminton Courts, Activity Rooms, Basketball Courts, Volleyball Courts, Fitness Rooms, Table Tennis Tables, Chilren\'s Play Rooms</td>'+
        '</tr>'+
  '</tbody>'+
  "</thead>" )
        });
        });

$(document).ready(function(){
  $('#SAIKUNG').click(function(){
   
  $("#table1").html(
      "<thead style='font-size: 14px;'>"+
          "<tr>"+
            "<th scope='col'style='width:20%'>Name</th>"+
            "<th scope='col'style='width:30%'>Address</th>"+
            "<th scope='col'style='width:50%'>Type</th>"+
          "</tr>"+
          "<tbody style='font-size: 12px;'>"+
          '<tr>'+
          '<th scope="row">Hang Hau Sports Centre</th>'+
          '<td>1-3/F,  Sai Kung Tseung Kwan O Government Complex,  38 Pui Shing Road,  Tseung Kwan O.</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Chilren\'s Play Rooms, Indoor Jogging Tracks</td>'+
        '</tr>'+
        "<tr>"+
          '<th scope="row">Po Lam Sports Centre</th>'+
          '<td>Po Lam Estate,  Tseung Kwan O,  Sai Kung</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Tseung Kwan O Sports Centre</th>'+
          '<td>9 Wan Lung Road,  Tseung Kwan O,  Sai Kung</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Tsui Lam Sports Centre</th>'+
          '<td>Tsui Lam Estate,  Sai Kung</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>'+
        '</tr>'+
  '</tbody>'+
  "</thead>" )
        });
        });

$(document).ready(function(){
  $('#SHATIN').click(function(){
   
  $("#table1").html(
      "<thead style='font-size: 14px;'>"+
          "<tr>"+
            "<th scope='col'style='width:20%'>Name</th>"+
            "<th scope='col'style='width:30%'>Address</th>"+
            "<th scope='col'style='width:50%'>Type</th>"+
          "</tr>"+
          "<tbody style='font-size: 12px;'>"+
          '<tr>'+
          '<th scope="row">Heng On Sports Centre</th>'+
          '<td>4/F.,  Heng On Commercial Centre,  Heng On Estate,  Ma On Shan,  Sha Tin</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>'+
        '</tr>'+
        "<tr>"+
          '<th scope="row">Ma On Shan Sports Centre</th>'+
          '<td>14 On Chun Street,  Ma On Shan,  Shatin</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Handball Courts, Table Tennis Tables, Fitness Rooms, Dance Rooms, Activity Rooms, Chilren\'s Play Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Mei Lam Sports Centre</th>'+
          '<td>Mei Lam Estate Phase III,  Tai Wai,  Sha Tin</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Yuen Wo Road Sports Centre</th>'+
          '<td>4 Yuen Wo Road,  Sha Tin</td>'+
          '<td>Basketball Courts, Volleyball Courts, Netball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>'+
        '</tr>'+
  '</tbody>'+
  "</thead>" )
        });
        });



$(document).ready(function(){
  $('#CENTRALANDWESTERN').click(function(){
   
  $("#table1").html(
      "<thead style='font-size: 14px;'>"+
          "<tr>"+
            "<th scope='col'style='width:20%'>Name</th>"+
            "<th scope='col'style='width:30%'>Address</th>"+
            "<th scope='col'style='width:50%'>Type</th>"+
          "</tr>"+
          "<tbody style='font-size: 12px;'>"+
          '<tr>'+
          '<th scope="row">Hong Kong Park Sports Centre</th>'+
          '<td>29 Cotton Tree Drive,  Central</td>'+
          '<td>Badminton Courts, Basketball Courts, Dance Rooms, Fitness Rooms, Indoor Jogging Tracks, Netball Courts, Table Tennis Tables, Volleyball Courts</td>'+
        '</tr>'+
        "<tr>"+
          '<th scope="row">Shek Tong Tsui Sports Centre</th>'+
          '<td>5/F Shek Tong Tsui Municipal Services Building,  470 Queen\'s Road West</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms, Chilren\'s Play Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Sheung Wan Sports Centre</th>'+
          '<td>11/F Sheung Wan Municipal Services Building,  345 Queen\'s Road Central</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Smithfield Sports Centre</th>'+
          '<td>4/F,  Smithfield Municipal Services Building,  12K Smithfield Road,  Kennedy Town,  Western</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Fitness Rooms, Dance Rooms, Activity Rooms, Table Tennis Tables, Squash Courts, American Pool Tables, Chilren\'s Play Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Sun Yat Sen Memorial Park Sports Centre</th>'+
          '<td>18 Eastern Street North,  Sai Ying Pun</td>'+
          '<td>Basketball Courts, Volleyball Courts, Netball Courts, Badminton Courts, Handball Courts, Fitness Rooms, Dance Rooms, Squash Courts, Activity Rooms, Table Tennis Tables, Chilren\'s Play Rooms</td>'+
        '</tr>'+
  '</tbody>'+
  "</thead>" )
        });
        });

$(document).ready(function(){
  $('#KWUNTONG').click(function(){
   
  $("#table1").html(
      "<thead style='font-size: 14px;'>"+
          "<tr>"+
            "<th scope='col'style='width:20%'>Name</th>"+
            "<th scope='col'style='width:30%'>Address</th>"+
            "<th scope='col'style='width:50%'>Type</th>"+
          "</tr>"+
          "<tbody style='font-size: 12px;'>"+
          '<tr>'+
          '<th scope="row">Lam Tin South Sports Centre</th>'+
          '<td>170 Pik Wan Road,  Lam Tin,  Kwun Tong</td>'+
          '<td>Basketball Courts, Volleyball Courts, Netball Courts, Badminton Courts, Activity Rooms, Fitness Rooms, Squash Courts, Table Tennis Tables, Chilren\'s Play Rooms</td>'+
        '</tr>'+
        "<tr>"+
          '<th scope="row">Lei Yue Mun Sports Centre</th>'+
          '<td>2/F to 5/F of Lei Yue Mun Municipal Services Building,  Yau Tong,  Kowloon</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Activity Rooms, Fitness Rooms, Sports Climbing Facilities, Sanshou Training Hall, Table Tennis Tables, American Pool Tables, Squash Courts, Chilren\'s Play Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Ngau Tau Kok Road Sports Centre</th>'+
          '<td>3/F-4/F Ngau Tau Kok Municipal Services Building,  183 Ngau Tau Kok Road,  Ngau Tau Kok</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Shun Lee Tsuen Sports Centre</th>'+
          '<td>Shun Lee Tsuen Road,  Kwun Tong</td>'+
          '<td>Basketball Courts, Netball Courts, Badminton Courts, Gymnastics Traning Hall, Fitness Rooms, Dance Rooms, Table Tennis Tables, Squash Courts, Activity Rooms, Golf Facilities, Sports Climbing Facilities, Chilren\'s Play Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Sun Yat Sen Memorial Park Sports Centre</th>'+
          '<td>18 Eastern Street North,  Sai Ying Pun</td>'+
          '<td>Basketball Courts, Volleyball Courts, Netball Courts, Badminton Courts, Handball Courts, Fitness Rooms, Dance Rooms, Squash Courts, Activity Rooms, Table Tennis Tables, Chilren\'s Play Rooms</td>'+
        '</tr>'+
  '</tbody>'+
  "</thead>" )
        });
        });


$(document).ready(function(){
  $('#TUENMUN').click(function(){
   
  $("#table1").html(
      "<thead style='font-size: 14px;'>"+
          "<tr>"+
            "<th scope='col'style='width:20%'>Name</th>"+
            "<th scope='col'style='width:30%'>Address</th>"+
            "<th scope='col'style='width:50%'>Type</th>"+
          "</tr>"+
          "<tbody style='font-size: 12px;'>"+
          '<tr>'+
          '<th scope="row">Leung Tin Sports Centre</th>'+
          '<td>4/F,  Carpark Building,  Tin King Estate,  Tuen Mun</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>'+
        '</tr>'+
        "<tr>"+
          '<th scope="row">Siu Lun Sports Centre</th>'+
          '<td>2-5/F Tuen Mun Siu Lun Government Complex,  19 Siu Lun Street,  Tuen Mun,  N.T.</td>'+
          '<td>Activity Rooms, Badminton Courts, Basketball Courts, Chilren\'s Play Rooms, Fitness Rooms, Handball Courts, Sports Climbing Facilities, Table Tennis Tables, Volleyball Courts</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Tai Hing Sports Centre</th>'+
          '<td>38 Tsing Chung Koon Road,  Tuen Mun</td>'+
          '<td>Basketball Courts, Volleyball Courts, Netball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Dance Rooms, Fitness Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">The Jockey Club Tuen Mun Butterfly Beach Sports Centre</th>'+
          '<td>Wu Shan Road,  Tuen Mun</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Yau Oi Sports Centre</th>'+
          '<td>3 Hing On Lane,  Tuen Mun</td>'+
          '<td>Basketball Courts, Volleyball Courts, Netball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>'+
        '</tr>'+
  '</tbody>'+
  "</thead>" )
        });
        });

$(document).ready(function(){
  $('#WANCHAI').click(function(){
   
  $("#table1").html(
      "<thead style='font-size: 14px;'>"+
          "<tr>"+
            "<th scope='col'style='width:20%'>Name</th>"+
            "<th scope='col'style='width:30%'>Address</th>"+
            "<th scope='col'style='width:50%'>Type</th>"+
          "</tr>"+
          "<tbody style='font-size: 12px;'>"+
          '<tr>'+
          '<th scope="row">Lockhart Road Sports Centre</th>'+
          '<td>10/F Lockhart Road Municipal Services Building,  225 Hennessy Road,  Wanchai</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>'+
        '</tr>'+
  '</tbody>'+
  "</thead>" )
        });
        });


$(document).ready(function(){
  $('#NORTH').click(function(){
   
  $("#table1").html(
      "<thead style='font-size: 14px;'>"+
          "<tr>"+
            "<th scope='col'style='width:20%'>Name</th>"+
            "<th scope='col'style='width:30%'>Address</th>"+
            "<th scope='col'style='width:50%'>Type</th>"+
          "</tr>"+
          "<tbody style='font-size: 12px;'>"+
          '<tr>'+
          '<th scope="row">Luen Wo Hui Sports Centre</th>'+
          '<td>3/F.,  9 Wo Mun Street,  Fanling</td>'+
          '<td>Table Tennis Tables, Fitness Rooms, Activity Rooms, Dance Rooms, Chilren\'s Play Rooms</td>'+
        '</tr>'+
        "<tr>"+
          '<th scope="row">Lung Sum Avenue Sports Centre</th>'+
          '<td>155 Jockey Club Road,  Sheung Shui</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Po Wing Road Sports Centre</th>'+
          '<td>19 Pak Wo Road,  Sheung Shui,  New Territories</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Table Tennis Tables, American Pool Tables, Activity Rooms, Fitness Rooms, Chilren\'s Play Rooms, Indoor Jogging Tracks, Sports Climbing Facilities</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Tin Ping Sports Centre</th>'+
          '<td>3/F.,  Tin Ping Estate Shopping Centre,  Tin Ping Estate,  North</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Wo Hing Sports Centre</th>'+
          '<td>8 Wo Ming Lane,  Fanling</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Tennis Courts, Activity Rooms, Fitness Rooms, Squash Courts, Table Tennis Tables, American Pool Tables</td>'+
        '</tr>'+
  '</tbody>'+
  "</thead>" )
        });
        });

        $(document).ready(function(){
          $('#SHAMSHUIPO').click(function(){
           
          $("#table1").html(
              "<thead style='font-size: 14px;'>"+
                  "<tr>"+
                    "<th scope='col'style='width:20%'>Name</th>"+
                    "<th scope='col'style='width:30%'>Address</th>"+
                    "<th scope='col'style='width:50%'>Type</th>"+
                  "</tr>"+
                  "<tbody style='font-size: 12px;'>"+
                  '<tr>'+
                  '<th scope="row">Pei Ho Street Sports Centre</th>'+
                  '<td>5/F Pei Ho Street Municipal Services Building,  333 Ki Lung Street,  Sham Shui Po</td>'+
                  '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms, Chilren\'s Play Rooms</td>'+
                '</tr>'+
                "<tr>"+
                  '<th scope="row">Po On Road Sports Centre</th>'+
                  '<td>1/F & 2/F Po On Road Municipal Services Building,  325-329 Po On Road,  Sham Shui Po</td>'+
                  '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms, Dance Rooms</td>'+
                '</tr>'+
                '<tr>'+
                  '<th scope="row">Shek Kip Mei Park Sports Centre</th>'+
                  '<td>290 Nam Cheong Street,  Shek Kip Mei</td>'+
                  '<td>Basketball Courts, Volleyball Courts, Netball Courts, Handball Courts, Badminton Courts, Activity Rooms, Dance Rooms, Fitness Rooms, Chilren\'s Play Rooms, Sports Climbing Facilities</td>'+
                '</tr>'+
          '</tbody>'+
          "</thead>" )
                });
                });

$(document).ready(function(){
  $('#TSUENWAN').click(function(){
   
  $("#table1").html(
      "<thead style='font-size: 14px;'>"+
          "<tr>"+
            "<th scope='col'style='width:20%'>Name</th>"+
            "<th scope='col'style='width:30%'>Address</th>"+
            "<th scope='col'style='width:50%'>Type</th>"+
          "</tr>"+
          "<tbody style='font-size: 12px;'>"+
          '<tr>'+
          '<th scope="row">Tsuen Wan Sports Centre</th>'+
          '<td>53 Wing Shun Street,  Tsuen Wan,  N.T.</td>'+
          '<td>Activity Rooms, Badminton Courts, Basketball Courts, Chilren\'s Play Rooms, Dance Rooms, Fitness Rooms, Spectator Stands, SPORTS CENTRES, Sports Climbing Facilities, Table Tennis Tables, Volleyball Courts</td>'+
        '</tr>'+
        "<tr>"+
          '<th scope="row">Tsuen Wan West Sports Centre</th>'+
          '<td>68 Hoi On Road,  Tsuen Wan</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Wai Tsuen Sports Centre</th>'+
          '<td>6 Miu Kong Street,  Tsuen Wan</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>'+
        '</tr>'+
        '<tr>'+
          '<th scope="row">Yeung Uk Road Sports Centre</th>'+
          '<td>4/F Yeung Uk Road Municipal Services Building,  45 Yeung Uk Road,  Tsuen Wan</td>'+
          '<td>Basketball Courts, Volleyball Courts, Badminton Courts, Squash Courts, Table Tennis Tables, Activity Rooms, Fitness Rooms</td>'+
        '</tr>'+
  '</tbody>'+
  "</thead>" )
        });
        });