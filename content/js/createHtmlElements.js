function createHtmlElement(elementType, elementTag, elementValue, elementId, elementFunction)
{
    var element = document.createElement(elementTag);
    var append = createAppend(elementType, elementValue, elementId, elementFunction);
    element.setAttribute("id", elementTag + "_" + elementFunction + "_" + elementId);
    element.appendChild(append);
    return element;
}

function createAppend(elementType, elementValue, elementId, elementFunction)
{
    try
    {
        switch(elementType)
        {
            case "text":
                return document.createTextNode(elementValue);
                break;
            case "button":
                return createInput(elementType, elementId, elementFunction);
                break;
            default:
                throw("The function createAppend needs an elementType!");
                alert(err);
                break;
        }
    }
    catch(err)
    {
        console.log(err);
        alert(err);
        throw("");
    }
}

function createInput(elementType, idValue, textValue)
{
    var button = document.createElement("input");
    button.setAttribute("type", elementType);
    button.setAttribute("value", textValue);

    if (elementType == "button")
    {
        button.setAttribute("class", "btn" + textValue);
        button.setAttribute("id", textValue + "_" + idValue);
    }
    else if (elementType == "text")
        button.setAttribute("id", "text_" + idValue);

    return button;
}