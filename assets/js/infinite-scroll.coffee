---
# Hello, Jekyll!
---

(->
  loadMorePosts = undefined

  loadMorePosts = ->
    $blogContainer = undefined
    _this = undefined
    nextPage = undefined
    nextURL = undefined
    totalPages = undefined
    _this = this
    $blogContainer = $('#blog')
    nextPage = parseInt($blogContainer.attr('data-paginator-current')) + 1
    nextURL = 'https://paomortadela.com.br/page' + nextPage
    totalPages = parseInt($blogContainer.attr('data-paginator-total'))
    $(this).addClass 'loading'
    $.ajax {
      type: 'GET'
      url: nextURL
    }, (data) ->
      $articles = undefined
      htmlData = undefined
      htmlData = $.parseHTML(data)
      $articles = $(htmlData).find('figure')
      $blogContainer.attr('data-paginator-current', nextPage).find('.post-list').append $articles
      if $blogContainer.attr('data-paginator-total') == nextPage
        $('.pagination-link').remove()
      $(_this).removeClass 'loading'
      return
    return

  $('.pagination-link').click loadMorePosts
  return
).call this
