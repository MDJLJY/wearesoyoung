$(document).ready(function(){
	
	
	var width=$('.contentView').width();

	
	$('.imageView').css({
		
		
		"height":(width-15)*9/16+'px',
		
		"line-height": (width-15)*9/16+'px',
		
		
	});
	
	$('.collectCell .coverImageView').css({
		
		
		"height":(width-22)/2/4*3+'px',
		
		
		
		
	});
	
	

	
	$(window).resize(function() {
var newwidth=$('.contentView').width();

$('.imageView').css({
		
		
		"height":(newwidth-15)*9/16+'px',
		
		"line-height": (newwidth-15)*9/16+'px',
		
		
	});


$('.collectCell .coverImageView').css({
		
		
		"height":(newwidth-22)/2/4*3+'px',
		
		
		
		
	});
  
});



	$.getJSON('b.json',function(data){
	
	
	        	var rev=data[0]["cover"];
        var path=data[0]["userImg"];
        	
  
     $(".imageView").css({
		
		"background":'url(' + rev + ')',
		"background-repeat": "no-repeat",
	    "background-size": "100% 100%"
		
	  });
	
	
	
	$('.titleView').text(data[0]["name"]);
	
	if(path)
	{
		
		$(".userView .oneView  img").attr('src',path); 
	      
	
	}
	if (data[0]["playCount"]/10000==0){
		
		
			$('.userView .twoView label').text(data[0]["playCount"]+"次播放");
		
		
	}
	
	 $('.topView').click(function(){
	 	
	 	
	 	alert(JSON.stringify(data[0]));
	 	
	 	
	 });
	
	
	var html='';
	$.each(data, function(index,value) {  
		     var str=JSON.stringify(value);
		  
		     var newdict={"contentType":value.type,"id":value.id,"sectionId":value.category}
		   
		   var newstr=JSON.stringify(newdict);
		  
		   
		    html+='<div class="collectCell" data-item='+newstr+'><div class="coverImageView" style="background: url('+value.cover+');background-repeat: no-repeat;background-size: 100% 100%;" >';
		    
		    html+='<div  class="playCountView">';
		    
		    html+='<img  src="img/play_number@2x.png" ><label>'+value.playCount+'</label></div></div>';
		    
		    html+='<div class="titleLabel">'+value.name+'</div>';
		   
		    html+='<div class="collectCell-userView">'+'<img  src=' + value.userImg + '>';
		    
		    html+='<label>'+value.userName+'</label>'+'</div>'+'</div>';
		    
	
		
		
	});
	
	
	$('.centerView').html(html);
	
	
	$('.collectCell .coverImageView').css({
		
		
		"height":(width-22)/2/4*3+'px',
		
		
		
		
	});
	
	$('.collectCell').click(function(){
	 	
	 	
	 var $collectCell=$(this);
	 alert(JSON.stringify($collectCell.data('item')));
	 window.play(JSON.stringify($collectCell.data('item')));
	 	
	 	
	 	
	 });
	
	

	
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//
	
	return;
	
	$.ajax({
        url: 'http://api.drunbee.tv:8080/topic-service/original/getNewBest.to',

        data: {
          start:1,
          limit:10
        },
        success: function(data) {
        	
        	var rev=data["jsonObject"][0]["cover"];
        var path=data["jsonObject"][0]["userImg"];
        	
       // 	alert(path);
        	$(".imageView").css({
		
		"background":'url(' + rev + ')',
		"background-repeat": "no-repeat",
	     "background-size": "100% 100%"
		
	});
	
	
	
	$('.titleView').text(data["jsonObject"][0]["name"]);
	
	if(path)
	{
		
		$(".userView .oneView  img").attr('src',path); 
	      
	
	}
	if (data["jsonObject"][0]["playCount"]/10000==0){
		
		
			$('.userView .twoView label').text(data["jsonObject"][0]["playCount"]+"次播放");
		
		
	}
	
	 $('.topView').click(function(){
	 	
	 	
	 	alert(JSON.stringify(data["jsonObject"][0]));
	 	
	 	
	 	
	 	
	 });

	  
	 
	  	$('.collectCell').eq(0).hide();
	
	
	
	
	$('.userView .oneView label').text(data["jsonObject"][0]["userName"]);
	

	 var dataArr=data["jsonObject"];
	
	  for (var i=1;i<dataArr.length;i++) {
	  	
	  	
	  	
	  	
	  	
	  	$('.collectCell').eq(0).clone().show().append($('.centerView'));
	  	
	  	
	  	
	  	
	  	
	  	
	  	
	  }
	
	
	
	
	

	
	   
	
	
        	
        	
        	
        	
        //	alert(JSON.stringify(data));
        	
        	
         // alert(data);
          
},
 error: function() {
      alert("ljy");
      
      
      
      
      
      
      
      
      
        }
          
	
	
	});
	
	
	
	
	
});