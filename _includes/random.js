var comingFromPost = document.referrer;

function linkToRandomBlogPost() {
  var allPosts = [{% for post in site.posts %}
      "{{ post.url }}"{% unless post.previous == nil %},{% endunless %}
    {% endfor %}];

var i = 0;
do {
  var randomPostLink = allPosts[Math.floor(Math.random() * allPosts.length)]; i++;
}
while (comingFromPost.includes(randomPostLink) || i > 10)

return randomPostLink;
}

location.replace(linkToRandomBlogPost())
