//////// page indicator ////////
$(function(){
    //Set count for total number of sections
    $('.section-count').text($('.section').size());

    //Increase counter i when section passes
    $('.section').each(function (i,el) {
    var waypoint = new Waypoint({
        element: el,
        offset: '50%',
        handler: function (direction) {
            if (direction == 'down') {
                $('.section-current').text(i+1);
            } else {
                $('.section-current').text(i);
            }
        }

    })

    });
})

//Scroll back to top
var $toplink = $('.page-count');
$toplink.click(function() {
    $('html, body').animate({
        scrollTop: $('body').offset().top
    }, 500);
});

//Full Height Sections
$(function(){
	var fullHeight = $('.section');
    var windowH = $(window).height();
    var wrapperH = fullHeight.height();
    if(windowH > wrapperH) {                            
        fullHeight.css({'min-height':($(window).height())+'px'});
    }                                                                               
    $(window).resize(function(){
        var windowH = $(window).height();
        var wrapperH = fullHeight.height();
        var differenceH = windowH - wrapperH;
        var newH = wrapperH + differenceH;
        //var truecontentH = $('#truecontent').height();
        //if(windowH > truecontentH) {
            fullHeight.css('min-height', (newH)+'px');
        //}

    })          
});

/* 햄버거버튼 */
$(function(){
    $(".ham-btn").click(function(){
        $(".ham-menu").stop().show();
        $(".close").click(function(){
            $(".ham-menu").stop().hide();
        })
        })
});

