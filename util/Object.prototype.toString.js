/**
 * Created by yanghuan on 18/6/20.
 */

function objectToString(o){
    return Object.prototype.toString.call(o);
}

function isArray(value){
    return objectToString(value) === '[object Array]';
}

function isObject(value){
    return objectToString(value) === '[object Object]';
}

function isRegExp(value){
    return Object.prototype.toString.call(value) === '[object RegExp]';
}