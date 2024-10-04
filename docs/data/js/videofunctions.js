var autoscrollblockerActive = false;

$(document).ready(function () {
  initializeVideos();
});

$(window).on('hashchange', function (e) {
  initializeVideos();
});

$(window).resize(function () {
  setVideoStepsHeight();
});

function initializeVideos() {
  autoscrollblockerActive = false;
  setVideoStepsHeight();

  if ($('#content').find('.video-activity').length) {
    autoscrollblockerActive = true;
    reduceAutoScrollBlocker();
  }

  // add scroll function
  $('.video-steps').scroll(function () {
    $(this).attr('autoscrollblocker', durationAutoScrollBlocker);
    autoscrollblockerActive = true;
  });

  // hide subtitles
  hideAllVideoSubtitles();
  // Entering fullscreen mode
  $('video').bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', function (e) {
    var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    var event = state ? 'FullscreenOn' : 'FullscreenOff';

    // Now do something interesting
    if (event == 'FullscreenOn') {
      enableDisableSubtitles(this, 'showing');
    } else {
      enableDisableSubtitles(this, 'hidden');
    }
  });
  // IE Workaround
  $(document).on('MSFullscreenChange', function (e) {
    if (document.msFullscreenElement) {
      enableDisableSubtitles(document.msFullscreenElement, 'showing')
    } else {
      hideAllVideoSubtitles();
    }
  });
}

function hideAllVideoSubtitles() {
  for (var v = 0; v < $('#content').find('.video-activity video').length; v++) {
    var video = $('#content')
      .find('.video-activity video')
      .get(v);

    enableDisableSubtitles(video, 'hidden');
  }
}

function enableDisableSubtitles(vid, mode) {
  for (var t = 0; t < vid.textTracks.length; t++) {
    vid.textTracks[t].mode = mode;
  }
}

function reduceAutoScrollBlocker() {
  if (autoscrollblockerActive) {
    $('#content .video-activity .video-steps[autoscrollblocker]').each(function (
      index
    ) {
      var count = $(this).attr('autoscrollblocker');
      count = count - 1;
      if (count > 0) {
        $(this).attr('autoscrollblocker', count);
      } else {
        $(this).removeAttr('autoscrollblocker');
      }
    });
  }

  window.setTimeout(function () {
    reduceAutoScrollBlocker();
  }, 1000);
}

function setVideoStepsHeight() {
  $('#content .video-activity').each(function (index) {
    $(this).addClass('foo-' + index);
    var video_height = $(this)
      .find('.video')
      .height();
    $(this)
      .find('.video-steps')
      .height(video_height);
  });
}

var playStep = function (input) {
  var currentVideo = $(input).parents('.video-activity').find('video');
  currentVideo = $(currentVideo).get(0);
  currentVideo.load();
  var timestamp = $(input).parents('.activitystep').attr('TimeStamp');

  if (!currentVideo.currentTime) {
    currentVideo.addEventListener('loadedmetadata', function () {
      currentVideo.play();
      currentVideo.currentTime = timestamp;
    }, false);
  } else {
    currentVideo.play();
    currentVideo.currentTime = timestamp;
  }
};

var updateTime = function (vid) {

  var video = $(vid).get(0);
  var curTime = Math.round($(vid).get(0).currentTime);

  var lastCheck = 0;
  if ($(video).attr('updateTimeCheck')) {
    lastCheck = $(video).attr('updateTimeCheck');
  }

  if ((curTime != lastCheck) || lastCheck == 0) {
    var steps = $(video).parents('.video-activity').find('.activitystep');
    clearSteps(video);
    var step = getNearestStep($(vid).get(0).currentTime, steps);
    if (step) {
      showStep(step);
    }

    $(video).attr('updateTimeCheck', curTime);
  }
};

function clearSteps(video) {
  $(video).parents('.video-activity').find('.activitystep').removeClass('active');
}

function getNearestStep(curTime, objs) {
  var last = Math.round(curTime);
  var curObj;

  var length = objs.length;
  for (var i = 0; i < length; i++) {
    var obj = objs[i];
    var startTime = obj.getAttribute('TimeStamp');
    if (!startTime) {
      startTime = 0;
    }
    var t = Math.round(curTime - startTime);
    if (t <= last && t > 0) {
      last = t;
      curObj = obj;
    }
  }
  return curObj;
}

function showStep(step) {
  $(step).addClass('active');
  var divbox = $(step).parents('.video-steps');

  if (!divbox.attr('autoscrollblocker')) {
    var topPos = step.offsetTop;
    $(divbox).scroll();
    $(divbox).animate({
        scrollTop: topPos
      },
      100
    );
  }
}