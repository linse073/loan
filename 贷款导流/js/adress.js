/**
 * Created by wangxiang on 2018/6/29.
 */
/* /!**
 * 设置默认值
 *!/
 !function () {
 var a = $('#d1');
 a.citySelect({
 provance: '新疆',
 city: '乌鲁木齐市',
 area: '天山区'
 });

 a.on('click', function (event) {
 event.stopPropagation();
 console.log(1)
 a.citySelect('open');
 });

 a.on('done.ydui.cityselect', function (ret) {
 $(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
 });
 }();*/


window.onload=function () {
    $('.cityselect-title b').on('click',function () {
        $('.mask-black').click();
    })
    $('.success-modal-content button').on('click',function () {
        $('.success-modal').hide()
    })
    !function () {
        var a = $('#d1');
        a.citySelect();
        a.on('click', function (event) {
            console.log(1)
            event.stopPropagation();
            a.citySelect('open');
        });

        a.on('done.ydui.cityselect', function (ret) {
            $(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
        });
    }();
    !function () {
        var a = $('#d2');
        a.citySelect();
        a.on('click', function (event) {
            console.log(1)
            event.stopPropagation();
            a.citySelect('open');
        });

        a.on('done.ydui.cityselect', function (ret) {
            $(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
        });
    }();
    $('.m-cityselect').on('click','.cityselect-item a',function () {
        var hasClass=$(this).hasClass('crt')
        if(!hasClass){
            var num=$(this).parent().parent('.cityselect-item').index();
            console.log(num)
            if(num!=2){
                $(this).parent().parent('.cityselect-item').hide().next().show();
            }
        }else{
            return
        }

    })
    $('.m-cityselect').on('click','.cityselect-nav > a',function () {
        var num= $(this).index();
        $($('.cityselect-item')[num]).show().siblings().hide();
    })

}
