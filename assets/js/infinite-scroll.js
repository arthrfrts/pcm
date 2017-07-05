$(".pagination-link").click(loadMorePosts);

function loadMorePosts() {
  var _this = this;
  var $blogContainer = $("#blog");
  var nextPage = parseInt($blogContainer.attr("data-paginator-current")) + 1;
  var totalPages = parseInt($blogContainer.attr("data-paginator-total"));

  $(this).addClass("loading");

  $.get("/page" + nextPage, function (data) {
    var htmlData = $.parseHTML(data);
    var $articles = $(htmlData).find("article");

    $blogContainer.attr("data-paginator-current", nextPage).append($articles);

    if ($blogContainer.attr("data-paginator-total") == nextPage) {
      $(".pagination-link").remove();
    }

    $(_this).removeClass("loading");
  });
}
