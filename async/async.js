/**
 * Created by yanghuan on 18/10/10.
 */

function async(arg, callback){
    console.log('参数为 ' + arg + ' ,1秒后返回结果');
    setTimeout(function(){
        callback(arg * 2);
    }, 1000);
}

function final(value){
    console.log('完成：', value);
}