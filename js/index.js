item = $(".item-home").click(function() {
    gotodetail();
});

function gotodetail() {
    window.location = "product-detail.html";
    console.log("goto");
}