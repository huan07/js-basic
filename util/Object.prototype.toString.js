/**
 * Created by yanghuan on 18/6/20.
 */

function isArray(value){
    return Object.prototype.toString.call(value) === '[object Array]';
}

function isObject(value){
    return Object.prototype.toString.call(value) === '[object Object]';
}

function isRegExp(value){
    return Object.prototype.toString.call(value) === '[object RegExp]';
}