---
---
$(document).ready ->
  footer_height = $('.colophon').outerHeight()
  $('.content').css 'margin-bottom': footer_height
  return


(->
  _debounce = undefined
  _each = undefined
  _filter = undefined
  _resize = undefined
  iframes = undefined
  isVideo = undefined
  resizeVideos = undefined
  videos = undefined

  resizeVideos = ->
    _each videos, (video) ->
      newWidth = undefined
      newWidth = video.parentElement.offsetWidth
      _resize video, newWidth
      return
    return

  _each = (items, action) ->
    i = undefined
    len = undefined
    i = 0
    len = items.length
    while i < len
      action items[i], i
      i++
    return

  _filter = (items, test) ->
    filtered = undefined
    i = undefined
    item = undefined
    filtered = []
    i = 0
    while i < items.length
      item = items[i]
      if test(item, i)
        filtered.push item
      i++
    filtered

  _resize = (video, newWidth) ->
    ASPECT_RATIO = undefined
    newHeight = undefined
    ASPECT_RATIO = 9 / 16
    newHeight = ASPECT_RATIO * newWidth
    video.setAttribute 'width', newWidth.toString()
    video.setAttribute 'height', newHeight.toString()
    return

  _debounce = (func, wait, immediate) ->
    timeout = undefined
    timeout = undefined
    ->
      args = undefined
      callNow = undefined
      context = undefined
      later = undefined
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
  isVideo = /(youtube)|(vimeo)|(cloudup)|(spotify)|(serialpodcast)|(stownpodcast)/i
  videos = _filter(iframes, (iframe) ->
    isVideo.test iframe.getAttribute('src')
  )
  resizeVideos()
  return
).call this
