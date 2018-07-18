var queryStingArgs = (function(){
    var search = location.search || '?_ijt=8g3eqe0kqpfcbqjquhjrmdd6r1';
    var qs = search ? search.substring(1) : '';
    var items = qs ? qs.split('&') : [];
    var args = {};
    var itemArr = [];
    items.forEach((item) =>{
        itemArr = item.split('=');
        if (itemArr[0]) {
            args[decodeURIComponent(itemArr[0])] = decodeURIComponent(itemArr[1]);
        }
    });
    return args;
})();
console.log('queryStingArgs', queryStingArgs);