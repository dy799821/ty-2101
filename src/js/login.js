class Login{
    constructor(){
        this.inp = $('.log');
        console.log(this.inp)
        this.arr = [false,false]
        // alert(this.inp)
        this.addEvent()
    }
    addEvent(){
        let that = this;
        this.inp.eq(0).blur(function(){
            let re = /\d{3,}/;
            let str = $(this).val();
            // console.log(str);
            if(re.test(str)){
                $(this).css('background-color','yellowgreen')
                that.arr[0] = true;
            }else{
                $(this).css('background-color','red')
                that.arr[0] = false;
            }
        })
        this.inp.eq(1).blur(function(){
            // alert('1')
            let re = /\w{3,}/;
            let str = $(this).val();
            // console.log(str);
            if(re.test(str)){
                $(this).css('background-color','yellowgreen')
                that.arr[1] = true;
            }else{
                $(this).css('background-color','red')
                that.arr[1] = false;
            }
        })
        this.inp.eq(2).click(function(){
            if(that.arr.indexOf(false) === -1){
                //注册成功存储到cookie中
               let user = that.inp.eq(0).val();
               let upwd = that.inp.eq(1).val();
               
               //判断用户是否存在
               let cookie_str = getCookie('uname') ? getCookie('uname') : '';
               console.log(cookie_str)
               let cookie_obj = that.convertStrToObj(cookie_str);
               console.log(cookie.obj)
               if(user in cookie_obj){
                   if(cookie_obj[user] === upwd ){
                       alert('登陆成功');
                       location.href = 'product.html'
                   }
               }else{
                   alert('请输入正确的账户密码')
               }

                // console.log(cookie_obj)
               
            }else{
                alert('请输入正确的格式')
            }
        })
    }
    convertStrToObj(str){
        if(!str){
            return {};
        }
        return JSON.parse(str);
    }
}
new Login()
