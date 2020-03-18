var username = document.getElementById('username');
var usernameError = document.getElementById('warnword1');
var tel = document.getElementById('tel');
var telError = document.getElementById('warnword2');
var pwd = document.getElementById('pwd');
var pwdError = document.getElementById('warnword3');
var code = document.getElementById('code');
var codeError = document.getElementById('warnword4');
var codeSend = document.getElementById('btn');
var submit = document.getElementById('register');



//判断用户名
username.onfocus = function () {
    usernameError.innerHTML = '';
    username.style.borderColor = '';
}
username.onblur = function () {
    var value = username.value;
    var len = 0;
    if (value === '') {
        return 0;
    }
    for (var i = 0; i < value.length; i++) {
        //如果是中文就+2，否则+1
        if (/[\xa1-\xffA-Za-z]/.test(value[i])) {
            len += 2;
        } else {
            len += 1;
        }
    }
    if (len > 14) {
        usernameError.innerHTML = "用户名不能超过7个汉字或14个字符";
        username.style.borderColor = "red";
    } 
    var reg1 = /^[0-9a-zA-Z_\u4e00-\u9fa5]+$/;//数字英文和中文还有-_和空格
    if (!(reg1.test(value))) {
        usernameError.innerHTML = '用户名仅支持中英文、数字和下划线,且不能为纯数字';
        username.style.borderColor = 'red';
    }
    var reg2 = /^[0-9]+$/;//整数
    if (reg2.test(value)) {
        usernameError.innerHTML = '用户名仅支持中英文、数字和下划线,且不能为纯数字';
        username.style.borderColor = 'red';
    }
    return;
}

//判断手机号
tel.onfocus = function () {
    telError.innerHTML = '';
    tel.style.borderColor = '';
}
tel.onblur = function () {
    var value = tel.value;
    if (value === '') {
        return 0;
    }
    //11位数字,手机号码使用正则表达式完成验证
    var reg = /^1[34578]\d{9}$/;
    if (reg.test(value) === false) {
        telError.innerHTML = '手机号码格式不正确';
        tel.style.borderColor = 'red';
    }
    return;
}

//判断密码
pwd.onfocus = function () {
    pwdError.innerHTML = '';
    pwd.style.borderColor = '';
}
pwd.onblur = function () {
    var value = pwd.value;
    if (value === '') {
        pwdError.innerHTML = '密码设置不符合要求';
        pwd.style.borderColor= 'red';
        return 0;
    }
    var reg = /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))(?!^.*[\u4E00-\u9FA5].*$)^\S{8,14}$/;
    if (reg.test(value) === false) {
        pwdError.innerHTML = '密码设置不符合要求';
        pwd.style.borderColor = 'red';
    }
    return;
}

//判断验证码
code.onfocus = function () {
    codeError.innerHTML = '';
    code.style.borderColor = '';
}
code.onblur = function () {
    var value = code.value;
    if (value === '') {
        return 0;
    }
    return;
}

codeSend.onclick = function () {
    var time = 60;
    codeSend.value = '重新发送(' + time + '秒)';
    codeSend.setAttribute("disabled", true);
    var timer = setInterval(function () {
        codeSend.value = '重新发送(' + time-- + '秒)';
        if (time < 0) {
            clearInterval(timer);
            codeError.innerHTML = '请求超时，请稍后再试';
            code.style.borderColor = 'red';
            codeSend.value = '重新发送';
            codeSend.style.color = '#000000';
            codeSend.removeAttribute("disabled");
        }
    }, 1000);
}
//提交
submit.onclick = function () {
    if (username.onblur() === 0) {
        usernameError.innerHTML = '用户名不能为空';
        username.style.borderColor = 'red';
    }
    if (tel.onblur() === 0) {
        telError.innerHTML = '手机号不能为空';
        tel.style.borderColor = 'red';
    }
    if (pwd.onblur() === 0) {
        pwdError.innerHTML = '密码不能为空';
        pwd.style.borderColor = 'red';
    }
    if (code.onblur() === 0) {
        codeError.innerHTML = '验证码不能为空';
        code.style.borderColor = 'red';
    }
}