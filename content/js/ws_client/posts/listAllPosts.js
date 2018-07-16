function listAllPosts()
{
	var url = getURLheroku();
    var req = new XMLHttpRequest();
    req.onloadend = processGetAllPosts;
    req.responseType = 'json';
    req.open(Event.HTTP_VERBS.GET, url, true);
    req.send(null);
    
    function processGetAllPosts(result)
    {
    	if (req.status === 404 || req.response.length === 0)
		{
    		clearTBodyById("t_body");
    		alert("Nenhum post encontrado!");
		}
    	else if (req.status === 200 && req.readyState === 4)
            processPosts(req.response); 
    }
}