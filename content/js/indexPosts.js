document.addEventListener(Event.DOM_CONTENT_LOADED, init);

function init(e)
{
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

/*
function buscando_dados()
{
    $.post('ajax.php', {}, function(dados)
    {
        alert(dados); 
    });
}
function buscar_dados()
{
    buscando_dados();
    alert('prosseguindo'); //Prosseguindo está função sem esperar a outra acabar a requisição
}

function buscando_dados(func)
{
    $.post('ajax.php', {}, function(dados)
    {
        func.call(this, dados);
    });
}

function buscar_dados(){
    buscando_dados(function(dados)
    {
        alert('prosseguindo'); //Prosseguindo está função sem esperar a outra acabar a 
    });
}
*/