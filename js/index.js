    function init(isPCFlag){
        function goamian(){
            $(".lineRight").fadeIn()
            $(".lineImg3").addClass("intro");
            $('.lineImg3').animate({left:'83%',opacity: '0'},1000,setblack1);
            setTimeout(() => {
                $(".lineTop").fadeIn()
                $(".lineImg1").addClass("intro");
                $('.lineImg1').animate({left:'83%',opacity: '0'},1000,setblack2);
                $('.lineImg1').css('left', '0%')
            }, 1000);
            setTimeout(() => {
                $(".lineLeft").fadeIn()
                $(".lineImg2").addClass("intro");
                $('.lineImg2').animate({left:'83%',opacity: '0'},1000,setblack3);
                $('.lineImg2').css('left', '0%')
            }, 2000);
        
            function setblack1(){
                $('.lineImg3').css('left', '0%')
                $('.lineImg3').removeClass('intro')
            }
            function setblack2(){
                $('.lineImg1').css('left', '0%')
                $('.lineImg1').removeClass('intro')
            }
            function setblack3(){
                $('.lineImg2').css('left', '0%')
                $('.lineImg2').removeClass('intro')
            }
            setTimeout(() => {
                let css = {left:'83%'};
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
            }, 3500);
            
        }
        goamian()

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
       
