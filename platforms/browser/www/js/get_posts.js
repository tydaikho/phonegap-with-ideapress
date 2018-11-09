  $(document).ready(function(){
  $('#loader').show();
//getting page url and page no 
var url_string = window.location.href
    var link = new URL(url_string);
    var page = link.searchParams.get("page");
    if(page == null){ page = 1;}
    var cat_id = link.searchParams.get("cat_id");
 var url = "https://www.bindassnix.com/myapp";  
 if(cat_id == null)
 {
 var param = "?json=1&page="+page+"&callback=?"; 
 }
 else
 {
  var param = "?json=get_category_posts&id="+cat_id+"&callback=?";
 }
  function loadContent(url,page,param)
  {
    $.getJSON(url+param,
      function(data) {
        total_pages = data.pages;
        $("#total_pages").val(total_pages);
        posts = data.posts;
        var postsJson = JSON.stringify(posts);
        var post = JSON.parse(postsJson);
        console.log(post)
        for(i=0;i<post.length;i++)
        {

          title = post[i].title;
          content = post[i].content;
          content = content.substring(0,50);
  image = post[i].thumbnail;
  id = post[i].id;
  $('#posts_list').append('<hr><div class="w3-cell-row"> <div class="w3-cell" style="width:30%"> <img class="w3-circle" src="'+image+'" style="width:96px;height:96px" align="left"></div><a href=post.html?id='+id+'><div class="w3-cell w3-container"> <h3>'+title+'</h3> <p>'+content+'</p> </div></a> </div><hr> ');
        } 
        $('#loader').hide();
}); 
  }
 loadContent(url,page,param);

 //auto load on scrolling starts here 
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       total_pages = $('#total_pages').val();
       total_pages = parseInt(total_pages);
       cpage = $('#cpage').val();
       //alert(cpage);
       cpage = parseInt(cpage)+1;
        $('#cpage').val(cpage);
        if(cpage <= total_pages)
        {
        $('#loader').show();
         loadContent(url,cpage); 
        }
   }
});
//auto load scrolling function end here


//Javascript document ready fucntion ended here  
});
