function getURLheroku()
{
    return Event.WS_HEROKU;
    //return Event.WS_LOCAL;
}

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
    clearElementInnerHTMLById(id);
}

function clearTBodyById(id)
{
    clearElementInnerHTMLById(id);
}

function clearElementInnerHTMLById(id)
{
    document.getElementById(id).innerHTML = "";
}