/* jQuery for MaterializeCSS initialization */

$(document).ready(function () {
    $(".sidenav").sidenav({edge: "left"});
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
    $('.datepicker').datepicker({
        formaat: "dd mmmm, yyyy",
        yearRange: 1,
        showClearBtn: true,
        i18n: {
            done: "Select"
        }
    });
    $('.timepicker').timepicker();
    $('select').formSelect();
});
