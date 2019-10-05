$(function () {
        $("#ddlAccount").change(function () {
            if (($(this).val() == "Y") || ($(this).val() == "YY") ) {
                $("#dvAccount").show();
            } else {
                $("#dvAccount").hide();
            }
        });
        
        $("#ddlAccount").change(function () {
            if (($(this).val() == "Y") || ($(this).val() == "N") ) {
                $("#dvGender").show();
            } else {
                $("#dvGender").hide();
            }
        });
});
