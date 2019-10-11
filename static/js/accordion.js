// JavaScript Document


$(document).on('ready', function() {
    "use strict";
    var $active = $('#accordion .panel-collapse.in').prev().addClass('active');
    $active.find('a').prepend('<i class="fa fa-minus-circle sign"></i>');
    $('#accordion .panel-heading').not($active).find('a').prepend('<i class="fa fa-plus-circle sign"></i>');
    $('#accordion').on('show.bs.collapse', function(e) {
        $('#accordion .panel-heading.active').removeClass('active').find('.fa').toggleClass('fa-plus-circle fa-minus-circle');
        $(e.target).prev().addClass('active').find('.fa').toggleClass('fa-plus-circle fa-minus-circle');
    })
});

$(document).on('ready', function() {
    "use strict";
    var $active = $('#accordion-1 .panel-collapse.in').prev().addClass('active');
    $active.find('a').prepend('<i class="fa fa-minus-circle sign"></i>');
    $('#accordion-1 .panel-heading').not($active).find('a').prepend('<i class="fa fa-plus-circle sign"></i>');
    $('#accordion-1').on('show.bs.collapse', function(e) {
        $('#accordion-1 .panel-heading.active').removeClass('active').find('.fa').toggleClass('fa-plus-circle fa-minus-circle');
        $(e.target).prev().addClass('active').find('.fa').toggleClass('fa-plus-circle fa-minus-circle');
    })
});

$(document).on('ready', function() {
    "use strict";
    var $active = $('#accordion-2 .panel-collapse.in').prev().addClass('active');
    $active.find('a').prepend('<i class="fa fa-minus-circle sign"></i>');
    $('#accordion-2 .panel-heading').not($active).find('a').prepend('<i class="fa fa-plus-circle sign"></i>');
    $('#accordion-2').on('show.bs.collapse', function(e) {
        $('#accordion-2 .panel-heading.active').removeClass('active').find('.fa').toggleClass('fa-plus-circle fa-minus-circle');
        $(e.target).prev().addClass('active').find('.fa').toggleClass('fa-plus-circle fa-minus-circle');
    })
});

$(document).on('ready', function() {
    "use strict";
    var $active = $('#accordion-3 .panel-collapse.in').prev().addClass('active');
    $active.find('a').prepend('<i class="fa fa-minus-circle sign"></i>');
    $('#accordion-3 .panel-heading').not($active).find('a').prepend('<i class="fa fa-plus-circle sign"></i>');
    $('#accordion-3').on('show.bs.collapse', function(e) {
        $('#accordion-3 .panel-heading.active').removeClass('active').find('.fa').toggleClass('fa-plus-circle fa-minus-circle');
        $(e.target).prev().addClass('active').find('.fa').toggleClass('fa-plus-circle fa-minus-circle');
    })
});

$(document).on('ready', function() {
    "use strict";
    var $active = $('#accordion-4 .panel-collapse.in').prev().addClass('active');
    $active.find('a').prepend('<i class="fa fa-minus-circle sign"></i>');
    $('#accordion-4 .panel-heading').not($active).find('a').prepend('<i class="fa fa-plus-circle sign"></i>');
    $('#accordion-4').on('show.bs.collapse', function(e) {
        $('#accordion-4 .panel-heading.active').removeClass('active').find('.fa').toggleClass('fa-plus-circle fa-minus-circle');
        $(e.target).prev().addClass('active').find('.fa').toggleClass('fa-plus-circle fa-minus-circle');
    })
});
