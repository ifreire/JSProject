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

function clearFormPost()
{
    clearElementById("idPost");
    clearElementById("titlePost");
    clearElementById("contentPost");
    clearElementById("emitDatePost");
    clearElementById("expireDatePost");
}

function fillFormEditPost(identifier, id)
{
    var idElement = "td_" + identifier + "_" + id;
    var td_element = document.getElementById(idElement);
    var elementPost = document.getElementById(identifier + "Post");
    elementPost.value = td_element.innerHTML;
}

function cancelPost()
{
    changeButtonAddSave("Add");
    clearFormPost();
}

function changeButtonAddSave(newValue)
{
    var btnAddSave = document.getElementById("btn_insert_post");
    btnAddSave.value = newValue;
}

function processPosts(posts)
{
    clearTBodyById("t_body");

    posts.forEach(function(post)
    {
        fillTablePosts(post);
    });
}

function processPost(post)
{
    clearTBodyById("t_body");
    fillTablePosts(post);
}

function fillTablePosts(post)
{
    var id = post.id.toString();
    var title = post.title;
    var content = post.content;
    var emitDate = post.emitDate;
    var expireDate = post.expireDate;
    
    var tr = document.createElement("tr");
    tr.appendChild(createHtmlElement("text", "td", id, id, "id"));
    tr.appendChild(createHtmlElement("text", "td", title, id, "title"));
    tr.appendChild(createHtmlElement("text", "td", content, id, "content"));
    tr.appendChild(createHtmlElement("text", "td", emitDate, id, "emitDate"));
    tr.appendChild(createHtmlElement("text", "td", expireDate, id, "expireDate"));
    tr.appendChild(createHtmlElement("button", "td", "", id, "Edit"));
    tr.appendChild(createHtmlElement("button", "td", "", id, "Delete"));
    
    document.getElementById("t_body").appendChild(tr);
}