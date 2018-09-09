 /**
                * JS is complete optional, and only used to
                * set the initial time on page load.
                *
              **/

var date = new Date();
var $clock = document.querySelector('.Clock');

$clock.
style.
setProperty('--hour', date.getHours());
$clock.
style.
setProperty('--minute', date.getMinutes());
$clock.
style.
setProperty('--second', date.getSeconds());