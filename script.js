jQuery(function($){

    setTimeout(man, 1900);

    function man(){
        $('.man').addClass('man_1');
    };

    $(window).scroll(function(){
        
        let scroll = $(window).scrollTop() + $(window).height(),
            dop_scroll =  $(window).scrollTop(),
            pod_header = $('.pod_header'),
            t_1 = $('.pod_header div:nth-child(1)'),
            t_2 = $('.pod_header div:nth-child(3)'),
            jack = $('.face'),
            block = $('.close_block'),
            hends = $('.hends'),
            x = -150,
            p_1 = $('.center_text p:nth-child(1)'),
            p_2 = $('.center_text p:nth-child(2)'),
            p_o = $('.block_1 p'),
            header = $('header'),


            offset_pod = (pod_header.offset().top + pod_header.height()/3),
            offset_t_1 = (t_1.offset().top + t_1.height()),
            offset_t_2 = (t_2.offset().top + t_2.height());
            offset_jack = (jack.offset().top + jack.height());
            offset_block = block.offset().top,
            offset_block_heigth = (block.offset().top + block.height());
            offset_hends = (hends.offset().top + hends.height());
            offset_p_o = (p_o.offset().top + p_o.height());


        if (scroll > offset_p_o*1.1){
            $(p_o).css({
                'opacity':'1',
                'transition':'1s',
            });
        };

        if (scroll < offset_pod*1.5){
            $(p_1).css({
                'transform':'translate('+ -dop_scroll/7 +'px,'+ -dop_scroll/7+ 'px)',
            });
            $(p_2).css({
                'transform':'translate('+ dop_scroll/7 +'px,'+ dop_scroll/7+ 'px)',
            });
        };

        if (scroll > offset_pod){
            $('.knife').css('animation-name','knife');
        };

        if (scroll > offset_t_1 - t_1.height() & scroll < offset_t_1 + t_1.height()+300){
            $(t_1).css({
                'opacity' : dop_scroll*0.0009,
            });
            $(t_1).css({
                 'transform': 'translate('+(x + dop_scroll/10)+'px,'+ (x + dop_scroll/10)+'px)',
             }); 
        };

        if (scroll > offset_t_2 - t_2.height() & scroll < offset_t_2){
            $(t_2).css({
                'opacity' : dop_scroll*0.0008,
            });
            $(t_2).css({
                'transform': 'translate('+(-x - dop_scroll/5)+'px,'+ (-x - dop_scroll/5)+'px)',
            }); 
        };

        if (scroll > offset_jack){
            $(jack).css('opacity','1');
        };

        if (scroll > offset_block - block.height()/2 & dop_scroll < offset_block_heigth/1.4){

            $(block).css({
                'height' : dop_scroll/40 +'vw',
            });
        };

        if (scroll > offset_hends){
            $(hends).css({
                'opacity':1,
                'transition-delay':'1s',
                'transition-duration':'0.5s'
            });
        };

    
});
        //Анимации для двери
    function anim_door(){
        $('.block_1').css({
            'transform':'scale(18)',
        })
    };
    $('.door').click(function(){
        $('.enter_door').css({
            'transform':'rotateY(-90deg) translateZ(-160px) translateX(70px)',
            'transition':'1.5s ease',
        });

        setTimeout(anim_door, 700);//Тайм-аут для двери

        //Появление блоков
        let scroll = $(window).scrollTop() + $(window).height();
        block_1 = $('.block_1');

        offset_block = (block_1.offset().top);
            $('body,html').animate({
                scrollTop: offset_block
            }, 200);
            return false;
    });

    return false;
    $(document).ready();
}); 