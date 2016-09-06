function getY(e) {
    var t = 0;
    while (e != null) {
        t += e.offsetTop;
        e = e.offsetParent
    }
    return t
}

function setScrollSpeed(e) {
    if (e == 1) scrollSpeed = 150;
    else if (e == 2) scrollSpeed = 100;
    else if (e == 3) scrollSpeed = 70;
    else if (e == 4) scrollSpeed = 55;
    else if (e == 5) scrollSpeed = 45;
    else if (e == 6) scrollSpeed = 35;
    if (pageScrolling == 0) {
        scrollPage();
        pageScrolling = 1
    }
    if (e == 0) {
        scrollSpeed = 1e6;
        clearTimeout(TimeoutID);
        pageScrolling = 0
    }
}

function scrollPage() {
    var e = jQuery("body").innerHeight() - jQuery(window).height();
    scrollPosition = jQuery(window).scrollTop();
    scrollPosition = scrollPosition + 1;
    if (scrollPosition < e) {
        window.scroll(0, scrollPosition);
        TimeoutID = setTimeout("scrollPage()", scrollSpeed * 2)
    } else {
        setScrollSpeed(0)
    }
}
pageScrolling = 0;
scrollSpeed = 0;
TimeoutID = 0;
jQuery(document).ready(function(e) {
    scrollPosition = jQuery(window).scrollTop();
    e("li.speed").click(function() {
        var t = e(this).attr("id");
        if (t >= 0 && t <= 6) {
            setScrollSpeed(t)
        }
    });
    e(function() {
        var t = 99999;
        e("#ascroll").each(function() {
            e(this).css("zIndex", t);
            t -= 10
        })
    })
})
pageScrolling = 0;
scrollSpeed = 0;
TimeoutID = 0;
jQuery(document).ready(function(e) {
    scrollPosition = jQuery(window).scrollTop();
    e("li.speed2").click(function() {
        var t = e(this).attr("id");
        if (t >= 0 && t <= 6) {
            setScrollSpeed(t)
        }
    });
    e(function() {
        var t = 99999;
        e("#ascroll2").each(function() {
            e(this).css("zIndex", t);
            t -= 10
        })
    })
})