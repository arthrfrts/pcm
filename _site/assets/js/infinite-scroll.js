(function() {
  var loadMorePosts;

  loadMorePosts = function() {
    var $blogContainer, _this, nextPage, totalPages;
    _this = this;
    $blogContainer = $('#blog');
    nextPage = parseInt($blogContainer.attr('data-paginator-current')) + 1;
    totalPages = parseInt($blogContainer.attr('data-paginator-total'));
    $(this).addClass('loading');
    $.get('/page' + nextPage, function(data) {
      var $articles, htmlData;
      htmlData = $.parseHTML(data);
      $articles = $(htmlData).find('figure');
      $blogContainer.attr('data-paginator-current', nextPage).find('.post-list').append($articles);
      if ($blogContainer.attr('data-paginator-total') === nextPage) {
        $('.pagination-link').remove();
      }
      $(_this).removeClass('loading');
    });
  };

  $('.pagination-link').click(loadMorePosts);

}).call(this);
