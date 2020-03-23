$.extend( $.fn.dataTable.FixedHeader, {
    responsive: true
} );

$(document).ready(function() {

var table = $('#myTable').DataTable( {
    /* rowReorder: {
    selector: 'td:nth-child(2)'
    }, */
    responsive: true,
    dom: 'Bfrtip',
    select: true,
    buttons: [
        {
            text: 'Update Facility',
            action: function ( e, dt, node, config ) {
                recEntry = dt.row( { selected: true } ).data();
                openForm(recEntry,'update');
            },
            enabled: false
        },
        {
            text: 'Delete Facility',
            action: function ( e, dt, node, config ) {
                recEntry = dt.row( { selected: true } ).data();
                openForm(recEntry,'delete');
            },
            enabled: false
        },
         {
          text: 'Add Facility',
          action: function ( e, dt, node, config ) {
              // alert( 'Button activated' );
               recEntry = []
               openForm(recEntry,'add');
          }
         }
    ]
} );


table.on( 'select deselect', function () {
    var selectedRows = table.rows( { selected: true } ).count();

    table.button( 0 ).enable( selectedRows === 1 );
    table.button( 1 ).enable( selectedRows > 0 );
} );

} );

function openForm(recEntry,whichForm) {
  
    if (whichForm == 'add') {
       $("#myAddForm").modal();
        // document.getElementById("add_product_id").value = recEntry[0];
        document.getElementById("add_Facility_Id").value = '';
        document.getElementById("add_name").value = '';
        document.getEl
        ementById("add_Address").value = 0;
        document.getElementById("add_District").value = 0;
        document.getElementById("add_FacilityType").value = 0;
        document.getElementById("add_Lat").value = 0;
        document.getElementById("add_Lng").value = 0;
        // document.getElementById("add_record_id").value = recEntry[0];
    } else if (whichForm == 'update') {
       $("#myUpdateForm").modal();
        document.getElementById("upd_Facility_Id").value = recEntry[0];
        document.getElementById("upd_name").value = recEntry[1];
        document.getElementById("upd_Address").value = recEntry[2];
        document.getElementById("upd_District").value = recEntry[3];
        document.getElementById("upd_FacilityType").value = recEntry[4];
        document.getElementById("upd_Lat").value = recEntry[5];
        document.getElementById("upd_Lng").value = recEntry[0];
    } else {
        $("#myDeleteForm").modal();
        document.getElementById("del_Facility_Id").value = recEntry[0];
        document.getElementById("del_name").value = recEntry[1];
        document.getElementById("del_Address").value = recEntry[2];
        document.getElementById("del_District").value = recEntry[3];
        document.getElementById("del_FacilityType").value = recEntry[4];
        document.getElementById("del_Lat").value = recEntry[5];
        document.getElementById("del_Lng").value = recEntry[0];
    }
}

function closeForm(whichForm) {

  if (whichForm == 'add') {
      document.getElementById("myAddForm").style.display = "none";
  } else if (whichForm == 'update') {
      document.getElementById("myUpdateForm").style.display = "none";
  } else {
      document.getElementById("myDeleteForm").style.display = "none";
  }
}