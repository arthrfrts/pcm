$(document).ready(function() {
  var footer_height;
  footer_height = $('.colophon').outerHeight();
  $('.content').css({
    'margin-bottom': footer_height
  });
});

/*
  Contact form
*/
window.addEventListener("DOMContentLoaded", function() {

  // get the form elements defined in your form HTML above
  
  var form = document.getElementById("contact_form");

  // Success and Error functions for after the form is submitted
  
  function success() {
    form.reset();
    alert(`Sua mensagem foi enviada! Vou respondê-la em breve.\n\nArthur.`);
  }

  function error() {
    alert(`Ocorreu um problema ao tentar enviar sua mensagem. Por favor, tente novamente em alguns minutos.`);
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}


/*
  Responsive videos.
*/
(function() {
  var _debounce, _each, _filter, _resize, iframes, isVideo, resizeVideos, videos;

  resizeVideos = function() {
    _each(videos, function(video) {
      var newWidth;
      newWidth = video.parentElement.offsetWidth;
      _resize(video, newWidth);
    });
  };

  _each = function(items, action) {
    var i, len;
    i = 0;
    len = items.length;
    while (i < len) {
      action(items[i], i);
      i++;
    }
  };

  _filter = function(items, test) {
    var filtered, i, item;
    filtered = [];
    i = 0;
    while (i < items.length) {
      item = items[i];
      if (test(item, i)) {
        filtered.push(item);
      }
      i++;
    }
    return filtered;
  };

  _resize = function(video, newWidth) {
    var ASPECT_RATIO, newHeight;
    ASPECT_RATIO = 9 / 16;
    newHeight = ASPECT_RATIO * newWidth;
    video.setAttribute('width', newWidth.toString());
    video.setAttribute('height', newHeight.toString());
  };

  _debounce = function(func, wait, immediate) {
    var timeout;
    timeout = void 0;
    return function() {
      var args, callNow, context, later;
      context = this;
      args = arguments;
      later = function() {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  };

  iframes = document.getElementsByTagName('iframe');

  isVideo = /(youtube)|(vimeo)|(cloudup)|(spotify)|(serialpodcast)|(twitch)|(stownpodcast)/i;

  videos = _filter(iframes, function(iframe) {
    return isVideo.test(iframe.getAttribute('src'));
  });

  resizeVideos();

}).call(this);
