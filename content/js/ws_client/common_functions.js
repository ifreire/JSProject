function getURLheroku()
{
    //return Event.WS_HEROKU;
    return Event.WS_LOCAL;
}

function reloadAllPosts()
{
    setTimeout(function() {
        listAllPosts();
    }, Event.WS_TIMEOUT);
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

//function getElementById(id)
//{
//    return document.getElementById(id);
//}

function log(text)
{
    console.log(text);
}

function clearElementById(id)
{
    document.getElementById(id).value = "";
}

function clearTextById(id)
{
    document.getElementById(id).innerHTML = "";
}

function clearTBodyById(id)
{
    document.getElementById(id).innerHTML = "";
}

function fillTablePosts(post)
{
    var id = post.id.toString();
    var title = post.title;
    var content = post.content;
    
    var tr = document.createElement("tr");
    tr.appendChild(createHtmlElement("text", "td", id, id, "id"));
    tr.appendChild(createHtmlElement("text", "td", title, id, "title"));
    tr.appendChild(createHtmlElement("text", "td", content, id, "content"));
    tr.appendChild(createHtmlElement("button", "td", content, id, "Edit"));
    tr.appendChild(createHtmlElement("button", "td", content, id, "Delete"));
    
    document.getElementById("t_body").appendChild(tr);
}