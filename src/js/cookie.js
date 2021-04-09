function cookie(key,value,json){
    json = json || {};
    let cookie_str = encodeURIComponent(key) + '=' + encodeURIComponent(value);
    if(!isNaN(json.expires)){
        let date = new Date();
        date.setDate(date.getDate() + json.expires);
        cookie_str += ';expires=' + date;
    }
    if(json.path){
        cookie_str += ';path=' + json.path;
    }
    if(json.domain){
        cookie_str += ';domain=' + json.domain;
    }
    if(json.secure){
        cookie_str += ';secure';
    }
    document.cookie = cookie_str;
}

function getCookie(key){
    let arr = document.cookie.split('; ');
    for(let i = 0; i < arr.length;i ++){
        let list = arr[i].split('=');
        if(encodeURIComponent(key) === list[0]){
            return decodeURIComponent(list[1])
        }
    }
}

function removeCookie(key,json){
    json = json || {};
    if(json.path){
        document.cookie = encodeURIComponent(key) + '=;expires=' + new Date(0) + ';path=' + json.path;
    }else{
        document.cookie = encodeURIComponent(key) + '=;expires=' + new Date(0);
    }
}