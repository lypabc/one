;(function(window,$){
    $(function(){
        var $head_ul=$('#head_list'),
            $head_li=$head_ul.children('li'),
            len=$head_li.length;
        var $news_li=$('.news_list').find('li');
        /*点击头部菜单列表显示下拉菜单*/
        $head_li.on('click',function(){
            if($('#head_list>li:has(ul)')){
                $(this).find('.head_child_list').show().parent('li').siblings().find('.head_child_list').hide();

            }
        });
        /*鼠标经过导航栏的效果*/
        $('.menu>li').on('hover',function(){
            var ind=$(this).index()-1;
            $(this).addClass('cur').siblings().removeClass('cur');
            if( $('.country_list>ul').eq(ind)){
                $('.country_list>ul').eq(ind).addClass('on').siblings().removeClass('on');
            }
        });
        /*鼠标经过侧边栏的效果*/
        $('.main_one_left li').on('hover',function(){
            $(this).addClass('current').siblings().removeClass('current');
            if($(this).children('div').hasClass('second_menu')){
                $('.second_menu').show().parent('.current').siblings().find('.second_menu').hide();
            }
        });
        /*最新资讯等菜单的效果*/
        $('.news_nav li').on('hover',function(){
            var index=$(this).index();
            $(this).addClass('hovers').siblings().removeClass('hovers');
            $('.news_list>ul').eq(index).show().siblings().hide();
        })
        $('.news_list ul').eq(0).show();
        $news_li.on('hover',function(){
            $(this).addClass('new_cur').siblings().removeClass('new_cur');
        });
        var text = $('.search_text').val();
        $('.search_text').on('focus',function(){
            var onText=$(this).val();
            if(text==onText){
                $(this).val('');
            }
        });
        $('.search_text').on('blur',function(){
            if($(this).val()==''){
                $(this).val(text);
            }
        });
        $('.pic_nav>li').on('hover',function(){
            var index=$(this).index();
            $('.pics>img').hide().eq(index).fadeIn(500);
            $(this).addClass('onl').siblings().removeClass();
        })
    })
})(window,jQuery);