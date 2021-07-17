    function init(isPCFlag){
        $(".meritBox li").mouseover(function(){
            $(".contentText .imgText").hide();
            // $(".meritBox .imgbox").css({top:"0px"});
            // $(this).find(".imgText").show();
            $(".contentText .imgText").eq($(this).index()).show()
            $(this).find(".imgbox").animate({top:"-20px"},100);
        });
        $(".meritBox li").mouseleave(function(){
            $(".meritBox .imgbox").animate({top:"0px"},100);
        });
        $(".ocvBox").animate({
            left:"0%",
            top:"10%",
        },2000,ACRanmiate);
        $(".ocvBox .ocvTitle").animate({
            fontSize: '36px'
        },2000);
        $(".ocvBox .cn").animate({
            fontSize: '12px'
        },2000);
        setTimeout(()=>{
            $(".ocvBox .cn").fadeOut()
        },2000)
        setTimeout(()=>{
            $(".ocvAnimationImg").fadeOut({duration: 500})
            $(".ocvAnimationImg1").fadeIn({duration: 500})
        },500)
        setTimeout(()=>{
            $(".ocvAnimationImg").fadeOut({duration: 500})
            $(".ocvAnimationImg1").fadeIn({duration: 500})
        },1000)
        setTimeout(()=>{
            $(".ocvAnimationImg").fadeIn({duration: 1000})
            $(".ocvAnimationImg1").fadeOut({duration: 1000})
        },1500)
        setTimeout(()=>{
            $(".ocvAnimationImg").fadeIn({duration: 2000})
        },2000)
        function ACRanmiate() {
            $(".ocvAnimation").fadeOut()
            setTimeout(()=>{
                $(".arcAnimation img").eq(0).fadeIn({duration: 100});
            },0)
            setTimeout(()=>{
                $(".arcAnimation img").eq(1).fadeIn({duration: 100});
            },250)
            setTimeout(()=>{
                $(".arcAnimation img").eq(2).fadeIn({duration: 100});
            },500)
            setTimeout(()=>{
                $(".arcAnimation img").eq(3).fadeIn({duration: 100});
            },750)
            setTimeout(()=>{
                $(".arcAnimation img").eq(4).fadeIn({duration: 100});
            },1000)
            setTimeout(()=>{
                $(".arcAnimation img").eq(5).fadeIn({duration: 100});
            },1250)
            setTimeout(()=>{
                $(".arcAnimation img").eq(6).fadeIn({duration: 100});
            },1500)
            setTimeout(()=>{
                $(".arcAnimation img").eq(7).fadeIn({duration: 100});
            },1750)
            setTimeout(()=>{
                $(".arcAnimation img").eq(8).fadeIn({duration: 100});
            },2000)
            setTimeout(()=>{
                $(".arcAnimation img").eq(9).fadeIn({duration: 100});
            },50)
            $(".arcBox").show()
            $(".arcBox").animate({
                left:"100%",
                top:"10%",
            },2000,'swing',switchanmiate);
            $(".arcBox .arcTitle").animate({
                fontSize: '36px'
            },2000);
            $(".arcBox .cn").animate({
                fontSize: '12px'
            },2000);
            setTimeout(()=>{
                $(".arcBox .cn").fadeOut()
            },2000)
        }
        function switchanmiate() {
            $(".arcAnimation").fadeOut()
            $(".switchBox").show()
            $(".switchBox").animate({
                // left:"100%",
                top:"98%",
            },2000,'swing');
            $(".switchBox .switchTitle").animate({
                fontSize: '36px'
            },2000);
            $(".switchBox .cn").animate({
                fontSize: '12px'
            },2000);
            setTimeout(()=>{
                $(".switchBox .cn").fadeOut()
            },2000)
            $(".switchAnimation div").eq(0).animate({
                left:"-140%",
            },2000,'swing')
            $(".switchAnimation div").eq(1).animate({
                left:"-160%",
            },2000,'swing')
            $(".switchAnimation div").eq(2).animate({
                left:"-160%",
            },2000,'swing')
            $(".switchAnimation div").eq(3).animate({
                left:"-167%",
            },2000,'swing')
            $(".switchAnimation div").eq(4).animate({
                left:"-180%",
            },2000,'swing')
            $(".switchAnimation div").eq(5).animate({
                left:"-130%",
            },2000,'swing')
            $(".switchAnimation div").eq(6).animate({
                left:"-120%",
            },2000,'swing')
            $(".switchAnimation div").eq(7).animate({
                left:"-140%",
            },2000,'swing')
            $(".switchAnimation div").eq(8).animate({
                left:"-116%",
            },2000,'swing',goamian)
        }
        
    //     // 背景图动画
        function backgroundAnimation(){
            var pageBody = $('#pageBody');
            var x = 10;
            var flag = true;
            var currentIndex = 0;
            var bgImgs = ["./img/背景-7.jpg","./img/背景-6.jpg","./img/背景-5.jpg","./img/背景-4.jpg","./img/背景-3.jpg","./img/背景-2.jpg","./../img/背景-1.jpg"];
            function polling() {
                if(flag){
                    x -= 10;
                    pageBody.animate({
                        'background-position-x': x+'%',
                    }, 2000, 'linear');
                    flag = false
                   // changeImage()
                }else{
                    x += 10;
                    pageBody.animate({
                        'background-position-x': x+'%',
                    }, 2000, 'linear');
                    flag = true
                    //changeImage()
                }
                setTimeout(polling,2000)
            }
            polling();
            // function changeImage() {
            //     if (currentIndex > bgImgs.length){
            //         currentIndex = 0;
            //     }else{
            //         pageBody.css('background-image', 'url(' + bgImgs[currentIndex] + ')');
            //         currentIndex += 1;
            //     }
            // }
            // var currentIndex = 0;
            // function changeImage(){
                
            //     var bgImgs = ["voice-right-1.png","voice-right-2.png","voice-right-3.png"];
            //     if (currentIndex >= bgImgs.length){
            //       currentIndex = 0;
            //     }else{
            //        $('.cover_right').css('background-image', 'url(' + bgImgs[currentIndex] + ')');
            //        currentIndex += 1;
            //     }
            // }
            // setInterval(changeImage ,200)
        }
        backgroundAnimation()

        // 三角光点 光线动画
        function goamian(){
            $(".triangle").fadeIn()
            let css = {left:'83%',opacity: '0'};
            let interval = null
            clearInterval(interval)
            interval = setInterval(function(){ // 这里要改成回调 定时器有性能问题
                $(".lineImg1").addClass("intro");
                $(".lineImg2").addClass("intro");
                $(".lineImg3").addClass("intro");
    
                $('.lineImg1').animate(css,1000,rowBack1);
                $('.lineImg2').animate(css,1000,rowBack2);
                $('.lineImg3').animate(css,1000,rowBack3);
            },0);
            function rowBack1(){
                if(css.left==='83%'){
                    $('.lineImg1').css('left', '0%')
                    $(".lineImg1").removeClass("intro");
                    // $('.lineImg1').fadeOut()
                }
            }
            function rowBack2(){
                if(css.left==='83%'){
                    $('.lineImg2').css('left', '0%')
                    $(".lineImg2").removeClass("intro");
                    // $('.lineImg2').fadeOut()
                }
            }
            function rowBack3(){
                if(css.left==='83%'){
                    $('.lineImg3').css('left', '0%')
                    $(".lineImg3").removeClass("intro");
                    // $('.lineImg3').fadeOut()
                }
            }
            $('.lineImg1').animate({top: '-14px',height: '24px'},0)
            $('.lineImg2').animate({top: '-14px',height: '24px'},0)
            $('.lineImg3').animate({top: '-14px',height: '24px'},0)
            $(".ocvBox .ocvTitle").animate({
                fontSize: '12px'
            },1000);
            $(".arcBox .arcTitle").animate({
                fontSize: '12px'
            },1000);
            $(".switchBox .switchTitle").animate({
                fontSize: '12px'
            },1000);
            $('.secondAnimation').css('position','absolute')
            if(isPCFlag){
                $('.secondAnimation').animate({left: '45%'},1000)
            }else{
                $('.secondAnimation').animate({left: '47.7%',top: '47%'},1000)
            }
            $('.triangle_content').animate({width: '100px',height: '70px'},1000,showLight);
            
            function showLight(){
                $('.secondAnimation').fadeOut()
                $('.thirdAnimation').fadeIn()
                setTimeout(()=>{
                  $('.thirdAnimation').fadeOut(0, showProduct)
                },500)
            }
            function showProduct(){
                $('.fourthAnimation').fadeIn()
                $('.fourthAnimation').css('display','flex')
                if(isPCFlag){
                    $('.product').animate({width: '580px',height: '580px'},1000)
                }else{
                    $('.product').animate({width: '3rem',height: '3rem'},1000)
                }
                $('.productImg1').animate({width: '100%',height: '100%',top: '46px',left: '0%'},1000, hideLight)
            }
            function hideLight(){
                $('.lightImg2').fadeOut()
                $('.productImg1').css('background-image',"url('./img/8-产品1（无光源+倒影）.png')")
                // $('.productImg1').fadeOut(100,()=>{
                //     $('.productImg2').fadeIn()
                // })
                $('.productImg2').fadeIn(100,showProductDesc)

            }
           function showProductDesc(){
               
                $('.product_content').animate({
                    'width': '50%',
                }, 1000, 'linear');
                $('.product_desc').animate({
                    'width': '50%',
                }, 1000, 'linear',()=>{
                    $('.product_desc').animate({
                        'opacity': '1'
                    }, 1000, 'linear',()=>{
                        // setTimeout(()=>{
                            $(".contentText .imgText").eq(0).fadeIn(1000)
                            $(".setbutton").fadeIn(1000)
                        // },00)
                    });
                });
            }
        }
        // goamian()

        $(".email").bind("input propertychange",function () {
            if(!isEmail($(".email").val())) {
                $(".email").next(".verification").show()
            }else {
                $(".email").next(".verification").hide()
            }
        });
        $(".phone").bind("input propertychange",function () {
            if(!isCellphone($(".phone").val())) {
                $(".phone").next(".verification").show()
            }else {
                $(".phone").next(".verification").hide()
            }
        });
        $(".sbumit").click(()=>{
            if(isEmail($(".email").val())) {
                $(".email").next(".verification").show()
                
            }else {
                $(".email").next(".verification").hide()
            }
            if(isCellphone($(".phone").val())) {
                $(".phone").next(".verification").show()
            }else {
                $(".phone").next(".verification").hide()
            }
            if(!isEmail($(".email").val())&&!isCellphone($(".phone").val())){
                CloseDiv('MyDiv','fade')
                $(".dialog input").val("")
            }
        })
        
    }

    function ShowDiv(show_div, bg_div) {
        $("#"+show_div).fadeIn(300)
        $("#"+bg_div).fadeIn(300)
        var bgdiv = document.getElementById(bg_div);
        // bgdiv.style.width = document.body.scrollWidth;
        $("#" + bg_div).height($(document).height());
        };
        //关闭弹出层
        function CloseDiv(show_div, bg_div) {
        $("#"+show_div).fadeOut(300)
        $("#"+bg_div).fadeOut(300)
        };
    
        function isCellphone(str) {
        /**
         *@descrition:手机号码段规则
        * 13段：130、131、132、133、134、135、136、137、138、139
        * 14段：145、147
        * 15段：150、151、152、153、155、156、157、158、159
        * 17段：170、176、177、178
        * 18段：180、181、182、183、184、185、186、187、188、189
        * 
        */
        var pattern =  /^1\d{10}$|^(0\d{2,3}-?|0\d2,3)?[1-9]\d{4,7}(-\d{1,8})?$/;
        return str?pattern.test(str):true;
    }
    function isEmail(str){
        /**
         * @descrition:邮箱规则
         * 1.邮箱以a-z、A-Z、0-9开头，最小长度为1.
         * 2.如果左侧部分包含-、_、.则这些特殊符号的前面必须包一位数字或字母。
         * 3.@符号是必填项
         * 4.右则部分可分为两部分，第一部分为邮件提供商域名地址，第二部分为域名后缀，现已知的最短为2位。最长的为6为。
         * 5.邮件提供商域可以包含特殊字符-、_、.
         */
        var pattern = /^([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/;
        return str?pattern.test(str):true;
    }
    
       
