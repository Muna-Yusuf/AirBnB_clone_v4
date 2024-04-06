/*input type="checkbox"*/

$('document').ready(function () {
   const amenityid = {};
   $('INPUT[type="checkbox"]').click(function () {
     if ($(this).prop('checked')) {
       amenityid[$(this).attr('data-id')] = $(this).attr('data-name');
     } else {
       delete amenityid[$(this)attr('data-id')];
     }
     $('.amenities h4').text(Object.values(amenitiesId).join(', '));
 });
});
