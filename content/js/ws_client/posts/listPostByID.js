function listPostByID(id)
{
	if (id == "" || id <= 0)
	{
		alert("Digite um ID!");
		return;
	}
	
    var url = getURLheroku() + "posts/" + id;

    var req = new XMLHttpRequest();
    req.onloadend = processGetPost;
    req.responseType = 'json';
    req.open(Event.HTTP_VERBS.GET, url, true);
    req.send(null);
    
    function processGetPost(result)
    {
    	if (req.status === 404 || req.response.length === 0)
        	alert("Nenhum post encontrado!");
    	else if (req.status === 200 && req.readyState === 4)
        {
        	processPost(req.response);
            document.getElementById("id_post").value = "";
        }
    }
}