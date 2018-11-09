$(document).ready(function(){
  $('#loader').show();
  var url = "https://www.bindassnix.com/myapp/";  
  function get_category(url)
  {
  	param = "?json=get_category_index&callback=?";
  	$.getJSON(url+param,
      function(data) {
      	for(i=0; i<data.categories.length;i++)
      	{
      	 title = data.categories[i].title;
      	 cat_id   = data.categories[i].id;
      	 post_count = data.categories[i].post_count;
      	 $("#category").append('<a href="index.html?cat_id='+cat_id+'"><div class="w3-panel w3-round-xxlarge w3-grey"><p>'+title+'('+post_count+')</p></div></a>');
      	}
      	
      	$('#loader').hide();
      });
  }
get_category(url);
});