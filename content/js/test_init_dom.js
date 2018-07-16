document.addEventListener(Event.DOM_CONTENT_LOADED, init);

function init(e)
{
    var campo1 = new TextField("nome", "Nome:");
    campo1.criar();

    var campo2 = new TextField("email", "Email:");
    campo2.criar();
}

function TextField(id, label)
{
    var frag = document.createDocumentFragment();

    this.label = document.createElement("label");
    this.label.setAttribute("for", id);
    this.label.innerText = label;
    frag.appendChild(this.label);

    this.input = document.createElement("input");
    this.input.type = "text";
    this.input.id = id;
    frag.appendChild(this.input);

    this.criar = function()
    {
        document.body.appendChild(frag);
    }
}

TextField("nome");