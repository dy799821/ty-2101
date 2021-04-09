class Slider{
    constructor(){
        this.ul_li = $('.li');
        this.big_img = $('.img');
        // console.log(this.big_img);
        //初始化zindex
        this.zIndex = 1;
        this.plus = $('.plus');
        this.minus = $('.minus');
        this.num = 1;
        this.mon = $('#monny').text().match(/(\d)+/g)[0];

        console.log(this.mon)
        this.addEvent();

        // this.plus.click(function(){
            
        // })
    }
    addEvent(){
        let that = this;
        this.ul_li.each(function(i){
            // alert($(this));
            $(this).click(function(){
                // console.log(i)
                that.big_img.eq(i).css('z-index',`${that.zIndex++}`)
            })
        })
        this.minus.click(function(){
            // alert(3)
            if($('#num').text() === '1'){
                console.log($('#num').text())
                $('#num').text('1');
                console.log($('#mun'))
                $('#mun').text('1');

            }else{
                $('#num').text(--that.num);
                $('#mun').text(that.num)
                $('#price').text((that.num * that.mon) + ',00')
            }
            // that.num.inner(that.num++);
        })
        // console.log(that.plus)
        this.plus.click(function(){
            $('#num').text(++that.num);
            $('#mun').text(that.num)
            $('#price').text((that.num * that.mon) + ',00')
        })
    }
}
$(function(){
    new Slider();
})

