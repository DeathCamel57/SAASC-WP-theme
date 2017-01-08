// Actual script


// Remove Before moving to master...
// Auto refresh page script below
/*
if (!window.keydown) {
    setTimeout(function(){
        location.reload();
    }, 2000);
}
*/

// For the Dropdown navigation bar
$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
});
