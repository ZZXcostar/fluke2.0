    function init(isPCFlag){
        
        
        //     // 背景图动画
        function backgroundAnimation(){
            var pageBody = $('#pageBody');
            var x = 20;
            var flag = true;
            
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
        }
        // backgroundAnimation()
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
            left:"8%",
            top:"10%",
        },2000,ACRanmiate);
        setTimeout(()=>{
            $(".ocvBox .ocvTitle").animate({
                fontSize: '.3rem'
            },2000);
            $(".ocvBox .cn").animate({
                fontSize: '12px'
            },2000);
        },200)
        
        
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
                left:"92%",
                top:"10%",
            },2000,'swing',switchanmiate);
            setTimeout(()=>{
                tanmu()
            },1000)
            setTimeout(()=>{
            $(".arcBox .arcTitle").animate({
                fontSize: '.3rem'
            },2000);
            },200)
            $(".arcBox .cn").animate({
                fontSize: '12px'
            },2000);
            setTimeout(()=>{
                $(".arcBox .cn").fadeOut()
            },2000)
        }
        function tanmu() {
            $(".switchAnimation div").eq(0).animate({
                left:"-40%",
            },4000)
            $(".switchAnimation div").eq(1).animate({
                left:"-60%",
            },4000,'swing')
            $(".switchAnimation div").eq(2).animate({
                left:"-30%",
            },4000,'swing')
            $(".switchAnimation div").eq(3).animate({
                left:"-80%",
            },4000,'swing')
            $(".switchAnimation div").eq(4).animate({
                left:"-180%",
            },7000,'swing')
            $(".switchAnimation div").eq(5).animate({
                left:"-180%",
            },7000,'swing')
            $(".switchAnimation div").eq(6).animate({
                left:"-160%",
            },7000,'swing')
            $(".switchAnimation div").eq(7).animate({
                left:"-150%",
            },7000,'swing')
            $(".switchAnimation div").eq(8).animate({
                left:"-226%",
            },8500,'swing')
        }
        function switchanmiate() {
            
            $(".arcAnimation").fadeOut()
            $(".switchBox").show()
            $(".switchBox").animate({
                // left:"100%",
                top:"90%",
            },2000,'swing');
            setTimeout(()=>{
            $(".switchBox .switchTitle").animate({
                fontSize: '.3rem'
            },2000,goamian);
            },200)
            $(".switchBox .cn").animate({
                fontSize: '12px'
            },2000);
            setTimeout(()=>{
                $(".switchBox .cn").fadeOut()
            },2000)
        }

        // 三角光点 光线动画
        function goamian(){
            $(".triangle").fadeIn()


            $(".lineRight").fadeIn()
            $(".lineImg3").addClass("intro");
            $('.lineImg3').animate({left:'83%',opacity: '0'},500,setblack1);
            setTimeout(() => {
                $(".lineTop").fadeIn()
                $(".lineImg1").addClass("intro");
                $('.lineImg1').animate({left:'83%',opacity: '0'},500,setblack2);
                $('.lineImg1').css('left', '0%')
            }, 450);
            setTimeout(() => {
                $(".lineLeft").fadeIn()
                $(".lineImg2").addClass("intro");
                $('.lineImg2').animate({left:'83%',opacity: '0'},500,setblack3);
                $('.lineImg2').css('left', '0%')
            }, 900);
        
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
                    $('.secondAnimation').animate({left: '0%',top: '-6%'},1000)
                }
                $('.triangle_contents').animate({width: '0px',height: '0px'},1000);
                $('.triangle_content').animate({width: '80px',height: '50px'},1000,showProduct);
                
                // function showLight(){
                //     $('.secondAnimation').fadeOut()
                //     $('.thirdAnimation').fadeIn()
                //     setTimeout(()=>{
                //     $('.thirdAnimation').fadeOut(0, showProduct)
                //     },500)
                // }
                function showProduct(){
                    $('.secondAnimation').fadeOut()
                    $('.fourthAnimation').fadeIn()
                    $('.fourthAnimation').css('display','flex')
                    $('.product').fadeIn(1000)
                    $('.productImg1').fadeIn(1000, hideLight)
                }
                function hideLight(){
                    // $('.lightImg2').fadeOut()
                    $('.productImg1').css('background-image',"url('./img/8-产品1（无光源+倒影）.png')")
                    // $('.productImg1').fadeOut(100,()=>{
                    //     $('.productImg2').fadeIn()
                    // })
                    $('.productImg2').fadeIn(1000,showProductDesc)

                }
                function showProductDesc(){
                    $('.product_content').animate({
                        'width': isPCFlag? '50%': '55%',
                    }, 1000, 'linear');
                    $('.product_desc').animate({
                        'width': isPCFlag? '50%': '45%',
                    }, 1000, 'linear',()=>{
                        $('.title_img').animate({
                            'opacity': '1'
                        }, 1000, 'linear',()=>{
                            $('.dscbottomBox').animate({
                                'opacity': '1'
                            }, 1000, 'linear',()=>{
                                // setTimeout(()=>{
                                    $(".contentText .imgText").eq(0).fadeIn(1000)
                                    $(".setbutton").fadeIn(1000)
                                    $(".dilaog").hide()
                                // },00)
                            })
                        });
                    });
                }

            }, 1500);
            
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
            // console.log(isEmail($(".email").val()))
            // console.log(isCellphone($(".phone").val()))
            if(!isEmail($(".email").val())) {
                $(".email").next(".verification").show()
                
            }else {
                $(".email").next(".verification").hide()
            }
            if(!isCellphone($(".phone").val())) {
                $(".phone").next(".verification").show()
            }else {
                $(".phone").next(".verification").hide()
            }
            if(isEmail($(".email").val()) && isCellphone($(".phone").val())){
                CloseDiv('MyDiv','fade')
                $(".dialog input").val("")
                // 方案一：直接取项目资源文件
                
                // var url = "./static/pdf/DataSheet_BT5300-v5.pdf";
                // window.open(url);
                let a = document.createElement('a');
                a.setAttribute('href','./static/pdf/DataSheet_BT5300-v5.pdf');
                a.setAttribute('download','BT5300-v5.pdf');
                a.setAttribute('target','_blank');
                document.body.appendChild(a);
                a.style.display = 'none';
                a.click();
                document.body.removeChild(a)


                // 方案二：通过接口获取文件流 content 创建下载任务
                // var fileName = 'BT5300-v5.pdf'
                // var aTag = document.createElement('a');
                // var blob = new Blob([content],{ type: 'application/pdf' });
                // aTag.download = fileName;
                // aTag.href = URL.createObjectURL(blob);
                // aTag.click();
                // URL.revokeObjectURL(blob);
                // document.body.removeChild(aTag)
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
        return str?pattern.test(str):false;
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
        return str?pattern.test(str):false;
    }
    
       
