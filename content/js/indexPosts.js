document.addEventListener(Event.DOM_CONTENT_LOADED, init);

function init(e)
{
    document.getElementById("local").innerHTML = window.location.href;

    $("#btn_list_post_by_id").click(function (event) {
    	listPostByID(document.getElementById("id_post").value);
    });
    
    $("#btn_list_all_posts").click(function (event) {
        listAllPosts();
    });
    
    $("#btn_insert_post").click(function (event) {
        saveDeletePost(this);
    });

    $("#btn_cancel_post").click(function (event) {
        cancelPost();
    });
    
    $("#t_body").on("click", "input", function() {
        saveDeletePost(this);
    });

    $("#btn_clear_tbody").click(function (event) {
        clearTBodyById("t_body");
    });
}