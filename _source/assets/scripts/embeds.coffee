---
# Hello, Jekyll!
---
resizeVideos = ->
  _each videos, (video) ->
    newWidth = video.parentElement.offsetWidth
    _resize video, newWidth
    return
  return


_each = (items, action) ->
  i = 0
  len = items.length
  while i < len
    action items[i], i
    i++
  return


_filter = (items, test) ->
  filtered = []
  i = 0
  while i < items.length
    item = items[i]
    if test(item, i)
      filtered.push item
    i++
  filtered

_resize = (video, newWidth) ->
  ASPECT_RATIO = 9 / 16
  # 16:9
  newHeight = ASPECT_RATIO * newWidth
  video.setAttribute 'width', newWidth.toString()
  video.setAttribute 'height', newHeight.toString()
  return

_debounce = (func, wait, immediate) ->
  timeout = undefined
  ->
    context = this
    args = arguments

    later = ->
      timeout = null
      if !immediate
        func.apply context, args
      return

    callNow = immediate and !timeout
    clearTimeout timeout
    timeout = setTimeout(later, wait)
    if callNow
      func.apply context, args
    return

iframes = document.getElementsByTagName('iframe')
isVideo = /(youtube)|(vimeo)|(cloudup)|(spotify)/i
videos = _filter(iframes, (iframe) ->
  isVideo.test iframe.getAttribute('src')
)

resizeVideos()
