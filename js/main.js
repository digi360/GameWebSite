$(document).ready(function () {
    $("a[href=#]").on("click", function (e) {
        e.preventDefault();
        //history.pushState({}, "", this.href);
        history.replaceState({}, "", this.href);
    });
});