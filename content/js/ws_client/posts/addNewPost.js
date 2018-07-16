function saveDeletePost(obj)
{
    var btnAddSaveDelete = obj;

    switch (btnAddSaveDelete.value)
    {
        case "Add":
            addSavePost(true);
            break;
        case "Save":
            addSavePost(false);
            break;
        case "Edit":
            editPost(btnAddSaveDelete);
            break;
        case "Delete":
            deletePost(btnAddSaveDelete.id.split("_")[1]);
            break;
    }
}

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
        content : document.getElementById("contentPost").value
    };

    submitPost(post, isNewPost);
    reloadAllPosts();
    calcelPost();
}

function clearFormPost()
{
    clearElementById("idPost");
    clearElementById("titlePost");
    clearElementById("contentPost");
}

function editPost(obj)
{
    var id = obj.id.split("_")[1];

    changeButtonAddSave("Save");
    fillFormEditPost("id", id);
    fillFormEditPost("title", id);
    fillFormEditPost("content", id);
}

function fillFormEditPost(identifier, id)
{
    var idElement = "td_" + identifier + "_" + id;
    var td_element = document.getElementById(idElement);
    var elementPost = document.getElementById(identifier + "Post");
    elementPost.value = td_element.innerHTML;
}

function calcelPost()
{
    changeButtonAddSave("Add");
    clearFormPost();
}

function changeButtonAddSave(newValue)
{
    var btnAddSave = document.getElementById("btn_insert_post");
    btnAddSave.value = newValue;
}

function submitPost(post, isNewPost)
{
    var httpVerb = isNewPost ? Event.HTTP_VERBS.POST : Event.HTTP_VERBS.PUT;
    var url = getURLheroku() + "posts/";

    if (isNewPost) url = url + "new_post";
    else url = url + post.id;

    log(httpVerb);
    log(url);

    var req = new XMLHttpRequest();
    
    req.open(httpVerb, url, true);
    req.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    req.send(JSON.stringify(post));
    
    function processError(result)
    {
        log("Deu erro...");
    }
}

function deletePost(id)
{
    deletePostById(id);
    reloadAllPosts();
    calcelPost();
}

function deletePostById(id)
{
    var url = getURLheroku() + "posts/" + id;
    var req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open(Event.HTTP_VERBS.DELETE, url, true);
    req.send(null);
}