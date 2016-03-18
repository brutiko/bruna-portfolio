//= require_tree .

$(document).ready(function() {
    $('.navbar ul li a').each(function() {
    if (this.href == window.location.href) {
        $(this).addClass("active");
        }
    });
});


