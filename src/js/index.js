class Index{
    constructor(){
        this.nav = $('#nav');
        // alert(this.nav)
        console.log(this.nav)
        //获取滚动高度
        this.btn = $('.span');
        console.log(this.btn);
        // console.log(this.scroll_top)
        // this.addEvent()
    }
    addEvent(){
        this.btn.click(function(){
            location.href = '../dist/pages/login.html'
        })
        $(document).scroll(function(){
            // alert('1')
            let scroll_top = $(document).scrollTop();
            // console.log(scroll_top)
            if(scroll_top > 80){
                //nav里面的后边元素隐藏
                $('#seach').css("display","none");
                $('#nav-cen span').css("display","inline-block")

            }else{
                $('#seach').css("display","block");
                $('#nav-cen span').css("display","none")
            }
        })
    }
}
new Index().addEvent();
