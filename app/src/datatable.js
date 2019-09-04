$(document).ready(function () {
    $('#basic-datatables').DataTable({
        "ajax":  JSON.stringify( 'permissions' )
    });
});
