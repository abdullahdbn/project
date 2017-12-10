$(document).ready(function() {
    
    
    
    
    
$('.sec-nav li a').click(function($e){
    $e.preventDefault();
    
});
$('.cv-btn').click(function($e){
    $e.preventDefault();
    
});
      $(function(){
         $('#5').css('height','0');
         $('#6').css('height','0');
         $('#7').css('height','0');
         $('#8').css('height','0');
         $('#9').css('height','0');
         $('#10').css('height','0');
      });
    
   
   
    
    
     var m=0;
    $('.btn-width').click(function(){
        if(m===0){
         $("#5").animate({
       height: '200px'
    }, { duration: 500, queue: false });

    $("#6").animate({
       height: '200px'
    }, { duration: 500, queue: false });
m=1;   
        return;}
    
      
     if(m===2){
             $("#9").animate({
           height: '200px'
        }, { duration: 500, queue: false });

        $("#10").animate({
           height: '200px'
        }, { duration: 500, queue: false });
                k="on";
         m=3;
       $('.btn-width').text("reset");
       return; }
    
    
    
    
    if(m===1){
             $("#7").animate({
           height: '200px'
        }, { duration: 500, queue: false });

        $("#8").animate({
           height: '200px'
        }, { duration: 500, queue: false });
                m=2;
        return;
        }
    
         if(m===3){
             $("#10").animate({
           height: '0px'
        }, { duration: 500, queue: false });

        $("#9").animate({
           height: '0px'
        }, { duration: 500, queue: false });
          $("#8").animate({
           height: '0px'
        }, { duration: 500, queue: false });

        $("#7").animate({
           height: '0px'
        }, { duration: 500, queue: false });
          $("#6").animate({
           height: '0px'
        }, { duration: 500, queue: false });

        $("#5").animate({
           height: '0px'
        }, { duration: 500, queue: false });
        m=0;
       $('.btn-width').text("LOAD MORE");   
         return;
         }
    });
     
   
    
   /*  $(function(){
      $(".news-mix").mixItUp({
        selectors: {
          target: ".example-item" // As in mixitup
        },
        layout: {
          display: "inline-block" // As in mixitup
        },
        loadmore: {
          // The number of items to start with
          initial: 4,
          // The number of items to load on click on the loadmore button
          loadMore: 4,
          // A selector string for the existing wrapper the buttons will be inserted into
          buttonWrapper: ".loadmore",
          // The class of the Load more button
          buttonClass: "loadmore-button",
          // The label of the Load more button
          buttonLabel: "Load more",
          // The class of the less button
          lessClass: "loadmore-less",
          // The label of the less button
          lessLabel: "Reset"
        }
      });

    */
$('#owl-carousel1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    navText: ["<div class='a-back a-backl'><i class='owl-prev ion-chevron-left'></div>","<div class='a-back'><i class='owl-prev ion-chevron-right'></i></div>"],
    dotsContainer: '#carousel-custom-dots',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1024:{
            items:3
        }
    }
});
       $(".disable-owl-swipe").on("touchstart mousedown", function(e) {
            // Prevent carousel swipe
            e.stopPropagation();
        })
    $('#owl-carousel2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    navText: [""],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
});
    $('#owl-carousel3').owlCarousel({
        
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    navText: ["<div class='a-back a-backl'><i class='owl-prev ion-chevron-left'></div>","<div class='a-back'><i class='owl-prev ion-chevron-right'></i></div>"],
    dotsContainer: '#carousel-custom-dots3',
    autoplay:true,
    autoplayTimeout:5000,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})
    $(function(){
         $('.sec-nav :first-child').css('border','1px #ccc solid') ;
        $('.sec-nav li a').css('border','0px #ccc solid') ;
        
        
    });
    $('.h-box').hide();
        $('.por-box').hide();
        $('.por-btn').hide();
    $('.sec-nav li').click(function(){
         $(this).css('border','1px #ccc solid') ;
        $('.sec-nav li').not($(this)).css('border','0px #ccc solid');
    });
    
    $('.p-box').hover(function(){
        $(this).find('.por-btn').fadeIn(500);
        $(this).find('.por-box').fadeIn(500);
        $(this).find('.h-box').fadeIn(500);
    },function(){
        $(this).find('.h-box').stop(true,true).fadeOut(500);
        $(this).find('.por-box').stop(true,true).fadeOut(500);
        $(this).find('.por-btn').stop(true,true).fadeOut(500);
        
    }); 
        $('.por-icon').hover(function(){
            $(this).find('i').css('color','white');
        },function(){
            $(this).find('i').css('color','#333');

        });
        var k=0;
     $('.icon-btn').click(function(){
         if(k==0){
            $('.full-nav2').addClass('col-sm-2');
            $('.full-nav2').css('padding','0 50px');
            $(".full-nav2").animate({
                   width: '161px'
                }, { duration: 500, queue: false });
              $('.header2').removeClass('col-sm-12');

            $('.header2').addClass('col-sm-10');   
             k=1;
             return;
           
         }
          if(k==1){
            $('.full-nav2').removeClass('col-sm-2');
            $('.full-nav2').css('padding','0 0');
            $(".full-nav2").animate({
                   width: '0px'
                },  500,function() {
    
            $('.header2').removeClass('col-sm-10');
            $('.header2').addClass('col-sm-12');
              
            });
             k=0;
             return;
         }
         
         
     });

   
});
 