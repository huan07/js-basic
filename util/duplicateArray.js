/**
 * Created by yanghuan on 18/7/2.
 */
function duplicateArray(arr){
    var hash = {};
    var result = [];
    var current;

    for (var i = 0, len = arr.length; i < len; i++) {
        current = arr[i];
        if (!hash[current]) {
            hash[current] = true;
            result.push(current);
        }
    }
    return result;
}