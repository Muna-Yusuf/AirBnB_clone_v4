/*input type="checkbox"*/
$('document').ready(function () {
   const url = 'http://0.0.0.0:5001/api/v1/status/';
   $.get(url, function (rse) {
     if (res.status === 'OK') {
        $('#api_status').addClass('available');
     } else {
       $('#api_status').removeClass('available');
     }
}
});
$('document').ready(function () {
   const amenityid = {};
   $('INPUT[type="checkbox"]').click(function () {
     if ($(this).prop('checked')) {
       amenityid[$(this).attr('data-id')] = $(this).attr('data-name');
     } else {
       delete amenityid[$(this)attr('data-id')];
     }
     $('.amenities H4').text(Object.values(amenityid).join(', '));
 });
});
