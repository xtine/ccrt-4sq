var squareball = $(function () {
    'use strict';

    var checkins;

    $.getJSON('json/checkins.json', function(data) {

        checkins = data.response.checkins.items;

        $('.total-checkins').html(checkins.length);

        for (var i = checkins.length - 1; i >= 0; i--) {
            $('<li>' + checkins[i].venue.name + ' - ' + checkins[i].venue.location.state + '</li>').appendTo('.locations');
        }


    });

}());
