var arr_nav = [];
var modusSubLink = '';
var subLink = '';
var removeMarker = true;
var viewer;
var firstLoad = true;
if (typeof languages == "undefined") {
    var languages = [];
}

$(document).ready(function () {
    //change fonts according to language
    var path = window.location.href;
    if(path.indexOf("ja.html") > -1) {
        document.body.style.fontFamily = "MSPGothic";
    } else if(path.indexOf("ko.html") > -1) {
        document.body.style.fontFamily = "Malgun";
    } else if(path.indexOf("zh.html") > -1) {
        document.body.style.fontFamily = "SimSun";
    }
    console.log(path);
    // languages
    if (languages.length > 1) {
        for (var l = 0; l < languages.length; l++) {
            //$('.ul-languages').append('<li><a href="javascript:void(0)" onclick="changeLanguage(\'' + languages[l] + '\')">' + languages[l] + '</a></li>')
            $('.ul-languages').append('<li><a href="' + languages[l] + '.html">' + languages[l] + '</a></li>')
        }
    } else {
        $('.dropdown-languages').hide();
    }

    //alert(screen.width);
    // popover
    $('#popover-form-button').popover({
        html: true,
        title: '',
        content: '<form role="search" onsubmit="return false"><input type="text" class="form-control" id="search-txt-tablet" placeholder="Suchen" /><button type="submit" id="search-btn-tablet" onclick="searchTablet()" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button>'
    });

    // stop reload after send form
    $('form').attr('onsubmit', 'return false')

    // arr navi
    $('ul.nav a').each(function (index) {
        arr_nav[index] = $(this).attr('href');
    });

    /* search */
    $('#search-btn').click(function () {
        var searchq = $('#search-txt').val();
        searchq = searchq.replace('*', '');
        searchq = searchq.trim();
        searchq = encodeURIComponent(searchq);
        if (searchq != '') {
            window.location.hash = 'search=' + searchq;
        }
    });

    /* Helper for mobile nav */
    $('.navbar-toggle-mobile').click(function () {
        $('body').toggleClass('nav-mobile');
    });

    /* Helper for tablet nav */
    $('.navbar-toggle-tablet').click(function () {
        $('body').toggleClass('nav-tablet');
    });

    hashHasChanged();

    // toggle navi onclick at active link
    $('.navbar-nav li a').click(function () {
        var attr_toggle = $(this).attr('data-toggle');
        if (!attr_toggle && $(this).attr('href') == window.location.hash) {
            $('#menu').collapse('hide');
            $('body').removeClass('nav-mobile');
        }
    })
    $('#menu.navbar-collapse').on('hide.bs.collapse', function (e) {
        if ($(this).is(e.target)) {
            $('html,body').animate({
                scrollTop: 0
            }, 10);
        }
    })
});

function scrollToActiveLink() {
    if ($('.navbar-nav .active')[0]) {
        $('.navbar-nav .active')[0].scrollIntoView(true);
    }
}

function changePage(pageChange) {
    // close all navilinks
    if (openMultipleNaviDropdowns == false) {
        $('.navbar-nav ul.collapse:not(:has(a[href="#' + pageChange + '"]))').collapse('hide');
    }

    // show active navilink
    var link = $('.navbar-nav a[href="#' + pageChange + '"]');
    var NavButton = $(link).parent('li');
    $(NavButton).parents('ul.collapse').collapse('show');
    $('.navbar-nav .active').removeClass('active');
    $(NavButton).addClass('active');

    //scroll to active navilink
    if (firstLoad) {
        window.setTimeout(function () {
            scrollToActiveLink();
        }, 500);
    }
    firstLoad = false;

    // close all popover
    $('[data-toggle="popover"][aria-describedby]').click();

    // remove marker
    if (removeMarker) {
        //$('.marker').contents().unwrap();
        $('body').unmark();
    }
    removeMarker = true;

    var link = $('a[href="#' + pageChange + '"]');
    var NavButton = $(link).parents('li');

    if ($('.page#' + pageChange).length) {
        var html = $('.page#' + pageChange).html();
        $('#content').html(html);
    } else {
        var html = $('.page#' + dafaultPage).html();
        $('#content').html(html);
    }

    //scroll to sublink
    if (subLink != '') {
        var target = $('[' + modusSubLink + '=' + subLink + ']');
        if (target.length) {

            var header_height = ($('nav.top-nav').height()) + 10;
            var scroll_to = Math.round(target.offset().top - header_height);

            // higlight scrollto text
            //var method = 'bounce';
            var method = 'highlight';
            $(target).addClass(method);

            window.setTimeout(function () {
                $(target).removeClass(method);
            }, 1000);

            $('html,body').animate({
                scrollTop: scroll_to
            }, 0);
            return false;
        }
    } else {
        // scroll to top
        $('html,body').animate({
            scrollTop: 0
        }, 10);
    }
    subLink = '';
    modusSubLink = '';

    // scroll to first marker
    if ($('#content .marker').length > 0 && pageChange != 'search') {
        var target = $('#content .marker').first();
        var header_height = $('nav.top-nav').height() + 10;
        var scroll_to = Math.round(target.offset().top - header_height);
        $('html,body').animate({
            scrollTop: scroll_to
        }, 0);
    }

    // toggle navi if last link
    var attr_toggle = $(link).attr('data-toggle');
    if (!attr_toggle) {
        $('#menu').collapse('hide');
        $('body').removeClass('nav-mobile');
    }


    // button back and next
    $('.btn-nav-next').removeClass('btn-disabled');
    $('.btn-nav-back').removeClass('btn-disabled');
    var index = arr_nav.indexOf('#' + pageChange);
    // next
    if (arr_nav[index + 1]) {
        $('.btn-nav-next').attr('href', arr_nav[index + 1]);
    } else {
        $('.btn-nav-next').addClass('btn-disabled');
    }
    // back
    if (arr_nav[index - 1]) {
        $('.btn-nav-back').attr('href', arr_nav[index - 1]);
    } else {
        $('.btn-nav-back').addClass('btn-disabled');
    }
}

$(window).on('hashchange', function (e) {
    hashHasChanged();
});

function hashHasChanged() {
    var hash = window.location.hash;
    hash = hash.replace('#', '');
    hash = hash.replace('?', '');
    var arr_hash = hash.split('=');
    hash = arr_hash[0];
    var activePage = hash;

    if (activePage == '') {
        activePage = rootPage;
    } else if (arr_hash[0] == 'search') {
        var searchindex = arr_hash[1];
        if (searchindex == undefined) {
            searchindex = '';
        }
        removeMarker = false;
        searchIndex(searchindex);
    }

    // seite da ?
    if ($("article#" + activePage).length == 0) {
        // seite suchen
        if ($('[id="' + activePage + '"]').length > 0) {
            modusSubLink = 'id';
            subLink = activePage;
            var id = $('[id="' + activePage + '"]').parents('article.page').attr('id');
            //location.hash = '#' + id;
            window.history.replaceState({}, "#" + id, "#" + id);
            changePage(id);
        } else if ($('[helpid="' + activePage + '"]').length > 0) {
            modusSubLink = 'helpid';
            subLink = activePage;
            var id = dafaultPage;
            if ($('article.page[helpid="' + activePage + '"]').length > 0) {
                id = $('article.page[helpid="' + activePage + '"]').attr('id');
                //location.hash = '#' + id;
                window.history.replaceState({}, "#" + id, "#" + id);
                changePage(id);
            } else {
                id = $('[helpid="' + activePage + '"]').parents('article.page').attr('id');
                //location.hash = '#' + id;
                window.history.replaceState({}, "#" + id, "#" + id);
                changePage(id);
            }
        }
    } else {
        changePage(activePage);
    }
}

function searchIndex(search) {
    //$('.marker').contents().unwrap();
    $('body').unmark();
    search = search.trim();
    var search_orig = search;
    search_orig = decodeURIComponent(search_orig);
    search_orig = search_orig.trim();
    search = search.replace('*', '');
    search = decodeURIComponent(search);
    search = search.trim();

    $('#search').html('');
    var result = '<div class="list-group">';
    var count = 0;

    $('.page:contains("' + search + '")').each(function (i, element) {
        var id = $(this).attr('id');
        var title = $(this).attr('title');

        // build context
        var text = element.innerHTML;
        // replace html-tags
        text = text.replace(/<[^>]*>/g, " ");
        text = text.replace('&nbsp;', '');
        text = text.replace(/  +/g, ' '); // remove duplicate whitespaces
        text = text.trim();
        var context = getContextOfString(search, text.replace(title, '').trim(), searchContextBefore, searchContextAfter);
        //var context = getContextOfString(search, text, searchContextBefore, searchContextAfter);

        //marker
        //element.innerHTML = setMarker(element.innerHTML, search);
        //context = setMarker(context, search);

        // breadcrumb
        var breadcrumb = '';
        $('.nav a[href="#' + id + '"]').parents('li').children('a').each(function (index, value) {
            breadcrumb = '<li>' + value.text + '</li>' + breadcrumb;
        });
        breadcrumb = '<li>' + document.title + '</li>' + breadcrumb;

        breadcrumb = '<ol class="breadcrumb">' + breadcrumb + '</ol>';

        var link = '<a onclick="removeMarker = false" href="#' + id + '" class="list-group-item d-flex justify-content-between align-items-center"><h4 class="list-group-item-heading">' + title + '</h4><p class="list-group-item-text context">' + context + '</p>' + breadcrumb + '</a>';
        result += link;
        count++;
    });

    var headline = '<div class="page-header"><h1><span class="glyphicon glyphicon-search"></span> "' + search_orig + '" (' + count + ')</h1></div>';
    result += '</div>';

    $('#search').append(headline + result);

    $("#pages .page").mark(search, {
        "element": "span",
        "className": "marker"
    });

    $('#search').unmark();

    $("#search .list-group h4").mark(search, {
        "element": "span",
        "className": "marker"
    });

    $("#search .list-group .context").mark(search, {
        "element": "span",
        "className": "marker"
    });

}

function setMarker(p_text, p_search) {
    p_text = encodeURIComponent(p_text);
    p_search = encodeURIComponent(p_search);

    var re = new RegExp(p_search, 'gi');
    var founds = p_text.match(re);
    if (founds && founds.length) {
        founds = founds.unique();
        for (var f = 0; f < founds.length; f++) {
            p_text = p_text.replace(new RegExp('(' + founds[f] + ')(?![^<]*>)', 'g'), '<span class="marker">' + founds[f] + '</span>');
        }
    }
    return decodeURIComponent(p_text);
}

function getContextOfString(p_search, p_text, p_before, p_after) {
    p_search = encodeSpezialChar(p_search);
    p_search = encodeURIComponent(p_search);
    p_search = p_search.replace(/[(]/g, '%28');
    p_search = p_search.replace(/[)]/g, '%29');

    p_text = encodeURIComponent(p_text);
    p_text = p_text.replace(/[(]/g, '%28');
    p_text = p_text.replace(/[)]/g, '%29');


    // klammern
    //p_searchtemp = p_search.replace(/[(]/g, '%28');
    //console.log(p_searchtemp);

    var p_searchOrig = p_search;
    var p_textOrig = p_text;


    // whitespaces
    p_search = p_search.replace(new RegExp(' ', 'g'), '_x_');
    p_search = p_search.replace(new RegExp('%20', 'g'), '_x_');

    p_text = p_text.replace(new RegExp(p_searchOrig, 'i'), p_search);
    var p_arrText = p_text.split('%20');
    var p_arrTextLow = p_text.toLowerCase().split('%20');

    for (var p_i = 0; p_i < p_arrTextLow.length; p_i++) {
        if (p_arrTextLow[p_i].replace(p_search.toLowerCase(), '') != p_arrTextLow[p_i]) {
            var p_index = p_i;
            p_i = p_arrTextLow.length + 10;
        }
    }

    var p_indexStart = Math.max(0, p_index - p_before);
    var p_indexEnd = Math.min(p_arrText.length, p_index + p_after);

    // if searchstring not in text
    if (!p_indexStart) {
        p_indexStart = 0;
        p_indexEnd = p_after;
    }

    var p_context = p_arrText.joinStartEnd('%20', p_indexStart, p_indexEnd);

    // replace searchstring
    var p_re = new RegExp(p_searchOrig, 'gi');
    var p_founds = p_textOrig.match(p_re);

    var p_re = new RegExp(p_search, 'gi');
    var p_foundsContext = p_context.match(p_re);

    if (p_foundsContext && p_foundsContext.length) {
        for (var p_f = 0; p_f < p_foundsContext.length; p_f++) {
            p_context = p_context.replace(p_foundsContext[p_f], p_founds[p_f]);
        }
    }

    return decodeURIComponent(p_context);
}

function encodeSpezialChar(strInput) {
    strInput = strInput.replace('<', '&lt;');
    strInput = strInput.replace('>', '&gt;');
    return strInput;
}

function searchTablet() {
    var search = $('#search-txt-tablet').val();
    search = search.trim();
    search = encodeURIComponent(search);
    window.location.hash = 'search=' + search;
}

function viewImage(img) {

    img.addEventListener('hide', function () {
        viewer.destroy();
    });

    viewer = new Viewer(img, {
        navbar: 0,
        toolbar: 0,
        title: 0
    });
    viewer.view();
}

function changeLanguage(langChange) {
    //var lang_active = $('meta[name=language]').attr("content");
    //var url_lang = String(window.location.hash);
    //alert(url_lang);
    //var url_new = url_lang.replace('index.html',lang_active+'.html');
    //url_new = url_new.replace(lang_active+'.html',langChange+'.html');
    //url_new = url_new.replace(lang_active+'.html',langChange+'.html');
    window.location = langChange + '.html';
}

// OVERWRITES old selecor
jQuery.expr[':'].contains = function (a, i, m) {
    return jQuery(a).text().toUpperCase()
        .indexOf(m[3].toUpperCase()) >= 0;
};

Array.prototype.unique = function () {
    return this.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });
}

Array.prototype.joinStartEnd = function (seperator, start, end) {
    if (!start) start = 0;
    if (!end) end = this.length - 1;
    end++;
    return this.slice(start, end).join(seperator);
};