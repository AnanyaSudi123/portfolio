var sources=["https://post.medicalnewstoday.com/wp-content/uploads/2019/06/Female_Woods_hike_732x549-thumbnail.jpg","https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/the_health_benefits_of_yoga_ref_guide/650x350_the_health_benefits_of_yoga_ref_guide.jpg","https://juegosgratisdiario.com/wp-content/uploads/2020/04/6.jpg","https://images.theconversation.com/files/213376/original/file-20180405-189813-es71oq.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop","https://www.healthifyme.com/blog/wp-content/uploads/2019/10/Dance-to-Lose-weight-1.jpg"];
var i=0;
var image1=document.getElementById("img1");
image1.addEventListener("click",function(){
    if(i<5){
        i++;
        document.getElementById("img1").src=sources[i];
    }
    if(i===5){
        i=0;
        document.getElementById("img1").src=sources[i];
    }
    
})