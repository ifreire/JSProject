function deletePost(id)
{
    deletePostById(id);
    cancelPost();
}

function deletePostById(id)
{
    var url = getURLheroku() + "posts/" + id;
    var req = new XMLHttpRequest();
    req.responseType = 'json';
    req.onloadend = listAllPosts;
    req.open(Event.HTTP_VERBS.DELETE, url, true);
    req.send(null);
}