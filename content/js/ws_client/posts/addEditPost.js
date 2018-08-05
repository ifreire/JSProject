function addSavePost(isNewPost)
{
    if (document.getElementById("titlePost").value == "")
    {
        alert("Preencha o campo Title!");
        return;
    }

    if (document.getElementById("contentPost").value == "")
    {
        alert("Preencha o campo Content!");
        return;
    }

    var post = {
        id : document.getElementById("idPost").value,
        title : document.getElementById("titlePost").value,
        content : document.getElementById("contentPost").value,
        emitDate : document.getElementById("emitDatePost").value,
        expireDate : document.getElementById("expireDatePost").value
    };

    cancelPost();
    submitPost(post, isNewPost);
}

function editPost(obj)
{
    var id = obj.id.split("_")[1];

    changeButtonAddSave("Save");
    fillFormEditPost("id", id);
    fillFormEditPost("title", id);
    fillFormEditPost("content", id);
    fillFormEditPost("emitDate", id);
    fillFormEditPost("expireDate", id);
}

function submitPost(post, isNewPost)
{
    var httpVerb = isNewPost ? Event.HTTP_VERBS.POST : Event.HTTP_VERBS.PUT;
    var url = getURLheroku() + "posts/";

    if (isNewPost) url = url + "new_post";
    else url = url + post.id;

    var req = new XMLHttpRequest();
    req.open(httpVerb, url, true);
    req.onloadend = listAllPosts;
    req.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    req.send(JSON.stringify(post));
}