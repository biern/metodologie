function wrapLists () {
    var lis = document.getElementsByTagName('li');

    for (i = 0; i < lis.length; i++) {
        lis[i].innerHTML = '<span class="list-el">' + lis[i].innerHTML + '</span>';
    }
};


window.onload = function () {
    if (document.getElementById('impress')) {
        var api = window.api = impress();
        api.init();
    }
    wrapLists();
};
