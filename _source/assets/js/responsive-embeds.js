/*
  Based on the work by Luis Lopez
  <https://www.codetuts.tech/responsive-videos-javascript-jquery/>
*/
function _each(items, action) {
  for (var i = 0, len = items.length; i < len; i++) {
    action(items[i], i);
  }
}
function _filter(items, test) {
  var filtered = [];
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (test(item, i)) filtered.push(item);
  }
  return filtered;
}

function _resize(video, newWidth) {
  var ASPECT_RATIO = 9/16; // 16:9
  var newHeight    = (ASPECT_RATIO * newWidth);
  video.setAttribute('width',  newWidth.toString());
  video.setAttribute('height', newHeight.toString());
}

function _debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

var iframes = document.getElementsByTagName('iframe');
var isVideo = /(youtube)|(vimeo)|(spotify)/i;
var videos  = _filter(iframes, function(iframe) {
  return isVideo.test(iframe.getAttribute('src'));
});
var resizeVideos = function() {
  _each(videos, function(video) {
    var newWidth = video.parentElement.offsetWidth;
    _resize(video, newWidth);
  });
};
resizeVideos();
