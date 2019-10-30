$(document).ready(function(){

    $("button#hide_h2").click(function() {
        $("h2").hide(500);
    });

    $("button#show_h2").click(function() {
        $("h2").show(300);
        $("h2").css("color","blue");
        $("h2").html("You clicked me hard.");
    });

    $("button#clear_screen").click(function() {
        var $x = $("container");
        $x.empty();
    });

    $("button#get_data").click(function() {
        var items = [];
        var i = 0;
        var airtable_read_endpoint = "https://api.airtable.com/v0/appXSoGTDQ6IdE0Iu/CompanyInformation?api_key=keyiUoXoMYkTNkr4G";
       var dataSet = [];
        $.getJSON(airtable_read_endpoint, function(result) {
               $.each(result.records, function(key,value) {
                   items = [];
                       items.push(value.fields.Name);
                       items.push(value.fields.rating);
                       items.push(value.fields.fullname);
                       items.push(value.fields.industry);
                       items.push(value.fields.industryType);
                       items.push(value.fields.scale);
                       items.push(value.fields.base);
                       items.push(value.fields.interviewdifficulty);
                       items.push(value.fields.averagesalary);
                       dataSet.push(items);
                       console.log(items);
                }); // end .each
                console.log(dataSet);

             $('#table1').DataTable( {
                 data: dataSet,
                 retrieve: true,
                 columns: [
                     { title: "Name",
                       defaultContent:""},
                     { title: "Rating",
                         defaultContent:"" },
                     { title: "Fullname",
                       defaultContent:"" },
                     { title: "Industry",
                       defaultContent:""},
                     { title: "Industry Type",
                         defaultContent:""},
                     { title: "Scale",
                       defaultContent:""},
                     { title: "Base",
                       defaultContent:""},
                     { title: "Interview Difficulty",
                       defaultContent:""},
                     { title: "Average Salary",
                       defaultContent:""},
                 ]
             } );
        }); // end .getJSON
     }); // end button

     $("button#get_data2").click(function() {
      var items = [];
      var i = 0;
      var airtable_read_endpoint = "https://api.airtable.com/v0/appMACQm0rvg8Cheq/Table%201?api_key=keyAWB8coCDESNvtz";
      var dataSet = [];
      $.getJSON(airtable_read_endpoint, function(result) {
             $.each(result.records, function(key,value) {
                 items = [];
                     items.push(value.fields.Name);
                     items.push(value.fields.Averagesalary);
                     dataSet.push(items);
                     console.log(items);
              }); // end .each
              console.log(dataSet);

           $('#table2').DataTable( {
               data: dataSet,
               retrieve: true,
               columns: [
                   { title: "Name",
                     defaultContent:""},
                   { title: "Averagesalary",
                       defaultContent:"" },
               ]
           } );

           var chart = c3.generate({
                data: {
                    columns: dataSet,
                    type : 'bar'
                },
                axis: {
                  x: {label: 'Industry'},
                  y: {label: '# of Averagesalary'}
                },
                bar: {
                    title: "# of Items by Product Category:",
                }
            });

      }); // end .getJSON

   }); // end button

}); // document ready
