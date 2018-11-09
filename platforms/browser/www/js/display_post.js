$('#loader').show();
$(document).ready(function(){
//getting page url and page no 
var url_string = window.location.href
var link = new URL(url_string);
var post_id = link.searchParams.get("id");

var url = "https://www.bindassnix.com/myapp";   
function getPost(url,post_id)
{
	param = "?json=get_post&id="+post_id+"&callback=?";
	$.getJSON(url+param,
      function(data) {
      	console.log(data);
		var postsJson = JSON.stringify(data);
		var posts = JSON.parse(postsJson);
		var post = posts.post;
		title = post.title;
		content = post.content;
		$("#title").html(title);
		$("#post").html(content);
		$('#loader').hide();
      });
}
getPost(url,post_id);
});